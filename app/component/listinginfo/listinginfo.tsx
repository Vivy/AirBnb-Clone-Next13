'use client';

import { SafeUser } from '@/app/types';
import { IconType } from 'react-icons';

interface ListingInfoType {
  user: SafeUser;
  description: string;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  category:
    | {
        label: string;
        icon: IconType;
        description: string;
      }
    | undefined;
  locationValue: string;
}

const ListingInfo: React.FC<ListingInfoType> = ({
  category,
  description,
  user,
}) => {
  return <div>ListingInfo</div>;
};

export default ListingInfo;
