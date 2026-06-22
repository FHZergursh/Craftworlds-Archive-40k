import 'dotenv/config';
import { neon } from '@neondatabase/serverless';

export const sql = neon(process.env.DATABASE_URL);

export async function setupDB() {
  try {
    console.log('Connection established');

    //overview for a table, not full unit detail 
    await sql`
      CREATE TABLE IF NOT EXISTS unitTable ( 
        id SERIAL PRIMARY KEY,
        name VARCHAR(500) NOT NULL,
        category VARCHAR(500) NOT NULL,
        pointCost INT NOT NULL,
        legends BOOLEAN 
      );
    `;


    console.log('Finished initialising database.');
  } catch (err) {
    console.error('Connection failed.', err);
  }
}


