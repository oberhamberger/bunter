import { FunctionComponent } from 'react';
import App from '../../client/App';
import Javascript from './components/Javascript.html';

const Index: FunctionComponent = () => {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <title>Bunter</title>
            </head>
            <body>
                <div id="root">
                    <App />
                </div>
                <Javascript />
            </body>
        </html>
    );
};

Index.displayName = 'SSRIndex';

export default Index;
