import { PropsWithChildren } from 'react';

import Sidebar from './Sidebar';
import Main from './Main';
import Container from './Container';
import Header from './Header';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Container>
      <Sidebar />
      <div>
        <Header></Header>
        <Main>{children} </Main>
      </div>
    </Container>
  );
}
