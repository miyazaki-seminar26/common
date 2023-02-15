import { Box, Image, List, Space, Text } from '@mantine/core';
import type { FC } from 'react';

import { BoxWithTitle } from '@/components/common/BoxWithTitle';

export const House: FC = () => {
  return (
    <Box>
      <BoxWithTitle title="図形化" isNoBox>
        <div className="w-full md:flex">
          <Box>
            <Text weight="bold" size="md">
              疑問を持たないもの
            </Text>
            <List listStyleType="number" withPadding size="sm">
              <List.Item>床がある</List.Item>
              <List.Item>安心感がある</List.Item>
              <List.Item>お金がかかる</List.Item>
              <List.Item>寝ることが出来る</List.Item>
              <List.Item>建築物である</List.Item>
              <List.Item>住所がある</List.Item>
              <List.Item>公共施設もある</List.Item>
              <List.Item>雨風を防げる</List.Item>
              <List.Item>体を休めるためのもの</List.Item>
              <List.Item>様々な種類がある</List.Item>
              <List.Item>多くの時間を過ごす場所</List.Item>
              <List.Item>時代や環境で変わる</List.Item>
              <List.Item>QOLに直結する</List.Item>
              <List.Item>プライバシーが保護されている</List.Item>
              <List.Item>暑さや寒さを凌げる</List.Item>
            </List>
          </Box>
          <Box w={'64%'}>
            <Image src="/images/category/house/chart.svg" alt="chart" />
          </Box>
        </div>
      </BoxWithTitle>

      <Space h={40} />

      <BoxWithTitle title="住における抽象化" isNoBox>
        <Text size="sm">
          住は人間の生活の基本であり、住の存在そのものが当たり前である。
          住の当たり前は信仰以外の要素に満遍なく配置された。
          時代や環境の変化に伴い、住の当たり前も変化していく。
          長く住んでいる人ほど、より当たり前になり、気に留めなくなる。
        </Text>
      </BoxWithTitle>

      <Space h={40} />
    </Box>
  );
};
