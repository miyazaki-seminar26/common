import { Box, Image, List, Space, Text } from '@mantine/core';
import type { FC } from 'react';

import { BoxWithTitle } from '@/components/common/BoxWithTitle';

export const Welfare: FC = () => {
  return (
    <Box>
      <BoxWithTitle title="図形化" isNoBox>
        <div className="w-full md:flex">
          <Box>
            <Text weight="bold" size="md">
              疑問を持たないもの
            </Text>
            <List listStyleType="number" withPadding size="sm">
              <List.Item>
                そもそも日本に社会福祉と呼べる制度がある事（社会福祉がない国もある）
              </List.Item>
              <List.Item>失業手当、年金、介護保険がある</List.Item>
              <List.Item>社会福祉は社会的弱者に対するものである</List.Item>
              <List.Item>妊婦さんや高齢者に席を譲る</List.Item>
              <List.Item>育休、産休がある</List.Item>
              <List.Item>
                医療保険制度があるので気軽に病院に行くことが出来る
              </List.Item>
              <List.Item>日本は義務教育制度がある</List.Item>
              <List.Item>
                生活保護を受けることが出来、最低限の生活を保障されている
              </List.Item>
            </List>
          </Box>
          <Box w={'64%'}>
            <Image src="/images/category/welfare/chart.svg" alt="chart" />
          </Box>
        </div>
      </BoxWithTitle>

      <Space h={40} />

      <BoxWithTitle title="公共福祉における抽象化" isNoBox>
        <Text size="sm">
          公共福祉における当たり前は、生まれた時からあり、違和感を感じないことから来るものである。
          全体的に規則・法律によりがちである。
          規則・法律に変化が生じ、時間が経過すると公共福祉における当たり前も変化する。
        </Text>
      </BoxWithTitle>

      <Space h={40} />
    </Box>
  );
};
