import './index.css';
import { App } from './App';
import { appStore } from './App/Store/AppStore';

const app = new App();
const root = document.getElementById('root');

if (!root) {
  throw new Error('The root element is undefined');
}
root.innerHTML = app.render();

appStore.$state.subscribe(() => {
  root.innerHTML = app.render();
  app.addEvents();
});
