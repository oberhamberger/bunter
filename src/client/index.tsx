/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import { hydrateRoot } from 'react-dom/client';
import App from './App';

const rootNode = document.getElementById('root');
if (rootNode) {
    hydrateRoot(rootNode, <App/>);
}
