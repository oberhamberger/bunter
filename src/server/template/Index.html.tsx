import { FunctionComponent } from 'react';
import { Component } from '../../client/Component';
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
                <link rel="canonical" href="https://cohbrgr.com/" />

                <title>Bunter</title>
            </head>
            <body>
                <div id="root">
                    <Component message='Sup!'/> 
                </div>

                
                <Javascript/>
                
            </body>
        </html>
    );
};

Index.displayName = 'SSRIndex';

export default Index;
