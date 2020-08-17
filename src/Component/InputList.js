import React, { useState, useContext } from 'react';
import '../App.scss';
import { GlobalContext } from '../Context/GlobalContext';

export const InputList = () => {
    const [item, setItem] = useState('');
    const [qty, setQty] = useState('');
    const [price, setPrice] = useState('');

    const { addList } = useContext(GlobalContext);

    const resetInputType = () => {
        setItem('');
        setQty('');
        setPrice('');
    }

    const addItem = (e) => {
        e.preventDefault();

        const newList = {
            id: Math.floor(Math.random() * 100),
            item: item,
            qty: qty,
            price: Number(price)
        }

        addList(newList);
        resetInputType();
        console.log(newList);
    }

    return (
        <form onSubmit={addItem}>
            <div className="form-control">
                <input type="text" id="input-item" className="form-style" 
                onChange={(e) => setItem(e.target.value)} value={item} placeholder="What would you like to buy?"/>
            </div>

            <div className="form-control">
                <input type="number" min="0" id="input-qty" className="form-style" 
                onChange={(e) => setQty(e.target.value)} value={qty} placeholder="Quantity" />
            </div>

            <div className="form-control">
                <input type="text" id="input-exp-price" className="form-style" 
                onChange={(e) => setPrice(e.target.value)} value={price} placeholder="Expected Price" />
            </div>

            <div className="form-control">
                <button id='btn-add' className="form-style">Add</button>
            </div>
        </form>
    )
}
