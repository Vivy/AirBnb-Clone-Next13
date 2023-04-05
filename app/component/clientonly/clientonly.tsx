'use client';

import { useEffect, useState } from 'react';

interface ClientOnlyType {
  children: React.ReactNode;
}
const ClientOnly: React.FC<ClientOnlyType> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }
  return <>{children}</>;
};

export default ClientOnly;
