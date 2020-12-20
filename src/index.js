import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './redux/reducers';
//import rootReducer from './redux/reducers/filter';
import thunk from 'redux-thunk';
import Navigation from './components/Router/Router';
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
