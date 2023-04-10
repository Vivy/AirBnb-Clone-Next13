import Container from '../component/container/container';
import Heading from '../component/heading/heading';
import ListingCard from '../component/listingcard/listingcard';
import { SafeListing, SafeUser } from '../types';

interface FavoritesClientType {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
}

const FavoritesClient: React.FC<FavoritesClientType> = ({
  listings,
  currentUser,
}) => {
  return (
    <Container>
      <Heading
        subtitle='List of places you have favorited!'
        title='Favorites'
      />
      <div
        className='
            mt-10
            grid
            grid-cols-1
            sm:grid-cols-2
            ms:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
    '
      >
        {listings.map((listing) => (
          <ListingCard
            currentUser={currentUser}
            key={listing.id}
            data={listing}
          />
        ))}
      </div>
    </Container>
  );
};

export default FavoritesClient;
