import prisma from '../libs/prismadb';
import getCurrentUser from './getcurrentuser';

const getFavoriteListings = async () => {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return [];
    }

    const favorites = await prisma.listing.findMany({
      where: {
        id: {
          in: [...(currentUser.favoriteIds || [])],
        },
      },
    });
    const safeFavotires = favorites.map((favorite) => ({
      ...favorite,
      createdAt: favorite.createdAt.toISOString(),
    }));

    return safeFavotires;
  } catch (error: any) {
    throw new Error(error);
  }
};

export default getFavoriteListings;
