import React from 'react';
import '../styles/collections.css';
import { useParams } from 'react-router-dom';


function Collections() {

    const { title } = useParams();

    return (
        <div className="collectionsContainer">
            This is collections for { title }
        </div>
    )
}

export default Collections
