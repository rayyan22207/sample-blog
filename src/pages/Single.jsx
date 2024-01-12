import React from "react";
import Menu from "../components/menu";

const Single =() =>{
    return (
        <div className="single">
            <div className="content">
                <img src="https://images.pexels.com/photos/19648029/pexels-photo-19648029/free-photo-of-clouds-over-rocks-on-peak-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="content" />
                <div className="user">
                    <img src="https://images.pexels.com/photos/19708337/pexels-photo-19708337/free-photo-of-samoyed-dog-in-the-snow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="user" />
                    <div className="info">
                        <span>John</span>
                        <p>Posted 2 days ago</p>
                    </div>
                </div>
                
            </div>
            <Menu></Menu>
        </div>
    )
}

export default Single