import React, { useState, useEffect } from "react";
import CarCard from "../components/CarCard";

function ShoppingCart () {
    const [currentCart, setCurrentCart] = useState([])

    function updateCart(){
        fetch('/shoppingcarts')
            .then(res => {
                if (res.ok) {
                    res.json().then(returnedData => {
                        setCurrentCart(returnedData.map((car) => car.car_obj))
                        console.log(returnedData)
                    })
                }
            })
    }

    useEffect(() => {
        updateCart()
    }, [])

    return (
        <CarCard carData={currentCart} updateCart={updateCart}/>
    )
}

export default ShoppingCart