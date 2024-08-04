import { fileURLToPath } from 'url';
import path from 'path';

// Obtém o caminho do arquivo atual e o diretório do arquivo
export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);
