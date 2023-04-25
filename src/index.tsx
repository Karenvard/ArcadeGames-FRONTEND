import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import ReduxStore from "./redux/ReduxStore";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <Provider store={ReduxStore}>
            <App />
        </Provider>
    </BrowserRouter>
);

