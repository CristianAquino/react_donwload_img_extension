import styled from "styled-components";

const ContainerImage = styled.figure`
  position: relative;
  block-size: 7.5rem;
  text-align: center;
  overflow: hidden;
  & a {
    position: absolute;
    inset-inline-end: 0;
    inset-block-start: 0;
  }
  &:hover a {
    display: block;
    background-color: var(--primary);
  }
  &:has(:checked) {
    border: 1px solid var(--primary);
    border-radius: 0.5rem;
  }
  & img {
    block-size: 100%;
    cursor: pointer;
  }
`;

export { ContainerImage };
