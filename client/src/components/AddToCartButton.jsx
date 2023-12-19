import React, { useState, useEffect } from "react";

function AddToCartButton ({ carData, carID }) {
    const [inCart, setInCart] = useState(false)

    const URL = "http://localhost:3000"

    // fetch to see if car is in the cart list 
    useEffect(() => {
        fetch(URL + `/shoppingCart/${carID}`)
        .then(resp => {
            if (resp.ok) {
                setInCart(true);
            } else if (resp.status === 404 ) {
                setInCart(false);
            }
            })
            .catch((error) => {
                console.error('Error fetching favorite data.', error)
            })
        }, [inCart])
    

    function addToCart(event) {
        const carIDClicked = event.target.parentNode.id
        const carToAdd = carData.find((c) => c.id == carIDClicked)

        fetch(URL + '/shoppingCart', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(carToAdd)
        })
        .then(resp => {
            if (resp.ok) {
                setInCart(true);
            }
        })
        .catch(error => {
            console.log(`${error}`)
        });
    }

    function removeFromCart(event){
        const carIDClicked = event.target.parentNode.id
        const carToAdd = carData.find((c) => c.id == carIDClicked)

        fetch(URL + `/shoppingCart/${carIDClicked}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(carToAdd)
            })
            .then(resp => {
                if (resp.ok) {
                setInCart(false);
                resp.json().then((returnedData) => {
                    console.log(returnedData)
                })
                }
            })
            .catch(error => {
                console.log(`${error}`);
            });
    }

    function onAddCartButtonClick(event){
        if (!inCart) {
            addToCart(event)
        } else {
            removeFromCart(event)
        }
    }

    return (
        <button 
        className='shopping-button'
        onClick={onAddCartButtonClick}
        >
            {inCart ? 'Remove from Cart': 'Add to Cart'}
        </button>
    )
}

export default AddToCartButton