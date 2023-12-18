import React, { useState, useEffect } from "react";
import CarCard from "../components/CarCard";

function ShoppingCart () {
    const [currentCart, setCurrentCart] = useState([])

    const URL = "http://localhost:3000"

    useEffect(() => {
        fetch(URL + '/shoppingCart')
            .then(res => {
                if (res.ok) {
                    res.json().then(returnedData => {
                        setCurrentCart(returnedData)
                    })
                }
            })
    }, [])

    return (
        <CarCard carData={currentCart} />
    )
}

export default ShoppingCart