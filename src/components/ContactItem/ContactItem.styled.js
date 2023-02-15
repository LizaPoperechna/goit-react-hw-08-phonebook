import styled from '@emotion/styled';

export const Li = styled.li`
    flex-wrap: nowrap;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`;

export const ButtonDel = styled.button`
      display: inline-block;
      background-color: lightgrey;
      font-weight: 400;
      font-size: 12px;
      line-height: 1.62;
      text-align: center;
      letter-spacing: 0.03em;
      color: black;
      border: 0;
      border-radius: 4px;
      cursor: pointer;
      padding: 6px 22px;
      margin-left: 15px;
      box-shadow: none;
      text-decoration: none;
      transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
      :hover,
      :focus {
          background-color: lightblue;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)}




 
`;