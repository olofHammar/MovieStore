import React from 'react';
import '../styles/collections.css';
import { useParams } from 'react-router-dom';


function Collections() {

    const { title } = useParams();

    return (
        <div className="collectionsContainer">
            <h3>This is collections for { title }</h3>
        </div>
    )
}

export default Collections
