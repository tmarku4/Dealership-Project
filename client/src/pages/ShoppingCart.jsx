import React, { useState, useEffect } from "react";
import CarCard from "../components/CarCard";
import { useOutletContext } from "react-router-dom";

function ShoppingCart () {
    const [currentCart, setCurrentCart] = useState([])

    const { currentUser } = useOutletContext()

    function updateCart(){
        fetch('/shoppingcarts')
            .then(res => {
                if (res.ok) {
                    res.json().then(returnedData => {
                        const userCart = returnedData.filter((car) => {
                            if (car.user_id === currentUser.id) {
                                return car
                            }
                        })
                        setCurrentCart(userCart.map((car) => car.car_obj))
                    })
                }
            })
    }

    useEffect(() => {
        updateCart()
    }, [currentUser])

    return (
        <CarCard carData={currentCart} updateCart={updateCart}/>
    )
}

export default ShoppingCart