import { PropsWithChildren, useEffect, useState } from 'react';
import { css } from '@emotion/react';

import Sidebar from './Sidebar';
import Main from './Main';
import Container from './Container';
import Header from './Header';
import { useMediaQuery } from 'hooks';
import { TABLIT_WIDTH } from 'constant';

export default function Layout({ children }: PropsWithChildren) {
  const isTablit = useMediaQuery(TABLIT_WIDTH);
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    if (isTablit) {
      setShowSidebar(false);
    } else {
      setShowSidebar(true);
    }
  }, [isTablit]);

  return (
    <Container>
      <Sidebar show={showSidebar} isTablit={isTablit} setShowSidebar={setShowSidebar} />
      <div>
        <Header showMenu={isTablit || !showSidebar} setShowSidebar={setShowSidebar} />
        <Main>{children} </Main>
      </div>
    </Container>
  );
}
