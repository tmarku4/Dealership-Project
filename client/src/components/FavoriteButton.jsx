import React, { useState, useEffect } from 'react';

function FavoriteButton({ carID, updateFavorites }){
    const [isFavorite, setIsFavorite] = useState(false)
    const [currentFavorites, setCurrentFavorites] = useState([])

    // fetch to see if car is in the favorites list
    useEffect(() => {
        fetch(`/favoritecars`)
        .then(resp => {
            if (resp.ok) {
                resp.json().then((returnedData) => {
                    setCurrentFavorites(...currentFavorites, returnedData)
                })
            }
            })
            .catch((error) => {
                console.error('Error fetching favorite data.', error)
            })
        }, [])

    useEffect(() => {
        const isInFavorites = currentFavorites.find(item => item.car_id === carID);
        if (isInFavorites){
            setIsFavorite(true)
        } else {
            setIsFavorite(false)
        }
    }, [currentFavorites, carID])


    function addToFavorites(event) {
        const carIDClicked = event.target.parentNode.id

        fetch('/favoritecars', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                user_id: 1,
                car_id: carIDClicked
            })
        })
        .then(resp => {
            if (resp.ok) {
                setIsFavorite(true)
                if (updateFavorites) {
                    updateFavorites()
                }
            }
        })
        .catch(error => {
            console.log(`${error}`)
        });
    }

    function removeFromFavorites(event){
        const carIDClicked = event.target.parentNode.id
        const favoriteInstance = currentFavorites.find(item => item.car_id === parseInt(carIDClicked))

        fetch(`/favoritecars/${favoriteInstance.id}`, {
            method: "DELETE",
            })
            .then(resp => {
                if (resp.ok) {
                setIsFavorite(false);
                if (updateFavorites) {
                    updateFavorites()
                }
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