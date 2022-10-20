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
  background-color: var(--purple-light);
  color: var(--purple-dark);
  border: 0;
  border-radius: 6px;
  height: 38px;

  svg {
    path {
      fill: var(--purple-dark) 
    }
  }
`

export const CartButton = styled.button`
  padding: 8px;
  width: 38px;
  height: 38px;
  background-color: var(--yellow-light);
  color: var(--yellow-dark);
  font-weight: bold;
  border: 0;
  border-radius: 6px;

  svg {
    path {
      fill: var(--yellow-dark) 
    }
  }
`