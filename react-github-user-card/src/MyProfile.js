import React from "react";

const MyProfile = ({myprofile}) => {
    console.log(myprofile)

    return (
        <div>
        <h1>Marvins Page</h1>
        <img alt="marvin" src={myprofile.avatar_url}/>
        <p>location: {myprofile.location}</p>
        <p>My followers: {myprofile.followers}</p>
        </div>
    )
}

export default MyProfile;