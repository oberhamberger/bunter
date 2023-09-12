/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import * as ReactDOM from 'react-dom/client';
import { Component } from './Component';

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<Component message="Sup!" />)
}
