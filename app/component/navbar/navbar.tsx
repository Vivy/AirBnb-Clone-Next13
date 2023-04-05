'use client';

import Container from '../container/container';
import Logo from '../logo/logo';
import Search from '../search/search';
import UserMenu from '../usermenu/usermenu';

const Navbar = () => {
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
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
