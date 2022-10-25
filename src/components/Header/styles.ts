import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 32px 0px ;
`

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 6px;
`

export const LocationButton = styled.button`
  padding: 0.5rem;
  align-items: center;
  display: flex;
  gap: 0.25rem;
  justify-content: space-between;
  background-color: ${props => props.theme['purple-light']};
  color: ${props => props.theme['purple-dark']};
  border: 0;
  border-radius: 6px;
  height: 38px;

  /* font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%; */

  svg {
    path {
      fill: ${props => props.theme['purple']};
    }
  }
`

export const CartButton = styled.button`
  padding: 8px;
  width: 38px;
  height: 38px;
  background-color: ${props => props.theme['yellow-light']};
  color: ${props => props.theme['yellow-dark']};
  font-weight: bold;
  border: 0;
  border-radius: 6px;

  svg {
    path {
      fill: ${props => props.theme['yellow-dark']};
    }
  }
`