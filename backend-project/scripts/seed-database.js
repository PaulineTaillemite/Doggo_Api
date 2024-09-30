const mysql = require('mysql2/promise');
const fs = require('fs').promises;

async function seedDatabase() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nom_de_votre_base',
  });

  try {
    const personsSql = await fs.readFile('./scripts/seed-persons.sql', 'utf8');
    await connection.query(personsSql);
    console.log('Persons seeded successfully');

    const animalsSql = await fs.readFile('./scripts/seed-animals.sql', 'utf8');
    await connection.query(animalsSql);
    console.log('Animals seeded successfully');

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await connection.end();
  }
}

seedDatabase();
