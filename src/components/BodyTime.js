import axios from "axios";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function BodyTime({ setPhase, session, setSession }) {
    const { movieId } = useParams();
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        const url = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`;
        const promisse = axios.get(url);

        promisse.then((res) => {
            setSessions(res.data.days);
        });
    }, []);

    return (
        <StyledBody>
            <StyledTitle>
                <h1>Selecione o horário</h1>
            </StyledTitle>
            {sessions.map((s) => (
                <Session
                    key={s.id}
                    date={s.date}
                    weekday={s.weekday}
                    showtimes={s.showtimes}
                    session={session}
                    setSession={setSession}
                    setPhase={setPhase}
                />
            ))}
        </StyledBody>
    );
}

function Session({ date, weekday, showtimes,session,setSession,setPhase }) {
    function updateSession(showtime){
        setSession({...session, weekday,date,showtime});
        setPhase('seats');
    }
    return (
        <StyledSession>
            <p>
                {weekday} - {date}
            </p>
            <StyledButtonList>
                {showtimes.map((s) => (
                    <li key={s.id}>
                        <Link to={`/seats/${s.id}`}>
                        <button onClick={() => updateSession(s.name)}>{s.name}</button>
                        </Link>
                    </li>
                ))}
            </StyledButtonList>
        </StyledSession>
    );
}

const StyledBody = styled.div`
    margin-top: 67px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;

    h1 {
        text-align: center;
        font-size: 24px;
        line-height: 28px;
        font-family: "Roboto";
        font-weight: 400;
    }
`;

const StyledTitle = styled.div`
    width: 375px;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledSession = styled.div`
    width: 100vw;
    padding: 0 24px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    p {
        font-size: 20px;
        line-height: 23px;
        font-family: "Roboto";
        font-weight: 400;
    }
`;

const StyledButtonList = styled.ul`
    display: flex;
    justify-content: left;
    margin: 23px 0;

    button {
        background-color: #e8833a;
        border-radius: 3px;
        font-size: 15px;
        font-weight: 400;
        line-height: 21px;
        width: 82px;
        height: 43px;
        color: #ffffff;
        border: none;
        margin-right: 9px;
        font-family: "Roboto";
    }
`;
