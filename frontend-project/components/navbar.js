import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white font-bold">Accueil</Link>
        <div>
          <Link href="/persons" className="text-white mr-4">Personnes</Link>
          <Link href="/animals" className="text-white">Animaux</Link>
        </div>
      </div>
    </nav>
  );
}