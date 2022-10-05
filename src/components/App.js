import Header from "./Header";
import BodyMovies from "./BodyMovies";
import BodySeats from "./BodySeats";
import BodyTime from "./BodyTime";
import BodySuccess from "./BodySuccess";
import Footer from "./Footer";
import GlobalStyle from "../theme/globalStyles";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";



// import styled from "styled-components";


export default function App() {
    const [phase, setPhase] = useState("movies");

    return (
        <>
            <BrowserRouter>
            
            <GlobalStyle />
            <Header/>
            <Routes>
            <Route path='/' element={<BodyMovies/>}/>
            <Route path='/time' element={<BodyTime/>}/>
            <Route path='/seats' element={<BodySeats/>}/>
            <Route path='/success' element={<BodySuccess/>}/>
            
            </Routes>
            <Footer phase={phase}/>
            </BrowserRouter>
        </>
    );
}
