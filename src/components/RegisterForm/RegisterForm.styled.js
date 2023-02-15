import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Form = styled.form`



`

export const Label = styled.label`
    display: block;
    position: relative;
    font-weight: 400;
    font-size: 16px;
    line-height: 1,17;
    letter-spacing: 0.01em;
    color: black;
    margin-bottom: 20px;

`

export const Input = styled.input`
    width: 600px;
    heigth: 40px;
    display: block;
    padding-left: 22px;
    padding-top: 8px;
    padding-bottom: 8px;
    border: 1px solid rgba(33, 33, 33, 0.2);
    border-radius: 4px;
    font: inherit;
    color: black;

    transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1), outline 250ms cubic-bezier(0.4, 0, 0.2, 1);
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
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover,
    :focus {
        background-color: lightgrey;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)}
`