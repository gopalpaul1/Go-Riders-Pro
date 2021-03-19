import { useEffect, useState } from 'react';
import ridersData from '../FakeData/fakeData.json'
import Riders from '../Riders/Riders';

import './Home.css'

const Home = () => {

    const [riders, setRiders] = useState([])

    useEffect(() => {

        setRiders(ridersData)

    }, [])

    return (
        <div>
            <div className="RiderContainer">
                {
                    riders.map(rider => <Riders rider={rider} key={rider.id}/>)
                }
            </div>
        </div>
    );
};

export default Home;