import './Destination.css';
import GoogleMap from '../Images/Map.png'
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';




const Destination = () => {

    let {id} = useParams()
    
    const [rider, setRider] = useState([])

    useEffect(() => {

        setRider(id)
        

    }, [])

    const searchLocation = () => {

        console.log("cliked")

    }
    
    return (
        <div className="Container">

            <form action="" className="formFeild">
                <h4>Location:</h4>
                <input type="text" name="text" placeholder="Pick From" className="input-feild"/>
                <br/>
                <br/>
                <input type="text" name="text" placeholder="Pick To" className="input-feild"/>
                <br/>
                <br/>
                <input type="submit" onClick={searchLocation} value="Search" className="search"/>
            </form>
            <div className="googlemap">
                <img className="mapImage" src={GoogleMap} alt="googlemap"/>
            </div>
        </div>
    );
};

export default Destination;