import React, { useEffect } from 'react'
import './App.css';
// import users from './Db';
import {useState} from 'react';
import { MapContainer, TileLayer, useMap,Marker,Popup } from 'react-leaflet';
import L from 'leaflet';
import { Link, useNavigate } from 'react-router-dom';
import RoboID from './RoboID';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function Weblayout({callBack}) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        setData(json)
        setIsLoading(false);
      });
  },[]);
  // console.log(data)
  const navigate = useNavigate();
  const markerIcon =new L.icon({
    iconUrl:require("./location-pin.png"),
    iconSize:[35,45]
  });
  const[userLog,setUserLog]=useState();
  const [openModal,setOpenModal]=useState(false);
  const [findId, setFindId] = useState();
  const [valueInput, setValueInput] = useState();
  //global const
  const handleFilter = (e) => {
   setValueInput( e.target.value)
    const newFilter = data.filter((item)=>{
      return item.name.toLowerCase().includes(valueInput.toLowerCase()) ;
    });
      setData(newFilter) 
    // setFilterItme()
  };
  //filter item users
  //------------------------------------------
  //click outside close modal
  function chekmodal(item){
    
    const user = data.find((obj) => { return obj.id === item.id });
    setFindId(user);
      console.log(user.address.geo.lat);
      const userDiv = 
        <div className='modal-body'>
          <div className='modal-content'>
            <div id="map">
            <MapContainer center={user.address.geo} zoom={5} scrollWheelZoom={true}>
              <TileLayer
                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <Marker position={user.address.geo} icon={markerIcon}>
                  <Popup>
                      {user.name} <br /> Easily {"Address "+"City: "+user.address.city+", street: "+user.address.street}
                   </Popup>
                </Marker>
            </MapContainer>
            </div>
            <button className='button-modal'
              onClick={() => { navigate(`profile/${user.id}`) }}>
              See More
            </button>
            <div className='modal-map'></div>
          </div>
        </div>;
      setUserLog(userDiv);
      setOpenModal(true)
      
  ;}
   
  //found item modal and creat
  
  
  const renderedOutput = data.map(item =>
      <div className='card' key={item.id}>
        <div className='card-header'><img className='profile-img' src={`https://robohash.org/${item.id}?set=set1&size=200x200`}></img></div>  
        <div className='card-body'>
          <p className='full-name'>{item.name}</p>
          <button onClick={()=>chekmodal(item)} className='username'>{item.username}</button>
          <p className='city'>{"City :"+item.address.city+" Street :"+item.address.street}</p>
          <p className='email'>{item.email}</p>
        </div> 
    </div>
    
  );
//  creat from json file some id card div
if (isLoading)  return <h1>'is loading...'</h1> ;
  return (
    
    <div className='weblayqout'>
    
      <Link to={{
        pathname: 'RoboId',
         search:'hi'
      }}>hiiii</Link>
      <Routes>
        <Route path='RoboId' element={<RoboID findId={findId} />}></Route>
      </Routes>
    
        {
        openModal
          ?
          <>
            <div class='modal' >
            {userLog}
            </div>
            <div class='backdrop' onClick={() => setOpenModal(false)} ></div>
          </>
          :
          null
      }
      <div className='contentApp'>
        <input type={"text"} value={valueInput} onChange={handleFilter}/>
        
        <div className='content'>
        {renderedOutput}
        </div>
      </div>
      
     {/* <RoboID namee={findId}/>  */}
    </div>
    
   
  )
}

export default Weblayout 
