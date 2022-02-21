import * as React from 'react';
import { Flex,useColorMode } from '@chakra-ui/react';


const BaseLayout: React.FC = ({ children }) => {
  const { colorMode } = useColorMode();
  return (
    <Flex direction="column" minHeight="full">
      <Flex
        grow={1}
        flexWrap="wrap"
        background={colorMode === 'light' ? 'white' : 'dark.800'}
      >
        <Flex direction="column" overflow="auto" flex={1}>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default BaseLayout;
