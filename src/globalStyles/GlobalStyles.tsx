import styled, { css } from "styled-components";
import { $mobileWidth } from "../constants/breakpoints";

export const CentralWrapper = css`
    padding-left: 140px;
    padding-right: 140px;
`
export const Container = styled.div`
    ${CentralWrapper}

    @media screen and (max-width: ${$mobileWidth}) {
        padding-left: 18px;
        padding-right: 18px;
    }
`
export const $mainColor = '#009EE4'