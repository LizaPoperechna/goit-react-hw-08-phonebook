import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

`

export const Avatar = styled.img`
    display: flex;
    align-items: center;
    margin-right: 20px;
`

export const Name = styled.p`
    font-weight: 700;
    margin-bottom: 0px;
    margin-right: 20px;
`

export const Button = styled.button`
    display: inline-block;
    background-color: lightblue;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.62;
    text-align: center;
    letter-spacing: 0.03em;
    color: black;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
    padding: 6px 22px;
    box-shadow: none;
    text-decoration: none;
    margin-right: 20px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover,
    :focus {
        background-color: lightgrey;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)}
`

