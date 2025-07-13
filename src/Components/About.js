import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import "../index.css"; // Adjust the path as necessary

const About = (props) =>{
   return (
        <div>
            <h1>About Cloud Kitchin</h1>
            <h2>What is Cloud Kitchin?</h2>
            <p>
                Cloud Kitchin is a modern food delivery platform that brings delicious meals from a variety of virtual kitchens straight to your doorstep. We focus on quality, speed, and convenience for our customers.
            </p>
            <h2>Our Mission</h2>
            <p>
                To revolutionize the food delivery experience by leveraging technology and cloud kitchens, making great food accessible to everyone, everywhere.
            </p>
            <h1>Meet the Developer Team</h1>
            <div className="dev-team-cards">
            
            <UserClass name="Sai kumar" 
                role="Frontend Developer" 
                email="sai@gmail.com" />
            
            
            </div>
        </div>
    );
}

export default About;