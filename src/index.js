import React from 'react';
import ReactDOM from 'react-dom';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';


const DATA = [
  { id: "todo-0", name: "Manger", completed: true, from:"list-0" },
  { id: "todo-1", name: "Dormir", completed: false, from:"list-1" },
  { id: "todo-2", name: "Lire un livre", completed: false, from:"list-1" },
  { id: "todo-3", name: "Travailler", completed: true, from:"list-2" },
  { id: "todo-4", name: "Réviser", completed: true, from:"list-1" }
];

const LIST = [
  { id: "list-0", title: "Le titre de ma liste", bg:'primary', textcolor:'white', srcimg:null, description:'Une courte description de ma liste de tâches LOL' },
  { id: "list-1", title: "Le titre de ma liste2", bg:'info', textcolor:'white', srcimg:null, description:'Une courte description de ma liste de tâches LOL' },
  { id: "list-2", title: "Le titre de ma liste3", bg:'warning', textcolor:'white', srcimg:null, description:'Une courte description de ma liste de tâches LOL' },
  { id: "list-3", title: "Le titre de ma liste4", bg:'light', textcolor:'dark', srcimg:null, description:'Une courte description de ma liste de tâches LOL' },
  { id: "list-4", title: "Le titre de ma liste5", bg:'success', textcolor:'white', srcimg:null, description:'Une courte description de ma liste de tâches LOL' },
  { id: "list-5", title: "Le titre de ma liste6", bg:'dark', textcolor:'white', srcimg:null, description:'Une courte description de ma liste de tâches LOL' }

];

ReactDOM.render(<App tasks={DATA} lists={LIST}/>, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
