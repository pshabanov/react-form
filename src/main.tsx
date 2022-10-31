import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {DataProvider} from "./data/DataContext";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <DataProvider>
                <App/>
            </DataProvider>
        </BrowserRouter>
    </React.StrictMode>
)
