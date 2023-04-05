'use client';

import Container from '../container/container';
import Logo from '../logo/logo';
import Search from '../search/search';
import UserMenu from '../usermenu/usermenu';
import { User } from '@prisma/client';

interface NavbarType {
  currentUser?: User | null;
}

const Navbar: React.FC<NavbarType> = ({ currentUser }) => {
  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div
            className='
              flex 
              flex-row 
              items-center 
              justify-between
              gap-3
              md:gap-0'
          >
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
