import styled from "styled-components";

export const Wrapper = styled.div`
    margin-left: 140px;
    margin-right: 140px;
`

export const  SearchLogo = styled.img`
    width: 54px;
    height: 37px;

`
export const SearchBlock = styled.div`
    padding-top: 43px;
    padding-bottom: 43px;
    display: flex;
    align-items: center;
`

export const SearchBlockInput = styled.input`
    width: 876px;
    height: 50px;
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.20);
    background: #FFF;
    margin-left: 60px;
    padding-left: 19px;

    &::placeholder {
        color: rgba(0, 0, 0, 0.30);
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
    }
`

export const SearchBlockButton = styled.button`
    width: 158px;
    height: 50px;
    border-radius: 6px;
    border: 1px solid #009EE4;
    background: #009EE4;
    color: #FFF;
    margin-left: 10px;
    cursor: pointer;
`