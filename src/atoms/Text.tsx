import styled from "styled-components";

export const DisplayText = styled.p`
  font-size: var(--font-display-size);
  font-weight: var(--font-display-weight);
  line-height: var(--font-display-line);
  margin: 0 0 var(--space-2);
`;

export const TitleText = styled.h2`
  font-size: var(--font-title-size);
  font-weight: var(--font-title-weight);
  line-height: var(--font-title-line);
  margin: 0 0 var(--space-3);
`;

export const BodyText = styled.p`
  font-size: var(--font-body-size);
  line-height: var(--font-body-line);
  margin: 0 0 var(--space-2);
`;

export const LabelText = styled.span`
  font-size: var(--font-label-size);
  letter-spacing: var(--font-label-tracking);
  text-transform: var(--font-label-transform);
  color: var(--color-fg-muted);
`;
