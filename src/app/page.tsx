'use client';

import QRCardComponent from '@/components/QRCardComponent/QRCardComponent';
import { Center } from '@chakra-ui/react';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Center h='100vh' w='100vw' bgColor='hsl(212, 45%, 89%)'>
        <QRCardComponent />
      </Center>
    </main>
  );
}
