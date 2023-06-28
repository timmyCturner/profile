import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <App />

);
//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
// reportWebVitals();
