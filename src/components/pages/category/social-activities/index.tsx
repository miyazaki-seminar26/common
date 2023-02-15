import { Box, Image, List, Space, Text } from '@mantine/core';
import type { FC } from 'react';

import { BoxWithTitle } from '@/components/common/BoxWithTitle';

export const SocialActivities: FC = () => {
  return (
    <Box>
      <BoxWithTitle title="図形化" isNoBox>
        <div className="w-full md:flex">
          <Box>
            <Text weight="bold" size="md">
              疑問を持たないもの
            </Text>
            <List listStyleType="number" withPadding size="sm">
              <List.Item>社会に貢献する</List.Item>
              <List.Item>自ら行動するものである</List.Item>
              <List.Item>目的を果たすために行動する</List.Item>
              <List.Item>コミュニケーションを取る</List.Item>
              <List.Item>仕事において時間を守る</List.Item>
              <List.Item>仕事や学校のルール・規則を守る</List.Item>
              <List.Item>人に迷惑をかけたらいけない</List.Item>
              <List.Item>現状よりも良いもの目指して（志向）</List.Item>
              <List.Item>
                どこにいようがネットを使ってコンタクトを取れる
              </List.Item>
            </List>
          </Box>
          <Box w={'64%'}>
            <Image
              src="/images/category/social-activities/chart.svg"
              alt="chart"
            />
          </Box>
        </div>
      </BoxWithTitle>

      <Space h={40} />

      <BoxWithTitle title="社会活動における抽象化" isNoBox>
        <Text size="sm">
          社会活動を規定するのは、第一に、自分の価値を示すことで集団の中における生存を確保したり、自分の環境をより良いものにして快楽(幸福度)を増幅させたいという本能である。第二に、社会の中で、その社会に合わせた行動・考え方を大衆の大多数が採用すればそれは、社会における活動の大多数の当たり前になるというような同調性(大多数)の二つである。
          (“周りに合わせる”という行動は全て“生存本能”に由来すると考えている。)
          社会活動に関する本能の中で、生存本能と幸福度を増大させたいと言う本能についてはある程度普遍のものと言える。また、同調性(大多数)に関しては、個人が大多数の意見に賛同するのは人間の本能であり、社会はその個人から成るからこそ大多数が普遍のものとなる。
        </Text>
      </BoxWithTitle>

      <Space h={40} />
    </Box>
  );
};
