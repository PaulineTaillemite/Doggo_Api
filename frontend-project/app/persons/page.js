'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Persons() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/persons')
      .then(res => res.json())
      .then(data => setPersons(data));
  }, []);

  return (
    <main className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-4">Liste des Personnes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {persons.map(person => (
          <Link href={`/persons/${person.id}`} key={person.id} className="block p-4 border rounded hover:bg-gray-100">
            <h2 className="text-xl font-semibold">{person.firstName} {person.lastName}</h2>
            <p>{person.email}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}