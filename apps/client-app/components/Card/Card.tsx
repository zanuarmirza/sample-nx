import { Box, ChakraComponent, useStyleConfig } from '@chakra-ui/react';
import React from 'react';

const Card: ChakraComponent<'div'> = (props) => {
  const { variant, ...rest } = props;
  const styles = useStyleConfig('Card', { variant });
  return <Box __css={styles} boxShadow="md" {...rest} />;
};

export default Card;
