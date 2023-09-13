import { FunctionComponent } from 'react';
import { readdirSync } from 'fs';
import { resolve, extname } from 'path';

let scriptFiles: string[] = [];

const Javascript: FunctionComponent = (
) => {
    try {
        scriptFiles = readdirSync(resolve(import.meta.dir + '../../../../../dist')).filter(
            (fileName) => extname(fileName) === '.js',
        );
    } catch (err) {
        console.warn(`HTML-Template: error loading js files for SSR: ${err}`);
    }
    return (
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
}
Javascript.displayName = 'SSRJavascript';

export default Javascript;
