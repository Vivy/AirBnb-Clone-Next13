import { Nunito } from 'next/font/google';

import './globals.css';
import Navbar from './component/navbar/navbar';
import ClientOnly from './component/clientonly/clientonly';
import RegisterModal from './component/registermodal/registermodal';

export const metadata = {
  title: 'AirBnB clone',
  description: 'AirBnB Clone',
};

const font = Nunito({
  subsets: ['latin'],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body className={font.className}>
        <ClientOnly>
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
