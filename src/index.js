import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './redux/reducers/index';
import rootReducer from './redux/reducers/filter';
import thunk from 'redux-thunk';
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
