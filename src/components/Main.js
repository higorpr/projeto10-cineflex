import styled from "styled-components";
import m1Poster from "../assets/img/2067_poster.jpg";
import m2Poster from "../assets/img/Sudden_Death_poster.jpg";

export default function Main({ phase, setPhase }) {
    
    let displayPhase;

    switch (phase) {
        case "movies":
            displayPhase = <BodyMovies />;
            break;
        case "time":
            displayPhase = <BodyTime />;
            break;
        case "seats":
            displayPhase = <BodySeats />;
            break;
        default:
            displayPhase = <BodySucess />;
            break;
    }
    console.log(displayPhase)
    return (
        <>
            <StyledHeader>
                <p>CINEFLEX</p>
            </StyledHeader>
            {displayPhase}
        </>
    );
}

function BodyMovies() {
    const posterArray = [m1Poster, m2Poster];
    return (
        <StyledBody>
            <p>Selecione o filme</p>
            {posterArray.map((image) => (
                <img src={image} alt="" />
            ))}
        </StyledBody>
    );
}

function BodyTime() {}

function BodySeats() {}

function BodySucess() {}

const StyledHeader = styled.div`
    height: 67px;
    background-color: #c3cfd9;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100vw;

    p {
        font-family: "Roboto";
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;
        color: #e8833a;
    }
`;

const StyledBody = styled.div`
    display: flex;
    flex-wrap: wrap;

    img {
        width: 129px;
        height: auto;
    }
`;
