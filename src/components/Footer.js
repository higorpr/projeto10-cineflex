// import styled from "styled-components";

export default function Footer({ phase }) {
    if (phase === "movies" || phase === "success") {
        return <></>;
    }

    return (
    <p>TEST FOOTER</p>
    )
}
