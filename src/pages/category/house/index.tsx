import { Text } from '@mantine/core';
import type { NextPage } from 'next';

import { AppLayoutWithHeader } from '@/components/layouts/AppLayoutWithHeader';

const House: NextPage = () => {
  return (
    <AppLayoutWithHeader>
      <Text>Play</Text>
    </AppLayoutWithHeader>
  );
};
export default House;
