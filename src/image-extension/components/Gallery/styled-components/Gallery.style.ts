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
const Label = styled.label`
  position: relative;
  line-height: 0;

  & p {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
  & p::before {
    content: "";
    inline-size: 1rem;
    block-size: 1rem;
    border: 1px solid #1567ff;
    border-radius: 0.25rem;
  }
  & input:checked + p::before {
    border-color: green;
    border-width: 2px;
    border-top-color: transparent;
    border-left-color: transparent;
    inline-size: 0.5rem;
    rotate: 30deg;
    transform: translateY(-0.25rem);
    border-radius: none;
    transition: rotate 0.25s ease-in-out;
  }
`;
export { ContainerImage, Label };
