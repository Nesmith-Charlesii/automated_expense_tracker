'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const Homepage: React.FC = () => {
  const router = useRouter();

  return (
    <div>
      <button type='button' onClick={() => router.push('/link_account')}>
        Watch your money!
      </button>
    </div>
  )
}

export default Homepage;