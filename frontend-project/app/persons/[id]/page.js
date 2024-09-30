'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function OwnerDetail() {
  const [owner, setOwner] = useState(null);
  const [error, setError] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/persons/${params.id}/with-animals`)
      .then(res => {
        if (!res.ok) throw new Error('Propriétaire non trouvé');
        return res.json();
      })
      .then(setOwner)
      .catch(setError);
  }, [params.id]);

  if (error) return <div>Erreur: {error.message}</div>;
  if (!owner) return <div>Chargement...</div>;

  return (
    <main className="container mx-auto mt-8 p-4">
      <Link href="/persons" className="text-blue-500 hover:underline mb-4 block">&larr; Retour à la liste</Link>
      <h1 className="text-3xl font-bold mb-4">{owner.firstName} {owner.lastName}</h1>
      <p>Email: {owner.email}</p>
      <p>Téléphone: {owner.phoneNumber}</p>
      <h2 className="text-2xl font-bold mt-4 mb-2">Animaux</h2>
      {owner.animals && owner.animals.length > 0 ? (
        <ul className="list-disc pl-5">
          {owner.animals.map((animal) => (
            <li key={animal.id}>{animal.name} - {animal.species}</li>
          ))}
        </ul>
      ) : (
        <p>Ce propriétaire a pas animaux.</p>
      )}
    </main>
  );
}