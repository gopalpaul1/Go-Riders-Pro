import './Destination.css';
import GoogleMap from '../Images/Map.png'



const Destination = () => {

    
    
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
                <input type="submit" value="Search" className="search"/>
            </form>
            <div className="googlemap">
                <img className="mapImage" src={GoogleMap} alt="googlemap"/>
            </div>
        </div>
    );
};

export default Destination;