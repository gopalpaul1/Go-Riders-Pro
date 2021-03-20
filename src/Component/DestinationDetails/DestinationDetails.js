import React from 'react';
import Map from '../Images/Map.png'

const DestinationDetails = (props) => {
    console.log(props.name)
    
    const {image} = props.name
    
    return (
        <div>

            <div>
                <img style={{width:"20px"}} src={image} alt="images"/>
            </div>

            <div>
                <img style={{width:"200px", height:"200px"}} src={Map} alt=""/>
            </div>
        </div>
    );
};

export default DestinationDetails;