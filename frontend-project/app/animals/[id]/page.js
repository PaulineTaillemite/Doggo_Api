'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function AnimalDetail() {
  const [animal, setAnimal] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/animals/${params.id}`)
      .then(res => res.json())
      .then(data => setAnimal(data));
  }, [params.id]);

  if (!animal) return <div>Chargement...</div>;

  return (
    <main className="container mx-auto mt-8 p-4">
            <Link href="/animals" className="text-blue-500 hover:underline mb-4 block">&larr; Retour à la liste</Link>

      <h1 className="text-3xl font-bold mb-4">{animal.name}</h1>
      <p>Espèce: {animal.species}</p>
      <p>Race: {animal.breed}</p>
      <p>Couleur: {animal.color}</p>
      <p>Poids: {animal.weight} kg</p>
      <h2 className="text-2xl font-bold mt-4 mb-2">Propriétaire</h2>
      {animal.owner ? (
        <p>{animal.owner.firstName} {animal.owner.lastName}</p>
      ) : (
        <p>Cet animal a pas de propriétaire.</p>
      )}
    </main>
  );
}