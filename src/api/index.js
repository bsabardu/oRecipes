import axios from 'axios';

/* Me crée une nouvelle instance d'axios 
déjà configurée avec une baseURL pour éviter d'avoir à la changer */
export default axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 3000,
});
