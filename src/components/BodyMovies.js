import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

export default function BodyMovies({ phase, setPhase }) {
    const [movies, setMovies] = useState([]);
    // console.log(movies);

    useEffect(() => {
        const url = "https://mock-api.driven.com.br/api/v5/cineflex/movies";
        const promisse = axios.get(url);

        promisse.then((res) => {
            setMovies(res.data);
        });

        promisse.catch((err) => {
            console.log(err);
        });
    }, []);

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
                <p>Selecione o filme</p>
            </div>     

            <StyledList>
            {movies.map((m) => (
                <li key={m.id}>
                <img src={m.posterURL} alt={m.title}/>
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

    div {
        width: 374px;
        height: 110px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    p {
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
