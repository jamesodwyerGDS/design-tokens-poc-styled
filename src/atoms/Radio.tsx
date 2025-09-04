import styled from "styled-components";

export const Radio = styled.input.attrs({ type: "radio" })`
  appearance: none;
  width: var(--core-space-6);
  height: var(--core-space-6);
  border: 1px solid var(--semantic-color-form-control-border);
  border-radius: 50%;
  background: var(--semantic-color-form-control-bg);
  cursor: pointer;
  position: relative;

  &:checked {
    border: 2px solid var(--semantic-color-form-control-checked);

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: calc(var(--core-space-4) - 12px);
      height: calc(var(--core-space-4) - 12px);
      background: var(--semantic-color-form-control-checked);
      border-radius: 50%;
    }
  }

  &:hover {
    border-color: var(--semantic-color-form-control-checked);
  }

  &:focus {
    outline: 2px solid var(--semantic-color-form-control-checked);
    outline-offset: 2px;
  }
`;
