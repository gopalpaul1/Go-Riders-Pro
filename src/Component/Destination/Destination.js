import './Destination.css';
import GoogleMap from '../Images/Map.png'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import riders from '../FakeData/fakeData.json'
import logo from '../Images/peopleicon.png'
import Map from '../Map/Map';


const Destination = () => {

    let { id } = useParams()

    const [rider, setRider] = useState({
        isSignIn: false,
        from: '',
        to: '',
        date: ''
    })

    useEffect(() => {

        setRider(riders)

    },[])
    const userRider = riders.find(rider => rider.id === id)


    const handleBlur = (e) => {

        let isFormValid = true
        if(e.target.name === 'from'){
            isFormValid = e.target.value
        }
        if(e.target.value === 'to'){
            isFormValid = e.target.value
        }
        if(isFormValid){
            const newRiderInfo = {...rider}
            newRiderInfo[e.target.name] = e.target.value
            setRider(newRiderInfo)
            console.log(newRiderInfo)
        }
        
        e.preventDefault()
    }

    const handleSubmit = (e) =>{

        const newRiderInfo = {...rider}
        newRiderInfo[e.target.name] = e.target.value
        const {from, to, date} = rider
        const isSignedIn ={
            isSignIn:true,
            from:from,
            to: to,
            date: date
        }
        setRider(newRiderInfo)
        setRider(isSignedIn)


        e.preventDefault()
    }

    
    return (

        <div >
            <div className="Container" >
                
                { rider.isSignIn ? 
                        <div style={{backgroundColor:"lightGrey", width:"300px",height:"380px",padding:"10px", borderRadius:"15px"}}>
                            <div style={{display:"flex", width:"270px",backgroundColor:"#450085",boxShadow:"0px 5px 20px lightGrey", margin:"10px", padding:"5px"}}>
                                <div>
                                    <p style={{marginLeft:"20px",color:"white",fontSize:"large"}}>{rider.from}</p>
                                    <p style={{marginLeft:"20px",color:"white",fontSize:"large"}}>{rider.to}</p>
                                </div>
                                <p style={{marginLeft:"40px",color:"white",fontSize:"large"}}>{rider.date}</p>
                            </div>
                            <div style={{backgroundColor:"white", display:"flex", margin:"10px", marginTop:"20px", padding:"5px", width:"270px", borderRadius:"5px"}}>
                                <img style={{width:"80px"}} src={userRider.image} alt="images"/>
                                <p >{userRider.name}</p>
                                <p style={{marginLeft:"10px"}}><img style={{width:"20px"}} src={logo} alt=""/> {userRider.id}</p>
                                <p style={{marginLeft:"80px"}}>$67</p>
                            </div>
                            <div style={{backgroundColor:"white", display:"flex", margin:"10px", padding:"5px", width:"270px", borderRadius:"5px"}}>
                                <img style={{width:"80px"}} src={userRider.image} alt="images"/>
                                <p >{userRider.name}</p>
                                <p style={{marginLeft:"10px"}}><img style={{width:"20px"}} src={logo} alt=""/> {userRider.id}</p>
                                <p style={{marginLeft:"80px"}}>$67</p>
                            </div>
                            <div style={{backgroundColor:"white", display:"flex", margin:"10px", padding:"5px", width:"270px", borderRadius:"5px"}}>
                                <img style={{width:"80px"}} src={userRider.image} alt="images"/>
                                <p >{userRider.name}</p>
                                <p style={{marginLeft:"10px"}}><img style={{width:"20px"}} src={logo} alt=""/> {userRider.id}</p>
                                <p style={{marginLeft:"80px"}}>$67</p>
                            </div>
                        </div> :

                        <form onSubmit={handleSubmit} className="formFeild">
                            <h4>Location:</h4>
                            <input type="text" name="from" onBlur={handleBlur} placeholder="From" required className="input-feild"/>
                            <br/>
                            <br/>
                            <input type="text" name="to" onBlur={handleBlur}  placeholder="To" required  className="input-feild"/>
                            <br/>
                            <br/>
                            <input type="date" placeholder="Date" name="date" onBlur={handleBlur} className="date-feild"/>
                            <br/>
                            <br/>
                            <input type="submit" value="Search" onChange={() => setRider(rider)}  className="search"/>
                        </form>           

                }

            <div className="googlemap">
                <Map></Map>
                <img className="mapImage" src={GoogleMap} alt="googlemap"/>
                

            </div>
                
            </div> 
            {/* <div className="googlemap">
                <Map className="mapImage"></Map>
            </div> */}
        </div>
    );
};

export default Destination;