import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const DetailExpenses = () => {
    const { lists, deleteList } = useContext(GlobalContext);

    return (
        <div className="detail-expenses-container">
            <div className="header">
                <div className="header-item">Items</div>
                <div className="header-item">Quantity</div>
                <div className="header-item">Expected Price</div>
                <div className="header-item">Actions</div>
            </div>

            {lists.map(list => (
                <div className="list-items" key={list.id}>
                    <div className="item">{list.item}</div>
                    <div className="item">{list.qty}</div>
                    <div className="item">{list.price}</div>
                    <div className="item" id="delete-icon" onClick={() => deleteList(list.id)}><FontAwesomeIcon icon={faTrash} /></div>
                </div>
            ))}

        </div>
    )
}
