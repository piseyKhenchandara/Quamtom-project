import '../index.css';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Quantom - Luxury Fashion',
  description: 'A modern luxury fashion e-commerce store',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="relative flex flex-col min-h-screen items-center">
          <Header />
          <div className="flex flex-col justify-center items-center w-full relative flex-grow">
            {children}
          </div>
          <Footer className="w-full" />
        </div>
      </body>
    </html>
  );
}
