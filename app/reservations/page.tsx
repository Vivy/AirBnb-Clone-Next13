import EmptyState from '../component/emptystate/emptystate';
import ClientOnly from '../component/clientonly/clientonly';

import getCurrentUser from '../actions/getcurrentuser';
import getReservations from '../actions/getreservations';
import ReservationsClient from './reservationsclient';

const ReservationsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title='Unauthorised' subtitle='Please login' />
      </ClientOnly>
    );
  }

  const reservations = await getReservations({
    authorId: currentUser.id,
  });

  if (reservations.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title='No reservations found'
          subtitle='Looks like you have no resservations on your propertys'
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ReservationsClient
        reservations={reservations}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
};

export default ReservationsPage;
