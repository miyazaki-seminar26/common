import { Box, Flex, Space } from '@mantine/core';
import type { FC, ReactNode } from 'react';

import { HEADERLINKS } from '@/constants/links';

import { AppFooter } from './footer';
import { AppHeader } from './header';

type Props = {
  children: ReactNode;
};

export const AppLayoutWithHeader: FC<Props> = ({ children }) => {
  return (
    <Box className="min-h-screen">
      <Flex className="w-full justify-between">
        <div className="fixed top-0 z-20 w-screen">
          <AppHeader links={HEADERLINKS} />
        </div>
      </Flex>
      <Space h={40} />

      <main className="min-h-screen bg-gray-100">{children}</main>
      <AppFooter />
    </Box>
  );
};
