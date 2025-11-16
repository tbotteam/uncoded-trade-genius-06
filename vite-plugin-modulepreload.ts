import type { Plugin } from 'vite';

/**
 * Vite plugin to add modulepreload hints for critical chunks
 * Improves loading performance by preloading vendor chunks
 */
export function modulePreloadPlugin(): Plugin {
  return {
    name: 'modulepreload-hints',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        // Only in production builds
        if (!ctx.bundle) {
          return html;
        }

        const criticalChunks = [
          'react-vendor',
          'ui-vendor',
        ];

        // Find the chunk files
        const preloadLinks: string[] = [];
        Object.values(ctx.bundle).forEach((chunk: any) => {
          if (chunk.type === 'chunk') {
            const fileName = chunk.fileName;
            const chunkName = chunk.name;

            // Check if this is a critical vendor chunk
            if (criticalChunks.some(critical => fileName.includes(critical))) {
              preloadLinks.push(
                `<link rel="modulepreload" href="/${fileName}" as="script" crossorigin>`
              );
            }
          }
        });

        // Inject modulepreload links after the preconnect links
        if (preloadLinks.length > 0) {
          const preloadHTML = '\n      ' + preloadLinks.join('\n      ');
          html = html.replace(
            /(<link rel="dns-prefetch"[^>]*>)/,
            `$1${preloadHTML}`
          );
        }

        return html;
      },
    },
  };
}
