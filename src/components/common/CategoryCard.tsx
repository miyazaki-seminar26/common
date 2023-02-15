import { Anchor, Card, Image, SimpleGrid, Text } from '@mantine/core';
import type { FC, ReactNode } from 'react';

type Props = {
  title: string;
  description: ReactNode;
  membersImage: {
    src: string;
    alt: string;
  }[];
  href: string;
};

export const CategoryCard: FC<Props> = ({
  title,
  description,
  membersImage,
  href,
}) => {
  return (
    <Card radius="md" withBorder>
      <Text weight="bold">{title}</Text>
      <Text color="gray" size="sm">
        {description}
      </Text>

      <Card.Section inheritPadding mt="sm" pb="md">
        <SimpleGrid cols={4}>
          {membersImage?.map((item) => (
            <Image key={item.src} src={item.src} alt={item.alt} />
          ))}
        </SimpleGrid>
      </Card.Section>
      <Anchor href={href} size="sm">
        詳しく見る
      </Anchor>
    </Card>
  );
};
