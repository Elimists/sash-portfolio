import path from 'path';
import { promises as fs } from 'fs';

/**
 * API - Returns a json payload containing data for a single project.
 * @param {slug}
 * @return {json}
 * 
 */
export default async function handler(req, res) {

    if (req.method !== 'POST'){
        return res.status(405).json({'error': true, 'message': 'Method is not allowed.'})
    }

    const slug = req.body.slug

    const dataDirectory = path.join(process.cwd(), 'data');

    try{
        const fileContents = await fs.readFile(dataDirectory + '/projects/' + slug + '.md', 'utf-8');
        return res.status(200).json({'error': false, 'status': 'File read successfully', 'contents': fileContents})
    }catch(error){
        if (error.code === 'ENOENT') {
            return res.status(404).json({'error': true, 'message': 'Unable to get content from file', 'contents': 'There is no project named ' + slug})
        }
    }
  }