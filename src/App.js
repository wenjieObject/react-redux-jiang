import React from 'react';
import './App.css';
import PageLeft from './pages/pageleft'
import PageRight from './pages/pageright'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <div>
      <Provider store={store}>
        <PageLeft />
        <PageRight />
      </Provider>
    </div>
  );
}

export default App;
