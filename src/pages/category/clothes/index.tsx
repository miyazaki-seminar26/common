import { Text } from '@mantine/core';
import type { NextPage } from 'next';

import { AppLayoutWithHeader } from '@/components/layouts/AppLayoutWithHeader';

const Clothes: NextPage = () => {
  return (
    <AppLayoutWithHeader>
      <Text>Clothes</Text>
    </AppLayoutWithHeader>
  );
};
export default Clothes;
