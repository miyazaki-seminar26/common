import { Center, Text } from '@mantine/core';
import type { NextPage } from 'next';

import { AppLayoutWithHeader } from '@/components/layouts/AppLayoutWithHeader';

const Clothes: NextPage = () => {
  return (
    <AppLayoutWithHeader>
      <div className="min-h-max">
        背景に動く系の画像を入れる
        <Center className="h-[98vh]">
          <Text weight={800} size="xl" className="font-sans">
            それって当たり前ですか？
          </Text>
        </Center>
      </div>
      <Text>Clothes</Text>
    </AppLayoutWithHeader>
  );
};
export default Clothes;
