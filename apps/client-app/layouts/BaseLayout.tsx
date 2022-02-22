import * as React from 'react';
import { Flex } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

const Star = dynamic<{ style: React.CSSProperties }>(
  () => {
    return import('react-starfield-animation');
  },
  { ssr: false }
);

const BaseLayout: React.FC = ({ children }) => {
  return (
    <Flex direction="column" minHeight="100vh">
      <Flex grow={1} flexWrap="wrap" background="black">
        <Flex direction="column" overflow="auto" flex={1}>
          {children}
        </Flex>
      </Flex>
      <Flex position="absolute" pointerEvents={'none'}>
        <Star
          style={{
            position: 'fixed',
            margin: 'auto',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%,-50%)',
            width: '1920px',
            height: '100vh',
          }}
        />
      </Flex>
    </Flex>
  );
};
export default BaseLayout;
