'use client';

interface MenuItemType {
  onClick: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemType> = ({ label, onClick }) => {
  return (
    <div
      onClick={onClick}
      className='
        px-4 
        py-3 
        hover:bg-neutral-100 
        transition
        font-semibold'
    >
      {label}
    </div>
  );
};

export default MenuItem;
