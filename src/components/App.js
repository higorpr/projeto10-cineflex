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
    const [movie, setMovie] = useState("");
    const [poster, setPoster] = useState("");
    const [session, setSession] = useState({weekday:'', date:'', showtime:''});
    const [seats, setSeats] = useState([]);
    const [buyer, setBuyer] = useState({buyerName:'', buyerCPF:''});

    console.log("Phase: ", phase);
    console.log("Movie: ", movie);
    console.log("Poster: ", poster);
    console.log("Session: ", session);
    console.log("Seats: ", seats);
    console.log("Buyer: ", buyer);

    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <Header setPhase={setPhase}/>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <BodyMovies
                                setPhase={setPhase}
                                setMovie={setMovie}
                                setPoster={setPoster}
                            />
                        }
                    />
                    <Route
                        path="/sessions/:movieId"
                        element={
                            <BodyTime
                                setPhase={setPhase}
                                session={session}
                                setSession={setSession}
                            />
                        }
                    />
                    <Route
                        path="/seats/:idSession"
                        element={
                            <BodySeats
                                setPhase={setPhase}
                                setSeats={setSeats}
                                setBuyer={setBuyer}
                            />
                        }
                    />
                    <Route
                        path="/success"
                        element={
                            <BodySuccess
                                setPhase={setPhase}
                                movie={movie}
                                session={session}
                                seats={seats}
                                buyer={buyer}
                            />
                        }
                    />
                </Routes>
                <Footer phase={phase} movie={movie} poster={poster} session={session} />
            </BrowserRouter>
        </>
    );
}
