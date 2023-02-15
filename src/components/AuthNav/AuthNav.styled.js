import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
    display: inline-block;
    background-color: lightblue;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.62;
    text-align: center;
    margin-left: 20px;
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

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

`