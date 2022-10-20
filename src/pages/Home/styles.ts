import styled from "styled-components";

import bannerBackground from '../../assets/banner-background.svg'

export const BannerContainer = styled.div`
  background-image: url(${bannerBackground});
  background-repeat: no-repeat;
  background-size: cover;
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

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 130%;
    margin-bottom: 1rem;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    margin-bottom: 4.125rem;
  }
`

export const ItemsGrid = styled.div`
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
  grid-row-gap: 1.25rem;
`