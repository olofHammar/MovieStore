import React, { useEffect } from 'react';
import '../styles/cart.css';
import Quantity from './Quantity';
import DeleteAlert from '../components/DeleteAlert';
import { useSelector } from 'react-redux';
import { getUserId } from '../features/userSlice';
import { db } from '../firebase';
import * as FaIcons from 'react-icons/fa';

function Cart( { cartItems }) {

    const userId = useSelector(getUserId);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const getTotalPrice = () => {
        let total = 0; 
        cartItems.forEach((item) => {
            total += (item.data.price * item.data.quantity)
        })
        return total;
    }

    const getCount = () => {
        let count = 0; 
        cartItems.forEach((item) => {
            count += item.data.quantity;
        })
        return count;
    }

    return (
        <div className="cartContainer">
            <div className="cartTotal">
                <h1> Cart Total</h1>
                <div>
                    <h4>Total items: {getCount()}</h4>
                    <h4>Total price: ${getTotalPrice()}</h4>
                </div>
                <button className="btnCartCheckOut">Check out </button> 
            </div>

            <div className="cartItems">
                <h1 className="cartTitle"> My Cart </h1>
                { cartItems.map(item => (
                    <div className="cartItem">
                        <img src={item.data.poster} alt="" className="cartItemPoster"/>
                    
                        <div className="cartItemInfo">
                            <h2>{ item.data.title}</h2>
                            <h4>{`Price: $${item.data.price}`}</h4>
                        </div>
                        <div className="cartItemRight">
                            <DeleteAlert userId={userId} id={item.data.id} />
                            <Quantity quantity={item.data.quantity} id={item.data.id} />
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Cart
