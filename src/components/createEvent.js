import React from 'react'
import Navbar from './Navbar';
import Strokebtn from './Strokebtn';
import "./css/createEvent.css";
import profile from "./Images/profile.jpeg";
import '../fonts/RedRose-Light.ttf';

export const CreateEvent = () => {
  const buttonStyle = {
    position: 'absolute',
    marginTop: '-20rem',
    marginLeft: '35rem',
    fontSize: '18px'

  }
  const gradientBackgroundStyle = {
    background: 'linear-gradient(to bottom, black, #012137 60%, black)'
  };
  const h1 = {
    fontSize: '3rem',
    marginLeft: '11rem',
    fontFamily: 'Red Rose, sans-serif',
    color: 'rgb(151, 151, 151',
    marginTop: '3rem'
  }
  const h2 = {
    fontSize: '2.2rem',
    color: '#fff',
    marginLeft: '11rem',
    marginTop: '5rem',
    fontWeight: 'bold',
  }
  const button = {
    marginLeft: '11rem',
    marginTop: '2rem',
    fontWeight: 'bold',
    fontSize: '20px'
  }
  const button2 = {
    marginLeft: '7rem',
    marginTop: '-0.3rem',
    position: 'absolute',
    fontWeight: 'bold',
    fontSize: '20px',
    backgroundColor: 'rgba(128, 128, 128, 0.5)',
    color: 'rgba(128, 128, 128, 0.8)'
  }
  const h3 = {
    color: '#fff',
    fontSize: '20px',
    fontWeight: 'medium',
    marginTop: '3.2rem',
    marginLeft: '11rem',

  }
  const searchBar = {
    width: '32rem',
    height: '3rem',
    borderRadius: '30px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'rgba(128, 128, 128, 0.8)',
    fontSize: '17px',
    textAlign: 'left',
    padding: '1rem',
    marginLeft: '10.5rem',
    marginTop: '1rem',
    fontWeight: 'bold',
    border: '0.5px solid white',
  }
  const h4 = {
    fontSize: '30px',
    color: '#fff',
    fontWeight: 'medium',
    marginLeft: '10.5rem',
    marginTop: '3rem',
  }
  const dateTime = {
    height: '10rem',
    width: '25rem',
    color: 'rgba(128, 128, 128, 0.8)',
    border: '0.5px solid white',
    fontWeight: 'bold',
  paddingTop: '1.5rem',
  marginLeft: '10.5rem',
  marginTop:'2rem'



}
const button3 = {
  border: '0.5px solid white',
  width: '8rem',
  height: '2.3rem',
  borderRadius: '10px',
  fontSize:'20px'

}
const button4 = {
  border: '0.5px solid white',
  width: '8rem',
  height: '2.3rem',
  borderRadius: '10px',
  marginLeft:'1rem',
  fontSize:'20px'
}
const column ={
  display:'flex',
  padding:'10px'
}
const p={
  fontSize:'20px',
  marginTop:'0.5rem'
}
const p2={
  marginLeft:'1rem',

}
const p3={
  fontWeight:'lighter',
  marginTop:'0.5rem',
  marginLeft:'1rem'
}
const registration ={
  color: 'rgba(128, 128, 128, 0.8)',
  fontSize:'18px',
  fontWeight:'bold',
  display:'flex',
  marginLeft:'11rem',
  marginTop:'5rem',

}
const circle = {
  width:'1.5rem',
  height:'1.5rem',
  border:'1px solid white',
  borderRadius:'10px'
}
const h5={
  marginLeft:'0.5rem'
}
const button6={

}
return (
  <div style={gradientBackgroundStyle}>
    <Navbar />
    <div className='page-name'>
      <Strokebtn title="" fill="" />
    </div>
    <div className="absolute top-30 right-0 mr-20 mt-20">
      <div className="rounded-full h-20 w-20 overflow-hidden border-white border-2">
        <img
          className="object-cover h-full w-full"
          src={profile}
          alt="Profile"
        />
      </div>
    </div>
    <img
      className="mt-60 ml-44 brightness-50"
      src={profile}
      alt="profile"
    />
    <button
      style={buttonStyle}
      className="h-10 w-52 rounded-full bg-white ml-96 -mt-80 text-gray-500 font-Red-Rose"
    >
      Add a banner
    </button>
    <h1 style={h1}>Event name</h1>
    <div className="line"></div>
    <h2 style={h2}>Event Type?</h2>

    <button
      style={button}
      className="h-10 w-52 rounded-full bg-white ml-96 -mt-80 text-black font-Red-Rose"
    >
      In person
      <button
        style={button2}
        className="h-10 w-52 rounded-full bg-white ml-96 -mt-80 text-black font-Red-Rose"
      > Virtual</button>

    </button>
    <h3 style={h3}>Venue Location *</h3>
    <div className="search-bar">
      <input
        type="text"
        value="Enter the location"
        placeholder="Enter the location"
        className="search-input"
        style={searchBar}
      />
    </div>

    <h4 style={h4}>When will it going to happen?</h4>

    <div className="dateTime " style={dateTime}>

      <div className="date"><p style={p2}>Thu, February 23</p></div>
      <div className='column' style = {column}>
      <button style={button3}>12:00 pm</button>
      <p style={p}>To</p>
      <button style={button4}>12:00 pm</button>
      </div>
      <div className="timezone"><p style = {p3}>GMT + 5:30 Kolkata</p> </div>
    </div>
    <div className="register" style={registration}>
      <div className="circle" style = {circle}></div>
      <h5 style ={h5}>Registration Approval?</h5>
    </div>
    <button style = {button6}>Proceed</button>
  </div>
);
    };

export default CreateEvent;