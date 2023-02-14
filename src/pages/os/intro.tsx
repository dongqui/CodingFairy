import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import type { GetStaticProps } from 'next';

import { Heading, Paragraph, Spacing, Divider } from 'components';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common', 'footer'])),
  },
});

export default function Page() {
  const { t } = useTranslation(['common']);
  return (
    <>
      <Heading level={1}>운영체제 - 소개</Heading>
      <Spacing size={20} />
      비디오
      <Spacing size={20} />
      <Heading level={2}>운영체제란 무엇일까요?</Heading>
      <Paragraph>
        운영체제는 우리가 쉽게 컴퓨터 하드웨어를 사용할 수 있도록 도와주는 소프트웨어 프로그램입니다. <br />
        가장 대표적으로 Windwos, Mac OS, Linux 그리고 모바일을 위한 IOS, Android 등이 있습니다. <br />
      </Paragraph>
      <Divider />
      <Spacing size={30} />
      <Heading level={2}>운영체제는 무슨 일을 하나요?</Heading>
      <Paragraph>운영 체제가 하는 일은 크게 두 가지입니다.</Paragraph>
      <Heading level={3}>1. 컴퓨터 하드웨어와 소프트웨어 관리</Heading>
      <Paragraph>
        컴퓨터는 많은 기계들로 이루어져있죠. CPU, RAM, DISK, monitor, mouse, keyboard 같은 것들이요! 그리고 우리는 컴퓨터를 이용해 많은 일들을 합니다. 유튜브를 보거나 엑셀을
        사용하고 또는 음악을 듣거나나 게임을 하기도 합니다. 이 소프트웨어들은 모두 하드웨어를 필요로 합니다. 이 때 OS는 하드웨어에게 어떤 데이터부터 처리해야되는지 혹은 어떤
        데이터부터 저장해야되는지 등의 일들을 지시하게 됩니다. 즉, OS는 이 많은 소프트웨어와 하드웨어가 조화롭게 잘 사용될 수 있도록 효율적이고 안전하게 관리하는 역할을 합니다.
      </Paragraph>
      <Spacing size={20} />
      <Heading level={3}>1. 컴퓨터 하드웨어와 소프트웨어 관리</Heading>
      <Paragraph>
        컴퓨터는 많은 기계들로 이루어져있죠. CPU, RAM, DISK, monitor, mouse, keyboard 같은 것들이요! 그리고 우리는 컴퓨터를 이용해 많은 일들을 합니다. 유튜브를 보거나 엑셀을
        사용하고 또는 음악을 듣거나나 게임을 하기도 합니다. 이 소프트웨어들은 모두 하드웨어를 필요로 합니다. 이 때 OS는 하드웨어에게 어떤 데이터부터 처리해야되는지 혹은 어떤
        데이터부터 저장해야되는지 등의 일들을 지시하게 됩니다. 즉, OS는 이 많은 소프트웨어와 하드웨어가 조화롭게 잘 사용될 수 있도록 효율적이고 안전하게 관리하는 역할을 합니다.
      </Paragraph>
    </>
  );
}
