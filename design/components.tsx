import * as React from "react";
import styled from "styled-components";

const Heading = styled.h1`
  font-size: 2rem;
  line-height: 2.4rem;
  margin: 0 0 1rem;
`;

const Main = styled.main`
  padding: 1rem;
`;

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Main>
      <Heading>Acme's blog</Heading>
      {children}
    </Main>
  );
}
