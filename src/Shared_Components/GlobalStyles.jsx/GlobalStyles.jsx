import { createGlobalStyle } from "styled-components";
import "@fontsource/cinzel";

export const BACKGROUND_COLOR = "#080A16";
export const FIRST_COLOR = "#fff";
export const SECOND_COLOR = "#F9BF2C";
export const THIRD_COLOR = "#000";

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Cinzel';
    }

    body {
        width: 100%;
        height: auto;
        padding-bottom: 10rem;
        background-color: ${BACKGROUND_COLOR};
        display: flex;
        justify-content: center;
        overflow-x: hidden;
    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    button {
        border-style: none;
    }

    input {
        ::placeholder {
        color: ${FIRST_COLOR};
        font-weight: 800;
        opacity: 1;
    }
    }
`;
export default GlobalStyles;
