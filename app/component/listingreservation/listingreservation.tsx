'use client';

import { Range } from 'react-date-range';
import Calendar from '../input/calendar';

interface ListingReservationType {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
}

const ListingReservation: React.FC<ListingReservationType> = ({
  price,
  dateRange,
  disabledDates,
  onChangeDate,
  onSubmit,
  totalPrice,
  disabled,
}) => {
  return (
    <div className=' bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden'>
      <div className='flex flex-row items-center gap-1 p-4'>
        <div className=' text-2xl font-semibold'>$ {price}</div>
        <div className='font-light text-neutral-600'> night </div>
      </div>
      <hr />
      <Calendar
        value={dateRange}
        disableDates={disabledDates}
        onChange={(value) => onChangeDate(value.selection)}
      />
    </div>
  );
};

export default ListingReservation;
