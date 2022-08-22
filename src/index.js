import React from 'react';
import ReactDOM from 'react-dom/client';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import App from './App';
import Footer from './components/Footer/Footer';

import authReducer from './store/reducers/authReducer';
import orderReducer from './store/reducers/orderReducer';
import cartReducer from './store/reducers/cartReducer';
import shopReducer from './store/reducers/shopReducer';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const reducer = combineReducers({
  auth: authReducer,
  orders: orderReducer,
  cart: cartReducer,
  shop: shopReducer,
});

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
const footer = ReactDOM.createRoot(document.getElementById('footer'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

footer.render(<Footer></Footer>);
