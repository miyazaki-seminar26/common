import '../styles/global.css';

import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  // const { ref, x, y } = useMouse();

  // const positionElement = () => {
  //   const cursorSmall = `translate3d(${x}px, ${y}px, 0)`;
  //   const cursorBig = `translate3d(${x}px, ${y}px, 0)`;
  //   return {
  //     cursorSmall,
  //     cursorBig,
  //   };
  // };

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'light',
        fontFamily: 'Inria Sans',
        fontSizes: {
          xs: 14,
          sm: 16,
          md: 20,
          lg: 32,
          xl: 40,
        },
      }}
    >
      <Component
        {...pageProps}
        // ref={ref}
      />
      {/* <small
        className={`h-2 w-2 rounded-full border border-cyan-400  ${
          positionElement().cursorSmall
        }`}
      >
        {x}
      </small>
      <big
        className={`mb-4 h-8 w-8 rounded-full border-2 border-gray-200`}
      ></big> */}
    </MantineProvider>
  );
};

export default MyApp;
