// eslint-disable-next-line import/no-extraneous-dependencies
import { motion, useScroll } from 'framer-motion';
import type { NextPage } from 'next';
import { useRef } from 'react';

import { TopPageNonHeaderLayout } from '@/components/layouts/AppLayoutNonHeader';
import { Root } from '@/components/pages/root';

const Index: NextPage = () => {
  const { scrollYProgress } = useScroll();
  const carouselRef = useRef(null);

  return (
    <TopPageNonHeaderLayout>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div ref={carouselRef}>
        <Root />
      </div>
    </TopPageNonHeaderLayout>
  );
};

export default Index;
