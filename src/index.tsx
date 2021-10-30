import './index.css';
import { App } from './App';

const app = new App();
const root = document.getElementById('root');

if (!root) {
  throw new Error('The root element is undefined');
}
root.innerHTML = app.render();
