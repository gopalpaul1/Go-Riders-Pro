import React from 'react';
import { useHistory } from 'react-router';
import './Riders.css'

const Riders = (props) => {
    const {name, image, id} = props.rider

    const history = useHistory()

    const handleRider = (id) => {
        
        history.push(`/destination/${id}`)
    }

    return (
        <div onClick={() => handleRider(id)} className="RiderContent">
            <img className="Image" src={image} alt="images"/>
            <h2 className="Text">{name}</h2>
        </div>
    );
};

export default Riders;