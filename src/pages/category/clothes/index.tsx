import { Box, Center, Container, Image, Text } from '@mantine/core';
import type { NextPage } from 'next';

import { AppLayoutWithHeader } from '@/components/layouts/AppLayoutWithHeader';

const Clothes: NextPage = () => {
  return (
    <AppLayoutWithHeader>
      <Center className="relative mx-2 h-[40vh]">
        <Box className="absolute bottom-0">
          <Image
            src="/images/category/clothes/top.svg"
            alt=""
            w={'100vw'}
            className="border-b opacity-80"
          />
        </Box>
        <Text weight={800} size="lg" className="z-10 font-sans">
          衣類において
          <br />
          それって当たり前ですか？
        </Text>
      </Center>

      <Container mx={{ md: 'auto', xs: 0 }}></Container>
    </AppLayoutWithHeader>
  );
};
export default Clothes;
