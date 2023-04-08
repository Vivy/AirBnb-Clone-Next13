import getCurrentUser from '@/app/actions/getcurrentuser';
import getListingById from '../../actions/getlistingbyid';
import ClientOnly from '@/app/component/clientonly/clientonly';
import EmptyState from '@/app/component/emptystate/emptystate';
import ListingClient from './listingclient';
import getReservations from '@/app/actions/getreservations';

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <ListingClient
        listing={listing}
        currentUser={currentUser}
        reservations={reservations}
      />
    </ClientOnly>
  );
};

export default ListingPage;
