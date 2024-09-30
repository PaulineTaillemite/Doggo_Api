import Link from 'next/link';

export default function Home() {
  return (
    <main className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-4">Bienvenue</h1>
      <p className="mb-6">Utilisez la navigation pour voir les personnes et les animaux.</p>
      
      <div className="flex space-x-4">
        <Link href="/persons" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Liste des Propriétaires
        </Link>
        <Link href="/animals" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Liste des Animaux
        </Link>
      </div>
    </main>
  );
}