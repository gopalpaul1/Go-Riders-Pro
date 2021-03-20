import './Destination.css';
import GoogleMap from '../Images/Map.png'
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import riders from '../FakeData/fakeData.json'
import DestinationDetails from '../DestinationDetails/DestinationDetails';

const Destination = () => {

    let { id } = useParams()
    const [rider, setRider] = useState([])

    useEffect(() => {
        setRider(riders)
    },[])

    const userRider = riders.find(rider => rider.id === id)

    const history = useHistory()
    const handleSubmit = () => {
        history.push(`/destinationdetails`)
    }

    return (

        <div >

             <div className="Container">
                <form action="" className="formFeild">
                    <h4>Location:</h4>
                    <input type="text" name="text" placeholder="From" className="input-feild"/>
                    <br/>
                    <br/>
                    <input type="text" name="text"  placeholder="To" className="input-feild"/>
                    <br/>
                    <br/>
                    <input type="date" placeholder="Date" name="date" className="date-feild"/>
                    <br/>
                    <br/>
                    <input type="submit" value="Search" onClick={handleSubmit} className="search"/>
                </form>
                <div className="googlemap">
                    <img className="mapImage" src={GoogleMap} alt="googlemap"/>
                </div>
            </div>

            <div>
                {
                    <DestinationDetails name={userRider}/>
                }
                
            </div>
        </div>
    );
};

export default Destination;