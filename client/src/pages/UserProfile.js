import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CarCard from "../components/CarCard";

function UserProfile(){
    const [profile, setProfile] = useState({});
    const { profileID } = useParams();

  // Fetch profile data for user //
    useEffect(() => {
        fetch(`http://localhost:3000/profiles/${profileID}`)
        .then((response) => response.json())
        .then((returnedData) => {
            setProfile(returnedData);
        })
        .catch((error) => {
            console.error('Error fetching profile:', error);
        });
    }, [profileID]);

    const {profile_img, first_name, last_name, username, cars} = profile

    console.log(profile.cars)
    console.log(profile)
    console.log(cars)

    return (
        <div>
            <img src={profile_img} alt={`${first_name} ${last_name}`} />
            <p>{username}</p>
            <p>{first_name}</p>
            <p>{last_name}</p>
            {/* <CarCard carData={profile.cars} /> */}
        </div>
    )
}

export default UserProfile