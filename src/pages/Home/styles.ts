import styled from "styled-components";

import bannerBackground from '../../assets/banner-background.svg'

export const BannerContainer = styled.div`
  background-image: url(${bannerBackground});
  background-repeat: no-repeat;
  background-size: cover;
  /* filter: blur(80px); */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 34rem;
`

export const BannerContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 1120px;
  align-items: center;
  gap: 3.5rem;
  background-color: transparent;

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    margin-bottom: 1rem;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
    margin-bottom: 4.125rem;
  }
`

export const ItemsGrid = styled.div`
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  grid-row-gap: 1.25rem;
`

export const MainWrapper = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 0;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    margin-bottom: 54px;
  }
`

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
`

export const Card = styled.div`
  max-width: 256px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => props.theme['base-card']};
  border-radius: 6px 36px 6px 36px;
  padding: 0px 1.25rem 1.25rem 1.25rem;
  align-items: center;
  gap: 0.75rem;

  img {
    max-width: 120px;
    height: auto;
    margin-top: -20px;
  }

  h2 {
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: ${props => props.theme['base-label']};
    text-align: center;
  }
`

export const Tags = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 1rem;

  span {
    background-color: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};
    border-radius: 6px;
    padding: 4px 8px;
    font-weight: 700;
    font-size: 10px;
    line-height: 130%;
    text-transform: uppercase;
  }
`

export const CardFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 0.5rem;
  align-items: center;

  > span {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 24px;
    line-height: 130%;
    flex: 1;

    ::before {
      content: 'R$\\00a0';
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
    }
  }

  > button {
    background-color: ${props => props.theme['purple-dark']};
    color: white;
    padding: 0.5rem;
    outline: 0;
    border: 0;
    border-radius: 6px;

    svg {
      path {
        fill: ${props => props.theme.white};
      }
    }
  }
`