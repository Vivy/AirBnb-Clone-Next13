import { Nunito } from 'next/font/google';

import './globals.css';
import Navbar from './component/navbar/navbar';
import ClientOnly from './component/clientonly/clientonly';
import RegisterModal from './component/registermodal/registermodal';
import LoginModal from './component/loginmodal/loginmodal';
import RentModal from './component/rentmodal/rentmodal';
import ToasterProvider from './component/provider/toasterprovider';
import getCurrentUser from './actions/getcurrentuser';
import SearchModal from './component/searchmodal/searchmodal';

export const metadata = {
  title: 'AirBnB clone',
  description: 'AirBnB Clone',
};

const font = Nunito({
  subsets: ['latin'],
});

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser();

  return (
    <html lang='en'>
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <SearchModal />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className='pb-20 pt-28'>{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
