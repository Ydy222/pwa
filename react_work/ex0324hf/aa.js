import {fileURLToPath} from 'url';
import {dirname} from 'path';

console.log(fileURLToPath);
const __filename = fileURLToPath(import.meta.url);
console.log(__filename)