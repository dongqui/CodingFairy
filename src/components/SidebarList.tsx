import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import { List, ChevronButton, OSIcon, FlexRow, Ellipsis, Spacing } from '../components';

export default function SidebarList() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [openOS, setOpenOS] = useState(false);
  const [openPrinciplesOS, setOpenPrinciplesOS] = useState(false);

  return (
    <List>
      <List.LinkItem href="/os" depth={1} isCurrentPath={router.asPath === '/os'}>
        <FlexRow>
          <OSIcon />
          <Ellipsis>{t('os')}</Ellipsis>
        </FlexRow>

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
            <Ellipsis>1. {t('intro')}</Ellipsis>
          </List.LinkItem>
          <List.LinkItem href="/os/computer-system-principles" depth={2} isCurrentPath={router.asPath === '/os/computer-system-principles'}>
            <Ellipsis>2. {t('computer-system-principles')}</Ellipsis>
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
                <Ellipsis>2.1 {t('computer-system-structure')}</Ellipsis>
                <Spacing size={15} direction="width" />
              </List.LinkItem>
              <List.LinkItem href="/os/computer-system-principles/interrupt" depth={3} isCurrentPath={router.asPath === '/os/computer-system-principles/interrupt'}>
                <Ellipsis>2.2 {t('interrupt')}</Ellipsis>
              </List.LinkItem>
            </>
          )}
        </>
      )}
    </List>
  );
}
