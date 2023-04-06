'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import CategoryBox from '../categorybox/categorybox';
import Container from '../container/container';
import { categories } from './categorieslist';

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();

  const isMainPage = pathname === '/';
  if (!isMainPage) {
    return null;
  }
  return (
    <Container>
      <div
        className='
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
    '
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
