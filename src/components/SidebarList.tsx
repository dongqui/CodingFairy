import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import { List, ChevronButton } from '../components';

export default function SidebarList() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [openOS, setOpenOS] = useState(false);
  const [openPrinciplesOS, setOpenPrinciplesOS] = useState(false);

  return (
    <List>
      <List.LinkItem href="/os" depth={1} isCurrentPath={router.asPath === '/os'}>
        {t('operating-system')}
        <ChevronButton
          onClick={(e) => {
            e.preventDefault();
            setOpenOS(!openOS);
          }}
          isOpen={openOS}
        />
      </List.LinkItem>
      {openOS && (
        <>
          <List.LinkItem href="/os/intro" depth={2} isCurrentPath={router.asPath === '/os/intro'}>
            {t('intro')}
          </List.LinkItem>
          <List.LinkItem href="/os/computer-system-principles" depth={2} isCurrentPath={router.asPath === '/os/computer-system-principles'}>
            {t('principles-os')}
            <ChevronButton
              onClick={(e) => {
                e.preventDefault();
                setOpenPrinciplesOS(!openPrinciplesOS);
              }}
              isOpen={openPrinciplesOS}
            />
          </List.LinkItem>
          {openPrinciplesOS && (
            <>
              <List.LinkItem
                href="/os/computer-system-principles/computer-system-structure"
                depth={3}
                isCurrentPath={router.asPath === '/os/computer-system-principles/computer-system-structure'}
              >
                {t('computer-structure')}
              </List.LinkItem>
              <List.LinkItem href="/os/computer-system-principles/interrupt" depth={3} isCurrentPath={router.asPath === '/os/computer-system-principles/interrupt'}>
                {t('interrupt')}
              </List.LinkItem>
            </>
          )}
        </>
      )}
    </List>
  );
}
