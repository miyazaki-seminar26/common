import { Box, Image, List, Space, Text } from '@mantine/core';
import type { FC } from 'react';

import { BoxWithTitle } from '@/components/common/BoxWithTitle';

export const Food: FC = () => {
  return (
    <Box>
      <BoxWithTitle title="図形化" isNoBox>
        <div className="w-full md:flex">
          <Box>
            <Text weight="bold" size="md">
              疑問を持たないもの
            </Text>
            <List listStyleType="number" withPadding size="sm">
              <List.Item>食べ物にアレルギーを持つ人がいる</List.Item>
              <List.Item>健康だと空腹を覚える</List.Item>
              <List.Item>主食という概念がある</List.Item>
              <List.Item>人によって好みが違う</List.Item>
              <List.Item>土地によって食文化が違う</List.Item>
              <List.Item>栄養の摂りすぎは良くない</List.Item>
              <List.Item>食事には排泄行為が伴う</List.Item>
              <List.Item>味覚は五味で構成されている</List.Item>
              <List.Item>食事には作法がある</List.Item>
              <List.Item>孤食が存在する</List.Item>
              <List.Item>宗教によって食事が規定されている</List.Item>
              <List.Item>人によって食事が規定されている</List.Item>
              <List.Item>口から食べる</List.Item>
              <List.Item>どの食べ物にも栄養がある</List.Item>
            </List>
          </Box>
          <Box w={'64%'}>
            <Image src="/images/category/food/chart.svg" alt="chart" />
          </Box>
        </div>
      </BoxWithTitle>

      <Space h={40} />

      <BoxWithTitle title="食における抽象化" isNoBox>
        <Text size="sm">
          人間にとっての食事とは、栄養摂取のための行為であり、文化的な営みでもある。
          食事を規定するのは、第一に宗教や土地性などの文化的要因であり、第二に選好や生活習慣などの個人的な慣習であり、第三に食物アレルギーなどの個人の身体的特性や、味覚などの普遍的な生物学的要素という、広義の科学的事実といいうるものである。
          食事に関する文化的要因と個人的慣習は可変的なものであり、時代や場所、個体によって変化する。
          一方食事に関する科学的事実は、（当然、新事実の発見やパラダイムシフトによって科学自体が修正されうるが）ある一定のパラダイムによって立てば、時代や場所によって変化するものではなく、ある程度の普遍性を持っているといえる。
        </Text>
      </BoxWithTitle>

      <Space h={40} />
    </Box>
  );
};
