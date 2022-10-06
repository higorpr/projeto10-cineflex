// import styled from "styled-components";

import styled from "styled-components";

export default function Footer({ phase, movie, poster, session }) {
    if (phase === "movies" || phase === "success") {
        return <></>;
    }

    return (
        <StyledFooter>
            <img src={poster} alt="poster_img" />
            <div>
                <h1>{movie}</h1>
                <span>{session.weekday}</span> - <span>{session.showtime}</span>
            </div>
        </StyledFooter>
    );
}

const StyledFooter = styled.div`
    position: fixed;
    bottom: 0;
    width: 100vw;
    background-color: #dfe6ed;
    border-top: 1px solid #9eadba;
    display: flex;

    img {
        padding: 8px;
        width: 64px;
        height: 89px;
        margin: 14px 14px 14px 10px;
        box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
        border-radius: 2px;
        background-color: #ffffff;
    }

    h1 {
        text-align: center;
        font-size: 26px;
        line-height: 28px;
        font-family: "Roboto";
        font-weight: 400;
    }
`;
