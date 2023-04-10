import EmptyState from '../component/emptystate/emptystate';
import ClientOnly from '../component/clientonly/clientonly';

import getCurrentUser from '../actions/getcurrentuser';
import getFavoriteListings from '../actions/getfavoritelistings';
import FavoritesClient from './favoritesclient';

const ListingPage = async () => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title='No favorites found'
          subtitle='Looks like you have no favorite listing'
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <FavoritesClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default ListingPage;
