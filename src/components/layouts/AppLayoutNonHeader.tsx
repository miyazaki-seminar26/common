import { Box, Center, Container, Image, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import type { FC, ReactNode } from 'react';

import { HEADERLINKS } from '@/constants/links';

import { AppFooter } from './footer';
import { AppHeader } from './header';

type Props = {
  children: ReactNode;
};

export const TopPageNonHeaderLayout: FC<Props> = ({ children }) => {
  const matches = useMediaQuery('(min-width: 900px)');

  return (
    <Box className="min-h-screen bg-gray-50">
      <div className="relative">
        {matches ? (
          <Box h="100vh" className="absolute w-full opacity-80">
            <Image src="/images/firstview-bg.svg" alt="hero" height="99vh" />
          </Box>
        ) : (
          <Box h="100vh" className="absolute -top-3 w-full opacity-60">
            <Image src="/images/sp-firstview-bg.svg" alt="hero" height="99vh" />
          </Box>
        )}

        <Center className="z-10 h-[100vh] w-full">
          <Text weight={900} size="xl" className="font-sans">
            それって当たり前ですか？
          </Text>
        </Center>
      </div>
      <div className="sticky top-0 z-20 w-full">
        <AppHeader links={HEADERLINKS} />
      </div>
      <main className="min-h-screen">
        <Container className="min-h-full pt-6" mx={{ md: 'auto', xs: 0 }}>
          {children}
        </Container>
      </main>
      <AppFooter />
    </Box>
  );
};
