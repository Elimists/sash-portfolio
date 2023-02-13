import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {

    if (req.method !== 'GET'){
        return res.status(405).json({'error': true, 'message': 'Method is not allowed.'})
    }

    const slug = req.body.slug

    const dataDirectory = path.join(process.cwd(), 'data');

    const fileContents = await fs.readFile(dataDirectory + '/projects/' + slug + '.md', 'utf-8');

    if (fileContents.length < 0){
        return res.status(404).json({'error': true, 'message': 'Unable to get content from file', 'contents': 'none'})
    }
   
    return res.status(200).json({'error': false, 'status': 'File read successfully', 'contents': fileContents})
    
  }