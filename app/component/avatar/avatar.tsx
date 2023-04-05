'use client';

import Image from 'next/image';

interface AvatarStyle {
  src: string | null | undefined;
}

const Avatar: React.FC<AvatarStyle> = ({ src }) => {
  return (
    <Image
      className='rounded-full'
      height='30'
      width='30'
      alt='Avatar'
      src={src || '/images/placeholder.jpg'}
    />
  );
};

export default Avatar;
