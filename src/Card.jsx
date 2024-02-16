import React, { useState } from 'react'
import image from '../src/Assets/images/event1.jpg'
import {useNavigate} from 'react-router-dom'
const Card = ({ eventName, imageUrl, onClick }) => {
  const [eventDetails,setEventDetails] = useState({
    name: eventName,
    image: imageUrl,
  })
  console.log(eventDetails)
  const navigate = useNavigate();
    return (
      <div className="card-container">
        <img className="card-image" src={imageUrl} alt='' />
        <div className="card-overlay">
          <h3 className="event-name">{eventName}</h3>
          <button className="button" onClick={() => {navigate(`/Events/event`, {state : {eventDetails}})}}>
            Learn More
          </button>
        </div>
      </div>
    );
  };

export default Card