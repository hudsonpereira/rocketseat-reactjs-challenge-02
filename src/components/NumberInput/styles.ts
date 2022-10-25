import styled from "styled-components";

export const NumberInputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme["base-button"]};
  border-radius: 6px;
  gap: 0.25rem;
  justify-content: space-between;
  padding: 0.5rem;

  > span {
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
  }

  > button {
    cursor: pointer;
    outline: 0;
    border: 0;
    background-color: transparent;
    /* color: red; */
    svg {
      fill: ${props => props.theme["purple"]};
    }
  }
`