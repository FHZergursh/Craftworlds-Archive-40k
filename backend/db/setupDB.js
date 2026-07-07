import dotenv from "dotenv";
import { neon } from '@neondatabase/serverless';

dotenv.config();

export const sql = neon(process.env.DATABASE_URL);

export async function initSimpleProfileTable() { // contains less details, will link one to one with a more detailed table in future
  try {

    // Create a new table
    await sql`
      CREATE TABLE IF NOT EXISTS simple_profile (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        movement VARCHAR(255),
        toughness INT NOT NULL,
        save INT NOT NULL,
        wounds INT NOT NULL,
        leadership INT NOT NULL,
        OC INT,
        cost INT
      );
    `;

    
    console.log('Simple Profile DB initialised');

  } catch (err) {
    console.error('Connection failed.', err);
  }
}


//Gonna need a more detailed profile here at some point, but simple_profile is priority to start with.


export async function initBlogTable() {
  try {
    
    await sql`
    CREATE TABLE IF NOT EXISTS blogs (
      blogId SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      tags VARCHAR(500),
      imageUrl VARCHAR(1000),
      content TEXT NOT NULL
    )`
    console.log("Blog DB initalised");


  } catch (error) {
    console.log("error, ", error)
  }

}