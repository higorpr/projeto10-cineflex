import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

export default function BodySeats({ setPhase, seats, setSeats, setBuyer }) {
    const { sessionId } = useParams();
    const [allSeats, setAllSeats] = useState([]);
    let unavailbleColor = "#FBE192";
    let unavailbleBorder = "#F7C52B";
    let availableColor = "#C3CFD9";
    let availableBorder = "#7B8B99";
    let selectedColor = "#1AAE9E";
    let selectedBorder = "#0E7571";

    useEffect(() => {
        const url = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`;
        const promise = axios.get(url);

        promise.then((res) => {
            // console.log(res.data.seats);
            setAllSeats(res.data.seats);
        });
        promise.catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <StyledBody>
            <StyledTitle>
                <h1>Selecione os assentos</h1>
            </StyledTitle>
            <StyledButtonList>
                {allSeats.map((s) => (
                    <Seat
                        key={s.id}
                        id={s.id}
                        name={s.name}
                        isAvailable={s.isAvailable}
                        seats={seats}
                        setSeats={setSeats}
                    />
                ))}
            </StyledButtonList>

            <StyledButtonList2>
                <li>
                    <StyledButton
                        color={selectedColor}
                        borderColor={selectedBorder}
                    ></StyledButton>
                    <p>Selecionado</p>
                </li>

                <li>
                    <StyledButton
                        color={availableColor}
                        borderColor={availableBorder}
                    ></StyledButton>
                    <p>Disponível</p>
                </li>

                <li>
                    <StyledButton
                        color={unavailbleColor}
                        borderColor={unavailbleBorder}
                    ></StyledButton>
                    <p>Indisponível</p>
                </li>
            </StyledButtonList2>

            <UserForm />
        </StyledBody>
    );
}

function Seat({ id, name, isAvailable, seats, setSeats }) {
    let unavailbleColor = "#FBE192";
    let unavailbleBorder = "#F7C52B";
    let availableColor = "#C3CFD9";
    let availableBorder = "#7B8B99";
    let selectedColor = "#1AAE9E";
    let selectedBorder = "#0E7571";
    let color;
    let borderColor;

    switch (isAvailable) {
        case false:
            color = unavailbleColor;
            borderColor = unavailbleBorder;
            break;
        default:
            color = availableColor;
            borderColor = availableBorder;
            break;
    }

    function selectSeat() {
        let seatArr = [...seats];
        if (isAvailable === false) {
            alert("Este assento não está disponível");
        } else {
            if (seats.includes(id) === false) {
                seatArr = [...seatArr, id];
                setSeats(seatArr);
            } else {
                const newArr = seatArr.filter((seatId) => seatId !== id);
                setSeats(newArr);
            }
        }
    }

    if (seats.includes(id)) {
        color = selectedColor;
        borderColor = selectedBorder;
    }

    return (
        <li>
            <StyledButton
                color={color}
                borderColor={borderColor}
                onClick={selectSeat}
            >
                {name}
            </StyledButton>
        </li>
    );
}

function UserForm() {
    return (
        <StyledForm>
            <div>
                <label htmlFor="name">Nome do comprador:</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Digite seu nome..."
                    required
                />
            </div>
            <div>
                <label htmlFor="cpf">CPF do comprador:</label>
                <input
                    type="number"
                    id="cpf"
                    max="99999999999"
                    placeholder="Digite seu CPF..."
                    required
                />
            </div>
            <button>Reservar assento(s)</button>
        </StyledForm>
    );
}

const StyledBody = styled.div`
    margin-top: 67px;

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
    height: 91px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledButtonList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 17px;
`;

const StyledButton = styled.button`
    border-radius: 50%;
    width: 26px;
    height: 26px;
    margin: 9px 3.5px;
    border: 1px solid ${(props) => props.borderColor};
    background-color: ${(props) => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledButtonList2 = styled.ul`
    display: flex;
    justify-content: space-evenly;
    margin: 0 auto;

    li {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    p {
        font-family: "Roboto";
        font-size: 13px;
        font-weight: 400;
        line-height: 15px;
        color: #4e5a65;
    }
`;

const StyledForm = styled.form`
    margin: 41px 24px 30px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    

    label {
        font-family: "Roboto";
        font-size: 18px;
        font-weight: 400;
        line-height: 21px;
    }

    input {
        width: 327px;
        height: 51px;
        margin-bottom: 10px;
        font-size: 18px;
        font-family: "Roboto";
        font-weight: 400;
        line-height: 21px;
        text-indent: 5px;
    }
    input::placeholder {
        font-style: italic;
        color: #afafaf;
        text-indent: 18px;
    }

    button {
        background-color: #E8833A;
        width: 225px;
        height: 42px;
        color: #ffffff;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        margin-top: 40px;
        border:none;
        border-radius: 3px;
    }
`;
