import ClientOnly from './component/clientonly/clientonly';
import Container from './component/container/container';
import EmptyState from './component/emptystate/emptystate';

const Home = () => {
  const isEmpty = true;
  if (isEmpty) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <Container>
        <div
          className='
          pt-24
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        '
        >
          <div>My future listings</div>
        </div>
      </Container>
    </ClientOnly>
  );
};

export default Home;
