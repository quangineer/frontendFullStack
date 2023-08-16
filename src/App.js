import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateBook from "./components/createbook";
import BookList from "./components/booklist";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookList/>} />
        <Route path="/createbook" element={<CreateBook/>}/>
      </Routes>
      </BrowserRouter>
  );
}