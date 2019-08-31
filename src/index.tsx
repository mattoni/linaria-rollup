import React, { FC } from "react";
import { styled } from "linaria/react";

const StyledText = styled.span`
  color: blue;
`;

type TestComponentProps = {};

export const TestComponent: FC<TestComponentProps> = () => (
  <StyledText>Hello World</StyledText>
);
