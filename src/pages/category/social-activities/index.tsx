import { Box, Center, Container, Image, Text } from '@mantine/core';
import type { NextPage } from 'next';

import { AppLayoutWithHeader } from '@/components/layouts/AppLayoutWithHeader';
import { SocialActivities } from '@/components/pages/category/social-activities';

const SocialActivitiesPage: NextPage = () => {
  return (
    <AppLayoutWithHeader>
      <Center className="relative mx-2 h-[40vh]">
        <Box className="absolute bottom-0">
          <Image
            src="/images/category/social-activities/top.svg"
            alt=""
            w={'100vw'}
            className="border-b opacity-80"
          />
        </Box>
        <Text weight={800} size="lg" className="z-10 font-sans">
          社会活動において
          <br />
          それって当たり前ですか？
        </Text>
      </Center>

      <Container mx={{ md: 'auto', xs: 0 }}>
        <SocialActivities />
      </Container>
    </AppLayoutWithHeader>
  );
};
export default SocialActivitiesPage;
