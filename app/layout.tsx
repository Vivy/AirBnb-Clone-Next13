import { Nunito } from 'next/font/google';

import './globals.css';
import Navbar from './component/navbar/navbar';
import ClientOnly from './component/clientonly/clientonly';
import RegisterModal from './component/registermodal/registermodal';
import ToasterProvider from './component/provider/toasterprovider';
import LoginModal from './component/loginmodal/loginmodal';
import getCurrentUser from './actions/getcurrentuser';

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
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
