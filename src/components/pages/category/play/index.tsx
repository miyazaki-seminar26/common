import { Box, Image, List, Space, Text } from '@mantine/core';
import type { FC } from 'react';

import { BoxWithTitle } from '@/components/common/BoxWithTitle';

export const Play: FC = () => {
  return (
    <Box>
      <BoxWithTitle title="図形化" isNoBox>
        <div className="w-full md:flex">
          <Box>
            <Text weight="bold" size="md">
              疑問を持たないもの
            </Text>
            <List listStyleType="number" withPadding size="sm">
              <List.Item>心が豊かになるもの</List.Item>
              <List.Item>娯楽は仕事になる</List.Item>
              <List.Item>人生の活力になる</List.Item>
              <List.Item>自由に行動できる</List.Item>
              <List.Item>
                感性によって楽しめる娯楽と楽しめない娯楽がある
              </List.Item>
              <List.Item>
                それをすることによって、人間の神経に訴えかけて自律神経 →
                興奮・鎮静などの効果がある（セロトニン・オキシトシン・ドーパミン）
              </List.Item>
              <List.Item>ある程度精神安定が必要</List.Item>
              <List.Item>お金がかかるものがある</List.Item>
              <List.Item>無意識に楽しいと思ってること</List.Item>
              <List.Item>
                心理的に楽しむものと身体を使って楽しむものがある →
                具体的な行動は時代によって変化する（今ならテレビ鑑賞・矢場）
              </List.Item>
              <List.Item>
                何かしらそれ以外のことで活かせる可能性がある
              </List.Item>
              <List.Item>精神的な制限がない</List.Item>
              <List.Item>元来人間は娯楽を求めている</List.Item>
            </List>
          </Box>
          <Box w={'64%'}>
            <Image src="/images/category/play/chart.svg" alt="chart" />
          </Box>
        </div>
      </BoxWithTitle>

      <Space h={40} />

      <BoxWithTitle title="娯楽における抽象化" isNoBox>
        <Text size="sm">
          娯楽の当たり前は、概ね事実と本能の要素で構成されている。
          このことは、人間は昔から娯楽と共にあることや、科学的にも娯楽は人間に良い影響を与えることからもわかる。二つの観点から良い影響を与えるものが当たり前である。
        </Text>
      </BoxWithTitle>

      <Space h={40} />
    </Box>
  );
};
