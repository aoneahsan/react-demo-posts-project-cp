import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import axios from 'axios';


// axios default data adding methods
//    mean you can add default data to all requests
// baseURL: it is use to add a starting part of all http requests, like domain etc
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

// default headers: some data you want to add in each request globally
// default headers.common: some data you want to add in each request globally
axios.defaults.headers.common['Authorization'] = 'Auth Token ETC';
// default headers.post: some data you want to add in each Post request globally(similary for get, delete, put etc)
axios.defaults.headers.post['Content-Type'] = 'application/json';

// interceptors:
//      interceptors are functions which add some logic(react) with all global http requests
// request are http url hits
axios.interceptors.request.use(
    request => {
        console.log("Global interceptors from index.js: Requests:", request);
        return request;
    },
    error => {
        console.log("Global interceptors from index.js: Requests:", error);
        return Promise.reject(error);
    }
)

// Response are data we get from url hits(requests)
axios.interceptors.response.use(
    response => {
        console.log("Global interceptors from index.js: Response:", response);
        return response;
    },
    error => {
        console.log("Global interceptors from index.js: Response:", error);
        return Promise.reject(error);
    }
)

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
