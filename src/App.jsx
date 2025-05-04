import React, { useState } from "react"
import { Route, 
          createBrowserRouter, 
          createRoutesFromElements,
          RouterProvider,
          Router
      } from "react-router-dom";
import MainPage from './layouts/MainPage';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactMePage from "./pages/ContactMePage";
import Projects from "./pages/Projects";




function App() {
  
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<MainPage />}>
    <Route index element={<HomePage />}/>
    <Route path="/about" element={<AboutPage />}/>
    <Route path="/projects" element={<Projects />}/>
    <Route path="/contact" element={<ContactMePage />}/>
  </Route>
));
  return <RouterProvider router={router} />
}

export default App
