import './App.css';
import React from 'react';
import ListView from './Components/ListView'
import Header from './Components/Header'
import './App.css';
import Loader from './Utils/Loader';
import EditBudgetModal from './Components/EditBudgetModal'
import { Context } from './state-management/context';
import { Reducer } from './state-management/reducer';
import {generateInitialState} from './Utils/Constants'

function App() {

  const [state, dispatch] = React.useReducer(Reducer, generateInitialState())
  return (
    <div className="App">
     <Header></Header>
      <Context.Provider value={{ state, dispatch }}>
        <ListView />
        {state.loading && <Loader />}
        <EditBudgetModal />
      </Context.Provider>
    </div>
  );
}

export default App;
