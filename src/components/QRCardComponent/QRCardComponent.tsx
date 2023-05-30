import Image from 'next/image';
import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const QRCardComponent = () => {
  return (
    <Flex
      flexDir='column'
      justifyContent='space-between'
      bgColor='hsl(0, 0%, 100%)'
      borderRadius='20px'
      width='300px'
      height='470px'
      position='relative'
      p='16px'
    >
      <Image
        alt='qr code'
        height='576'
        width='576'
        sizes='(min-width: 60em) 24vw,(min-width: 28em) 45vw,100vw'
        src={'/image-qr-code.png'}
        style={{
          borderRadius: '10px',
          objectFit: 'contain',
          height: 'auto',
        }}
      />
      <Box lineHeight='initial' padding='0px 14px 14px 14px' textAlign='center'>
        <Text fontSize='21px' fontWeight={700} pb={2}>
          Improve your front-end skills by building projects
        </Text>
        <Text textColor='#757575' fontSize='15px' fontWeight={400} pt={'8px'}>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </Text>
      </Box>
    </Flex>
  );
};

export default QRCardComponent;
