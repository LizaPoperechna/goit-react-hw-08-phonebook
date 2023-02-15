import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  &.active {
    color: blue;
    background-color: lightblue;
  }
`;

// const styles = {
//     link: {
//       display: 'inline-block',
//       textDecoration: 'none',
//       padding: 12,
//       fontWeight: 700,
//       color: '#2A363B',
//     },
//     activeLink: {
//       color: '#E84A5F',
//     },
//   };