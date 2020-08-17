import router from './routes';
import getHash from './utils/getHash';

window.addEventListener('load', router);

console.log(getHash());
