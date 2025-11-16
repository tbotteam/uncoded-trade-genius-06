import type { Plugin } from 'vite';

/**
 * Vite plugin to defer non-critical CSS loading
 * Transforms CSS link tags to use media="print" with onload handler
 */
export function deferCssPlugin(): Plugin {
  return {
    name: 'defer-css',
    transformIndexHtml(html) {
      // Only transform in production
      if (process.env.NODE_ENV !== 'production') {
        return html;
      }

      // Transform CSS link tags to defer loading
      return html.replace(
        /<link ([^>]*rel=["']stylesheet["'][^>]*)>/gi,
        (match, attrs) => {
          // Skip if already has media attribute or is critical CSS
          if (attrs.includes('media=') || attrs.includes('critical')) {
            return match;
          }

          // Add defer loading attributes
          return `<link ${attrs} media="print" onload="this.media='all'"><noscript><link ${attrs}></noscript>`;
        }
      );
    },
  };
}
