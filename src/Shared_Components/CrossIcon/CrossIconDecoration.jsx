import styled from "styled-components";

const CrossIconDecoration = styled.li`
  width: auto;
  height: auto;
  display: none;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
  cursor: pointer;
  transition: all 1s ease;

  img {
    width: 1.3rem;
    height: auto;
  }

  @media (max-width: 768px) {
    display: flex;
    transition: all 1s ease;
  }
`;

export default CrossIconDecoration;
