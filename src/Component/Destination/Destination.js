import './Destination.css';
import GoogleMap from '../Images/Map.png'
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';



const Destination = () => {

    const [location, setLocation ] = useState()

    const history = useHistory()

    const handleBlurText = e => {

        let isFieldValid = true
        if(e.target.name === "text"){

            isFieldValid = e.target.value

        }
        if(isFieldValid){
            const newLocationInfo = {...location}
            newLocationInfo[e.target.name] = e.target.value
            setLocation(newLocationInfo)
            console.log(newLocationInfo)
        }
        
    }
    
    const handleSearch = () => {

        history.push("/destinationDetails")
    }

    return (
        <div className="Container">

            <form action="" className="formFeild">
                <h4>Location:</h4>
                <input type="text" name="text" onBlur={handleBlurText} placeholder="Pick From" className="input-feild"/>
                <br/>
                <br/>
                <input type="text" name="text" onBlur={handleBlurText} placeholder="Pick To" className="input-feild"/>
                <br/>
                <br/>
                <input type="submit" onClick={() => handleSearch()} value="Search" className="search"/>
            </form>
            <div className="googlemap">
                <img className="mapImage" src={GoogleMap} alt="googlemap"/>
            </div>

        </div>
    );
};

export default Destination;