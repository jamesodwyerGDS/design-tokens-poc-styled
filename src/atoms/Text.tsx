import styled from "styled-components";

export const DisplayText = styled.p`
font-family: var(--brand-typography-font-family-01);
  font-size: var(--core-typography-font-size-900);
  font-weight: var(--core-typography-font-weight-black);
  line-height: 1;
  text-transform: var(--core-text-case-uppercase);
  letter-spacing: var(--xxsmall);
  margin: 0 0 var(--space-2);
`;

export const TitleText = styled.h2`
font-family: var(--brand-typography-font-family-01);
  font-size: var(--core-typography-font-size-300);
  font-weight: var(--core-typography-font-weight-black);
  line-height: 1;
  margin: 0 0 var(--space-3);
`;

export const BodyText = styled.p`
font-family: var(--brand-typography-font-family-01);
  font-size: var(--core-typography-font-size-100);
  font-weight: var(--core-typography-font-weight-regular);
  line-height: var(--core-typography-line-height-200);
  margin: 0 0 var(--space-2);
`;

export const LabelText = styled.span`
font-family: var(--brand-typography-font-family-01);
  font-size: var(--core-typography-font-size-100);
  font-weight: var(--core-typography-font-weight-semibold);
  line-height: 1;
  color: var(--semantic-color-fg-muted);
`;
