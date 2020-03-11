import React from "react";
import FollowersCard from "./FollowersCard"
import "./followerscard.css";

const FollowersList = (props) => {

    //console.log(props);

    return(
        props.followers.map(item => 
            <div key={item.id} className="card_div">
            <h1>Marvins Followers </h1>
            <FollowersCard followers={item}/>
            </div>)
    )
}

export default FollowersList;