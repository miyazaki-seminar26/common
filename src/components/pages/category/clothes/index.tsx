import { Box, Image, List, Space, Text } from '@mantine/core';
import type { FC } from 'react';

import { BoxWithTitle } from '@/components/common/BoxWithTitle';

export const Clothes: FC = () => {
  return (
    <Box>
      <BoxWithTitle title="図形化" isNoBox>
        <div className="w-full md:flex">
          <Box>
            <Text weight="bold" size="md">
              疑問を持たないもの
            </Text>
            <List listStyleType="number" withPadding size="sm">
              <List.Item>服を着て外出する××××：3-4</List.Item>
              重ね着や腕まくりなどで温度調節ができる××××：3
              <List.Item>何かは身につけている××××：3</List.Item>
              <List.Item>流行がある××××：4</List.Item>
              <List.Item>
                どこにいようがネットを使ってコンタクトを取れる
              </List.Item>
            </List>
          </Box>
          <Box w={'64%'}>
            <Image src="/images/category/clothes/chart.svg" alt="chart" />
          </Box>
        </div>
      </BoxWithTitle>

      <Space h={40} />

      <BoxWithTitle title="衣における抽象化" isNoBox>
        <Text size="sm">
          人間にとって衣服には、保健衛生機能と社会的機能という役割がある。この２つの機能が衣服を着用する理由であるため、あてはまる事柄には疑問を持たず、当たり前となる。
          保健衛生的機能とは、体温調節の補助、身体の保護といったものである。衣服を着ると、皮膚と衣服の間や、さらに重ねた衣服との間に空気の層ができ、外気と異なる温度や湿度が生まれる。
          社会的機能とは、社会慣習へ順応するための手段のことである。
        </Text>
      </BoxWithTitle>

      <Space h={40} />
    </Box>
  );
};
