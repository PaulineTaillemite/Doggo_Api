'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Animals() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/animals')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => setAnimals(data))
      .catch(error => console.error('Error fetching animals:', error));
  }, []);

  return (
    <main className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-4">Liste des Animaux</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {animals.map(animal => (
          <Link href={`/animals/${animal.id}`} key={animal.id} className="block p-4 border rounded hover:bg-gray-100">
            <h2 className="text-xl font-semibold">{animal.name}</h2>
            <p>{animal.species}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}