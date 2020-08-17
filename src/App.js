import React from 'react';
import './App.scss';
import { InputList } from './Component/InputList';
import { Expenses } from './Component/Expenses';
import { DetailExpenses } from './Component/DetailExpenses';
import { GlobalProvider } from './Context/GlobalContext';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <h1 id="title"> Grocery Shopping List </h1>
        <InputList />
        <Expenses />
        <DetailExpenses />
      </div>
    </GlobalProvider>
  );
}

export default App;
