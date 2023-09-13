import { FunctionComponent } from 'react';
import { readdirSync } from 'fs';
import { resolve, extname } from 'path';

let scriptFiles: string[] = [];
try {
    scriptFiles = readdirSync(resolve(import.meta.dir + './../client')).filter(
        (fileName) => extname(fileName) === '.js',
    );
} catch (err) {
    console.warn(`HTML-Template: error loading js files for SSR: ${err}`);
}

const Javascript: FunctionComponent= (
) =>  (
        <>
            {scriptFiles.map((file) => (
                <script
                    key={file}
                    async
                    type="module"
                    crossOrigin="use-credentials"
                    src={`/${file}`}
                ></script>
            ))}
        </>
    );

Javascript.displayName = 'SSRJavascript';

export default Javascript;
