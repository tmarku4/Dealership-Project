import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

function FavoriteButton({ carID, updateFavorites }){
    const [isFavorite, setIsFavorite] = useState(false)
    const [currentFavorites, setCurrentFavorites] = useState([])

    const { currentUser } = useOutletContext()

    // fetch to see if car is in the favorites list
    useEffect(() => {
        fetch(`/favoritecars`)
        .then(resp => {
            if (resp.ok) {
                resp.json().then((returnedData) => {
                    const userFavorites = returnedData.filter((car) => {
                        if (car.user_id === currentUser.id) {
                            return car
                        }
                    })
                    setCurrentFavorites(...currentFavorites, userFavorites)
                })
            }
            })
            .catch((error) => {
                console.error('Error fetching favorite data.', error)
            })
        }, [currentUser])

    // console.log(currentFavorites)

    useEffect(() => {
        const isInFavorites = currentFavorites.find((item) => {
            if (item.car_id === carID) {
                return item
            }
        });

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
                user_id: currentUser.id,
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