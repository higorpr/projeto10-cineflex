import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function BodyMovies({ setPhase, setMovie, setPoster }) {
    const [movies, setMovies] = useState([]);
    // console.log(movies);

    useEffect(() => {
        const url = "https://mock-api.driven.com.br/api/v5/cineflex/movies";
        const promise = axios.get(url);

        promise.then((res) => {
            setMovies(res.data);
        });

        promise.catch((err) => {
            console.log(err);
        });
    }, []);

    function updateMovie(title, poster) {
        setMovie(title);
        setPoster(poster);
        setPhase('sessions')
    }

    if (movies === null) {
        return (
            <StyledBody>
                <div>
                    <p>Loading</p>
                </div>
            </StyledBody>
        );
    }

    return (
        <StyledBody>
            <div>
                <h1>Selecione o filme</h1>
            </div>     

            <StyledList>
            {movies.map((m) => (
                <li key={m.id} onClick={() => updateMovie(m.title, m.posterURL)}>
                <Link to={`/sessions/${m.id}`}>
                <img src={m.posterURL} alt={m.title}/>
                </Link>
                </li>
            ))}
            </StyledList>
        </StyledBody>
    );
}

const StyledBody = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 67px;
    width: 100vw;
    align-items: center;

    div {
        width: 374px;
        height: 110px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h1 {
        text-align: center;
        font-size: 24px;
        line-height: 28px;
        font-family: "Roboto";
        font-weight: 400;
    }

    img {
        width: 129px;
        height: auto;
    }
`;

const StyledList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    li {
        padding: 8px;
        width: 145px;
        height: 209px;
        margin-bottom: 7px;
        box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.1);
        box-sizing: border-box;
        border-radius: 3px;
    }
`;
