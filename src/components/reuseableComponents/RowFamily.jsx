import React from 'react'
import image from '../../img/slider_batman.png';
import '../../styles/rowFamily.css';
import c_image from '../../img/mn_collection.png';

function RowFamily() {
    return (
            <div className="familyimageContainer">
                <img src={ c_image } alt="collection" className="familylogo_image" />
                <img src={ image } alt="familyimage" className="familyimage"/>
            </div>            
    )
}

export default RowFamily;
