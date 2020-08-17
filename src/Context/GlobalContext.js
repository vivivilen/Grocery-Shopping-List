import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    lists: []
}

export const GlobalContext = createContext();

export const GlobalProvider = ( {children} ) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function addList(list) {
        dispatch({
            type: 'ADD_LIST',
            payload: list
        })
    }

    function deleteList(id) {
        dispatch({
            type: 'DELETE_LIST',
            payload: id
        })
    }

    return (<GlobalContext.Provider value={{ lists: state.lists, addList, deleteList }}>
        {children}
    </GlobalContext.Provider>)
}