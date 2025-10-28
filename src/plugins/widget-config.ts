import { Plugin } from 'vite';
import fs from 'fs';
import path from 'path';

export function widgetConfigPlugin(): Plugin {
    return {
        name: 'widget-config',
        writeBundle(options, bundle) {
            const outDir = options.dir || 'dist';

            // Find the widget CSS file (the largest CSS file, which contains Tailwind styles)
            const cssFiles = Object.keys(bundle).filter(file =>
                file.startsWith('assets/') && file.endsWith('.css') &&
                bundle[file].type === 'asset'
            );

            // Get the largest CSS file (which contains Tailwind styles)
            const cssFile = cssFiles.reduce((largest, current) => {
                const currentAsset = bundle[current];
                const largestAsset = bundle[largest];
                const currentSize = (currentAsset.type === 'asset' && currentAsset.source) ? currentAsset.source.length : 0;
                const largestSize = (largestAsset.type === 'asset' && largestAsset.source) ? largestAsset.source.length : 0;
                return currentSize > largestSize ? current : largest;
            });

            if (cssFile) {
                // Update embed.js with the correct CSS file name
                const embedPath = path.join(outDir, 'embed.js');
                if (fs.existsSync(embedPath)) {
                    let embedContent = fs.readFileSync(embedPath, 'utf-8');

                    // Replace the CSS file name in embed.js
                    embedContent = embedContent.replace(
                        /link\.href = WIDGET_URL \+ '\/' \+ cssFile;/,
                        `link.href = WIDGET_URL + '/${cssFile}';`
                    );

                    // Also update the fallback
                    embedContent = embedContent.replace(
                        /link\.href = WIDGET_URL \+ '\/assets\/index-Hy0ttfAx\.css';/,
                        `link.href = WIDGET_URL + '/${cssFile}';`
                    );

                    fs.writeFileSync(embedPath, embedContent);
                }

                console.log(`✅ Embed.js updated with CSS: ${cssFile}`);
            }
        }
    };
}
