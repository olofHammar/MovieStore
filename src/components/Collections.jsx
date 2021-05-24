import React from 'react';
import '../styles/collections.css';
import { useDispatch, useSelector } from 'react-redux';
import { getTitle } from '../features/titleSlice';


function Collections() {

    const title = useSelector(getTitle);

    return (
        <div className="collectionsContainer">
            This is collections for { title }
        </div>
    )
}

export default Collections
