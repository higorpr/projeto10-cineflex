import { Link } from "react-router-dom";
import styled from "styled-components";

export default function BodySuccess({
    movie,
    session,
    seatsNames,
    buyer,
    setPhase,
    setMovie,
    setPoster,
    setSession,
    setSeats,
    setSeatsNames,
    setBuyer,
}) {
    function formatCpf(cpf) {
        let p1 = cpf.slice(0, 3);
        let p2 = cpf.slice(3, 6);
        let p3 = cpf.slice(6, 9);
        let suf = cpf.slice(9);
        let main = [p1, p2, p3].join(".");
        let whole = [main, suf].join("-");
        return whole;
    }

    function resetStates() {
        setPhase("movies");
        setMovie("");
        setPoster("");
        setSession({
            weekday: "",
            date: "",
            showtime: "",
        });
        setSeats([]);
        setSeatsNames([]);
        setBuyer({ name: "", cpf: "" });
    }

    return (
        <>
            <StyledBody>
                <StyledTitle>Pedido feito com sucesso!</StyledTitle>
                <div>
                    <h1>Filme e sessão</h1>
                    <h2 data-identifier="movie-session-infos-reserve-finished">
                        {movie}
                    </h2>
                    <h2 data-identifier="movie-session-infos-reserve-finished">
                        {session.date} {session.showtime}
                    </h2>
                </div>

                <div>
                    <h1>Ingressos</h1>
                    <ul>
                        {seatsNames.map((sN, idx) => (
                            <li
                                key={idx}
                                data-identifier="seat-infos-reserve-finished"
                            >
                                Assento {sN}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h1>Comprador</h1>
                    <h2 data-identifier="buyer-infos-reserve-finished">
                        Nome: {buyer.name}
                    </h2>
                    <h2 data-identifier="buyer-infos-reserve-finished">
                        CPF: {formatCpf(buyer.cpf)}
                    </h2>
                </div>
                <StyledLink to="/">
                    <StyledButton
                        onClick={resetStates}
                        data-identifier="back-to-home-btn"
                    >
                        Voltar para home
                    </StyledButton>
                </StyledLink>
            </StyledBody>
        </>
    );
}

const StyledBody = styled.div`
    margin-top: 67px;
    display: flex;
    flex-direction: column;

    div {
        margin-bottom: 40px;
        margin-top: 10px;
    }

    h1 {
        margin-left: 29px;
        font-family: "Roboto";
        font-size: 24px;
        line-height: 28px;
        color: #293845;
        font-weight: 700;
    }

    h2,
    li {
        margin-left: 29px;
        font-family: "Roboto";
        font-size: 22px;
        line-height: 26px;
        color: #293845;
    }
`;

const StyledButton = styled.button`
    background-color: #e8833a;
    width: 225px;
    height: 42px;
    color: #ffffff;
    font-family: "Roboto";
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    border: none;
    margin: 40px auto;
    border-radius: 3px;
`;

const StyledTitle = styled.p`
    color: #247a6b;
    width: 374px;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-family: "Roboto";
    font-size: 24px;
    line-height: 28px;
    padding: 0 100px;
    box-sizing: border-box;
    text-align: center;
    margin-left: 0px;
`;

const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    text-decoration: none;
`;
