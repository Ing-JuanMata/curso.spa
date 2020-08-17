import Header from '../templates/header';
import home from '../pages/home';
import character from '../pages/character';
import error404 from '../pages/error404';

const routes = {
  '/': home,
  ':id': character,
  '/contact': 'contact',
};

const router = async () => {
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');

  header.innerHTML = await Header();
};

export default router;
