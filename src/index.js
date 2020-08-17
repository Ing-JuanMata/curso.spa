import router from './routes';
import getHash from './utils/getHash';

window.addEventListener('load', router);

window.addEventListener('hashchange', router);
