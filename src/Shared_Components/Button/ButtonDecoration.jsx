import styled from "styled-components";
import { FIRST_COLOR, SECOND_COLOR } from "../GlobalStyles.jsx/GlobalStyles";

const ButtonDecoration = styled.button`
    background-color: ${SECOND_COLOR};
    color: ${FIRST_COLOR};
    font-size: 0.9rem;
    font-weight: 800;
    padding: .8rem 1.3rem ;
    cursor: pointer;
    margin-top: 2.5rem;
`;

export default ButtonDecoration;