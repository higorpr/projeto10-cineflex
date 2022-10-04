import Footer from "./Footer";
import Main from "./Main";
import GlobalStyle from "../theme/globalStyles";
import { useState } from "react";
// import styled from "styled-components";

export default function App() {
    const [phase, setPhase] = useState("movies");

    return (
        <>
            <GlobalStyle />
            <Main phase={phase} setPhase={setPhase} />
            <Footer phase={phase}/>
        </>
    );
}
