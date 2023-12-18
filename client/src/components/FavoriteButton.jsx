import React, { useState, useEffect } from 'react';

function FavoriteButton({ carData, carID }){
    const [isFavorite, setIsFavorite] = useState(false)

    const URL = "http://localhost:3000"

    // fetch to see if car is in the favorites list
    useEffect(() => {
        fetch(URL + `/favorites/${carID}`)
        .then(resp => {
            if (resp.ok) {
                setIsFavorite(true);
            // NOTE: will change status code with backend link
            } else if (resp.status === 404 ) {
                setIsFavorite(false);
            }
            })
            .catch((error) => {
                console.error('Error fetching favorite data.', error)
            })
        }, [carID])
    

    function addToFavorites(event) {
        const carIDClicked = event.target.parentNode.id
        const favoriteCar = carData.find((c) => c.id == carIDClicked)

        fetch(URL + '/favorites', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(favoriteCar)
        })
        .then(resp => {
            if (resp.ok) {
                setIsFavorite(true)
                resp.json().then((returnedData) => {
                    console.log(returnedData)
                })
            }
        })
        .catch(error => {
            console.log(`${error}`)
        });
    }

    function removeFromFavorites(event){
        const carIDClicked = event.target.parentNode.id
        const favoriteCar = carData.find((c) => c.id == carIDClicked)

        fetch(URL + `/favorites/${carIDClicked}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(favoriteCar)
            })
            .then(resp => {
                if (resp.ok) {
                setIsFavorite(false);
                resp.json().then((returnedData) => {
                    console.log(returnedData)
                })
                }
            })
            .catch(error => {
                console.log(`${error}`);
            });
    }

    function onFavoriteButtonClick(event){
        if (!isFavorite) {
            addToFavorites(event)
        } else {
            removeFromFavorites(event)
        }
    }

    return (
        <button 
        className='favorite-button'
        onClick={onFavoriteButtonClick}
        >
            {isFavorite ? 'Remove from Favorites': 'Add to Favorites'}
        </button>
    )
}

export default FavoriteButton