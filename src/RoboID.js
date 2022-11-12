import React, { useState,useEffect } from 'react'
import { Route,Router,Link ,useParams } from 'react-router-dom'
import './RoboID.css';



function Profile({ item }) {
  const params = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then(res => res.json())
      .then(json => {
        setData(json)
        setIsLoading(false);
      });
    // console.log(data.)
  },[]);
  if (isLoading) return <h1>is loading....</h1>;
  if(params.id != data.id) return <h1>ERROR 404</h1>
  return (
    <div className='RoboID'>
      {data && 
      <>
      
      <h2>User Profile: {data.name }</h2>
      <div className="card-robo">
        <img src={`https://robohash.org/${data.id}?set=set1&size=200x200`} alt={data.name} className='img-style'/>
        <h1>{data.name }</h1>
        <p className="title">He's From: {data.address.city }</p>
        <p>Email Address: { data.email}</p>
      <div className='div-a'>
          <p><i className="fa fa-dribbble">Phone Number: { data.phone}</i></p> 
          <img src={require('./telegram-app-48.png')}></img>
          <img src={require('./whatsapp-48.png')}></img>
          <a href='https://www.instagram.com/p/CYCDrICtdXB/?igshid=YmMyMTA2M2Y='><img src={require('./instagram-48.png')}></img></a>
      </div>
        <p><button>Contact</button></p>
        </div>
        </>
      }
    </div>
  )
}

export default Profile
