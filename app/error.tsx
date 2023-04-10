'use client';

import { useEffect } from 'react';
import EmptyState from './component/emptystate/emptystate';

interface ErrorStateType {
  error: Error;
}

const ErrorState: React.FC<ErrorStateType> = ({ error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <EmptyState title='Huh o.0' subtitle='Something went wrong!' />;
};

export default ErrorState;
