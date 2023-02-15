import { Badge, Box, Space } from '@mantine/core';
import type { FC } from 'react';

type Props = {
  title: string;
  children: React.ReactNode;
  isNoBox?: boolean;
};

export const BoxWithTitle: FC<Props> = ({ title, children, isNoBox }) => {
  return (
    <Box mt={12}>
      <Badge
        size="xl"
        color="blue.4"
        variant="filled"
        radius={1}
        sx={{
          fontWeight: 'bold',
          fontSize: '20px',
        }}
      >
        {title}
      </Badge>
      <Space h="xl" />
      {isNoBox ? (
        children
      ) : (
        <Box my={4} p={8} bg="white" className="break-words">
          {children}
        </Box>
      )}
    </Box>
  );
};
