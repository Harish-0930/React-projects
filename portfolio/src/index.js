import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import App from './App';

import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js';
import Home from './components/Home/Home.js';
import Project from './components/Projects/Project.js';
import './index.css';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Home />}/>
      <Route path='about' element={<About />} />
      <Route path='projects' element={<Project/>} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

