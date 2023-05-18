/* eslint-disable import/no-extraneous-dependencies */
import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

const skipLink = document.querySelector('.skip_content');
const mainContent = document.querySelector('#mainContent');
skipLink.addEventListener('click', (event) => {
  event.preventDefault();
  skipLink.blur();
  mainContent.scrollIntoView({ behavior: 'smooth' });
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
