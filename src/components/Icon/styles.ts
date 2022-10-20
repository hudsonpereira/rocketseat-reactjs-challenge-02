import styled from "styled-components";

interface IconWrapperProps {
  backgroundColor: string;
}

export const IconWrapper = styled.span<IconWrapperProps>`
  padding: .5rem;
  border-radius: 100%;
  width:2rem;
  height:2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.backgroundColor};
  color: white;
  margin-right: .75rem;
`