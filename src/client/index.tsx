/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import { hydrateRoot } from 'react-dom/client';
import { Component } from './Component';

const rootNode = document.getElementById('root');
if (rootNode) {
    hydrateRoot(rootNode, <Component message="Sup!" />);
}
