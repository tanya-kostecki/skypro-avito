import styled from "styled-components";
import { $tabletWidth } from '../../constants/breakpoints';

export const Header = styled.div`
    height: 79px;
    background: #009EE4;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    @media screen and (max-width: ${$tabletWidth}) {
        display: none;
    }
`
export const HeaderNav = styled.div`
    background: #009EE4;
    margin-left: 140px;
    margin-right: 140px;
`

export const HeaderButton = styled.button`
    border-radius: 6px;
    border: 1px solid #FFF;
    display: flex;
    padding: 8px 24px;
    align-items: flex-start;
    gap: 10px;
    color: #FFFFFF;
    background: #009EE4;
    cursor: pointer;
`

export const Authorized = styled.div`
    display: flex;
    gap: 10px
`