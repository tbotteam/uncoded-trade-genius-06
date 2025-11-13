import { createClient, Asset } from 'contentful';
import { CONTENTFUL_SPACEID, CONTENTFUL_ACCESS_TOKEN } from '@/config';

export const contentfulClient = createClient({
  space: CONTENTFUL_SPACEID || '',
  accessToken: CONTENTFUL_ACCESS_TOKEN || '',
});

// Type definitions for blog post based on your Contentful structure
export interface BlogPost {
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
  fields: {
    title: string;
    body: any; // Rich text document from Contentful
    image?: Asset;
    recommendedPosts?: any[];
  };
}

// Helper function to generate slug from title
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

// Helper function to extract plain text from rich text body
export const extractExcerpt = (body: any, maxLength: number = 150): string => {
  if (!body || !body.content) return '';
  
  let text = '';
  const traverse = (node: any) => {
    if (node.nodeType === 'text') {
      text += node.value + ' ';
    }
    if (node.content) {
      node.content.forEach(traverse);
    }
  };
  
  traverse(body);
  
  const trimmed = text.trim();
  return trimmed.length > maxLength 
    ? trimmed.substring(0, maxLength) + '...' 
    : trimmed;
};

