import styled from "@emotion/styled";

export function Error({children}) {
    const Texto = styled.div`
        background-color: #B7322C;
        color: #FFF;
        padding: 15px;
        font-size: 22px;
        text-transform: uppercase;
        font-family: 'Lato',sans-serif;
        font-weight: 700;
        text-align: center;
        border-radius: 10px;
    `

    return (
        <Texto>
            {children}
        </Texto>
    )
}