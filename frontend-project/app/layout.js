import './globals.css';
import Navbar from '/components/navbar';

export const metadata = {
  title: 'Gestion Animaux',
  description: 'Application de gestion des animaux et de leurs propriétaires',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}