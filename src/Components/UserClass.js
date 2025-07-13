import React from "react";
import '../index.css'; // Adjust the path as necessary
import { useState } from 'react';

class UserClass extends React.Component {
  constructor() {
    super(); // Calls React.Component's constructor
    // Now you can use this.props here
    this.state = {
      count: 0
    };
    this.state = {
      profile :{
        name : "dummy",
        location:"dummy location",
        avatar_url:"dummy_avatar_url", // Placeholder URL
        bio: "Dummy bio"
      }

    }
  }
  
  async componentDidMount() {
    // This method is called after the component is mounted
    const data = await fetch("https://api.github.com/users/Saikumar-arch");
    const json = await data.json();
    console.log(json);
    this.setState({
      profile: json // Update the profile state with fetched data
    });
  }
  
 
  render() {
    const {name, location, avatar_url,bio} = this.state.profile
    return (
      <div className="about-dev-team">
        <img src={avatar_url} alt={name} />
        <h2 className="glass-section">Name : {name}</h2>
        <h2 className="glass-section">Bio : {bio}</h2>


        <p><b>About:</b>
            Santhosh is a passionate developer with a keen interest in testing scalable web applications. He loves coding, exploring new technologies, and creating seamless user experiences.
        </p>
    </div>
    );
  }
}
export default UserClass;