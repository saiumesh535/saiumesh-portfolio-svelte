import { readFile } from 'fs/promises';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
    const doc = await readFile(`./package.json`, 'utf8')  
    return {
      body: doc
    }
  }