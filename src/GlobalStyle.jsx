import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    body {
        background-color: #2ec4b6;
    }
    
    #root {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
    
}

`;

export default GlobalStyle;
