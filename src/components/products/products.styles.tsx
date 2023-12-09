import styled from "styled-components";

export const Container = styled.div`
    margin-left: 140px;
    margin-right: 140px;
    margin-bottom: 37px;
`

export const ProductsTitle = styled.h2`
    color: #000;
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 220%;
    margin-bottom: 10px;
`

export const ProductsMain = styled.div`
    display: flex;
    flex-wrap:wrap;
    gap: 26px;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
`

export const CardImg = styled.div`
    margin-bottom: 20px;
    width: 270px;
    height: 270px;
    background: #F0F0F0;
`

export const CardDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 259px;
`

export const CardDescriptionTitle = styled.span`
    color: #009EE4;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
`

export const CardPrice = styled.span`
    color: #000;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
`

export const CardCity = styled.span`
    color: #5F5F5F;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
`

export const CardDate = styled.span`
    color: #5F5F5F;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
`