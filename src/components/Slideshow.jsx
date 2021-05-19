import React, { useState, useRef, useEffect } from 'react'
import image_one from '../background.png';
import image_two from '../background_pop.jpg';
import image_three from '../background_sign.jpg';
import '../styles/slideshow.css';

const images = [   
    { id: 0, src: image_one, title: 'first', description: 'logo' },
    { id: 1, src: image_two, title: 'second', description: 'pop' },
    { id: 2, src: image_three, title: 'third', description: 'sign' },
];
const delay = 5000;

function Slideshow() {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() =>
        setIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
        delay
    );
}, [index]);


    return (
        <div className="slideshow">
            <div className="slideshowSlider"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)`}}>
                {images.map((background, index) => (
                        <img src={background.src} alt="image" 
                        className="slide" key={background.id} />
                ))}
            </div>
        </div>
    )
}

export default Slideshow
