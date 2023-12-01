import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import store from './store.jsx';
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let Persistor = persistStore(store);

const myroot = ReactDOM.createRoot(document.getElementById('root'))
myroot.render(
  <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={Persistor}>
        <App />
    </PersistGate>
  </Provider>
</React.StrictMode>,
)
