import React from 'react';
import Map from '../Images/Map.png'

const DestinationDetails = (props) => {
    
    const {image, name, id} = props.name
    
    return (
        <div className="locationDetails">
            <div>
                <div className="card">
                    <img style={{width:"60px"}} src={image} alt="images"/>
                    <p>{name}</p>
                    <p>{id}</p>
                    <p>$ 67</p>
                </div>
                <div className="card">
                    <img style={{width:"60px"}} src={image} alt="images"/>
                    <p>{name}</p>
                    <p>{id}</p>
                    <p>$ 67</p>
                </div>
                <div className="card">
                    <img style={{width:"60px"}} src={image} alt="images"/>
                    <p>{name}</p>
                    <p>{id}</p>
                    <p>$ 67</p>
                </div>
            </div>
            <div className="map-image">
                <img src={Map} alt="map"/>
            </div>
        </div>
    );
};

export default DestinationDetails;