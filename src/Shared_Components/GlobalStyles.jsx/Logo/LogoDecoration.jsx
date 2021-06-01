import styled from "styled-components";
import { FIRST_COLOR, SECOND_COLOR } from "../GlobalStyles";

const LogoDecoration = styled.a`
    font-weight: bold;
    font-size: 1.4rem;
    .logo-first-part {
        color : ${FIRST_COLOR};
        padding-bottom: .3rem;
        border-bottom: 3px solid ${SECOND_COLOR};
    }
    .logo-second-part {
        color : ${SECOND_COLOR};
    }
`;

export default LogoDecoration;
