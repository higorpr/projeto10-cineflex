import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header({setPhase}) {
    return (
        <StyledHeader>
            <StyledLink to="/">
                <p onClick={() => setPhase('movies')}>CINEFLEX</p>
            </StyledLink>
        </StyledHeader>
    );
}

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

const StyledLink = styled(Link)`
    text-decoration: none;
`;
