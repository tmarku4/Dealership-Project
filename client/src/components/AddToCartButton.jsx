import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function AddToCartButton ({ carID, updateCart }) {
    const [inCart, setInCart] = useState(false)
    const [currentCart, setCurrentCart] = useState([])
    const [ currentUser ] = useOutletContext()
    console.log(currentUser)

    // fetch to see if car is in the cart list 
    // change route to select the id associated with the users cars in his shopping cart?
    // change the route to be the instance ID

    useEffect(() => {
        fetch(`/shoppingcarts`)
        .then(resp => {
            if (resp.ok){
                resp.json().then((returnedData) => {
                    setCurrentCart(...currentCart,returnedData)
                })
            }
        })
        .catch((error) => {
            console.error('Error fetching shopping cart data.', error)
        })
    }, [])

    // console.log(currentCart)

    useEffect(() => {
        // Check if the carID exists in the currentCart
        const isInCart = currentCart.find(item => item.car_id === carID);
        if (isInCart) {
            setInCart(true);
        } else {
            setInCart(false);
        }

    }, [currentCart, carID]);
    

    function addToCart(event) {
        const carIDClicked = event.target.parentNode.id

        fetch(`/shoppingcarts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                // set to currentUser.id when working
                user_id: 1,
                car_id: carIDClicked
            })
        })
        .then(resp => {
            if (resp.ok) {
                setInCart(true);
                if (updateCart) {
                    updateCart()
                }
            }
        })
        .catch(error => {
            console.log(`${error}`)
        });
    }


    function removeFromCart(event) {
        const carIDClicked = event.target.parentNode.id;
        const cartInstance = currentCart.find(item => item.car_id === parseInt(carIDClicked));

        fetch(`/shoppingcarts/${cartInstance.id}`, {
            method: "DELETE",
            })
            .then(resp => {
                if (resp.ok) {
                setInCart(false);
                if (updateCart) {
                    updateCart()
                }
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