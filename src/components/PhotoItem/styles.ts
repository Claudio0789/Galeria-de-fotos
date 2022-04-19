import styled from "styled-components";

export const Container = styled.div`
    background-color: #3D3F43;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;

    img {
        max-width: 100%;
        display: block;
        margin-bottom: 10px;
        border-radius: 10px;
    }

    button {
        display: block;
        border: 0;
        margin-top: 20px;
        padding: 10px;
        background-color: #CCC;
        color: #FFF;
        cursor: pointer;
        border-radius: 15px;

        &:hover {
            background-color: #FFF;
            color: #000;
        }
    }
`;