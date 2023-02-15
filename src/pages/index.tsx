import type { NextPage } from 'next';

import { TopPageNonHeaderLayout } from '@/components/layouts/AppLayoutNonHeader';
import { Root } from '@/components/pages/root';

const Index: NextPage = () => {
  return (
    <TopPageNonHeaderLayout>
      <Root />
    </TopPageNonHeaderLayout>
  );
};

export default Index;
