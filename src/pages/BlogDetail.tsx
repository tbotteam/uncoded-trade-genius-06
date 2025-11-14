import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useContentfulBlog, useRecommendedPosts } from '@/hooks/useContentfulBlogs';
import { generateSlug, extractExcerpt } from '@/lib/contentful';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Calendar, ArrowLeft, Clock, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

// Rich text rendering options
const richTextOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node: any, children: any) => (
      <p className='mb-4'>{children}</p>
    ),
    [BLOCKS.HEADING_1]: (_node: any, children: any) => (
      <h1 className='text-4xl font-bold mb-6 mt-8'>{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (_node: any, children: any) => (
      <h2 className='text-3xl font-bold mb-4 mt-6'>{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (_node: any, children: any) => (
      <h3 className='text-2xl font-bold mb-3 mt-5'>{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (_node: any, children: any) => (
      <h4 className='text-xl font-bold mb-2 mt-4'>{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (_node: any, children: any) => (
      <h5 className='text-lg font-bold mb-2 mt-3'>{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (_node: any, children: any) => (
      <h6 className='text-base font-bold mb-2 mt-3'>{children}</h6>
    ),
    [BLOCKS.UL_LIST]: (_node: any, children: any) => (
      <ul className='list-disc list-inside mb-4 space-y-2'>{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (_node: any, children: any) => (
      <ol className='list-decimal list-inside mb-4 space-y-2'>{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (_node: any, children: any) => (
      <li className='ml-4'>{children}</li>
    ),
    [BLOCKS.QUOTE]: (_node: any, children: any) => (
      <blockquote className='border-l-4 border-primary pl-4 italic my-4'>{children}</blockquote>
    ),
    [BLOCKS.HR]: () => <hr className='my-8 border-primary/20' />,
    [INLINES.HYPERLINK]: (node: any, children: any) => (
      <a 
        href={node.data.uri} 
        target='_blank' 
        rel='noopener noreferrer'
        className='text-primary hover:text-primary/80 underline'
      >
        {children}
      </a>
    ),
  },
};

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: blog, isLoading, error } = useContentfulBlog(slug || '');
  
  const recommendedPostIds = blog?.fields.recommendedPosts?.map(post => post.sys.id) || [];
  const { data: recommendedPosts } = useRecommendedPosts(recommendedPostIds);

  if (!slug) {
    return <Navigate to='/blogs' replace />;
  }

  // Calculate reading time
  const calculateReadingTime = (body: any): number => {
    if (!body || !body.content) return 1;
    
    let wordCount = 0;
    const traverse = (node: any) => {
      if (node.nodeType === 'text') {
        wordCount += node.value.split(/\s+/).filter(Boolean).length;
      }
      if (node.content) {
        node.content.forEach(traverse);
      }
    };
    
    traverse(body);
    return Math.max(1, Math.ceil(wordCount / 200));
  };
  
  // Helper to get image URL safely
  const getImageUrl = (url: string | undefined): string => {
    if (!url) return "https://uncoded.ch/og-image.png";
    return url.startsWith('//') ? `https:${url}` : url;
  };
  
  // SEO data
  const pageTitle = blog ? `${blog.fields.title} - unCoded Blog` : "Blog Post - unCoded";
  const pageDescription = blog ? extractExcerpt(blog.fields.body, 160) : "Read the latest insights from unCoded";
  const pageUrl = `https://uncoded.ch/blogs/${slug}`;
  const imageUrl = getImageUrl(blog?.fields.image?.fields.file.url as string | undefined);
  const readingTime = blog ? calculateReadingTime(blog.fields.body) : 1;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={imageUrl} />
        {blog && <meta property="article:published_time" content={blog.sys.createdAt} />}
        {blog && <meta property="article:modified_time" content={blog.sys.updatedAt} />}
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={imageUrl} />
        
        {/* JSON-LD Structured Data */}
        {blog && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": blog.fields.title,
              "description": pageDescription,
              "image": imageUrl,
              "datePublished": blog.sys.createdAt,
              "dateModified": blog.sys.updatedAt,
              "author": {
                "@type": "Organization",
                "name": "unCoded Team"
              },
              "publisher": {
                "@type": "Organization",
                "name": "unCoded",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://uncoded.ch/logos/logo-complete.png"
                }
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": pageUrl
              },
              "timeRequired": `PT${readingTime}M`
            })}
          </script>
        )}
      </Helmet>
      
      <div className='min-h-screen bg-gradient-to-b from-background via-background/95 to-primary/5'>
        <Navbar />
      
      <article className='pt-32 pb-16 px-4'>
        <div className='container mx-auto max-w-4xl'>
          {/* Back Button */}
          <Link to='/blogs' className='inline-block mb-8'>
            <Button variant='ghost' className='gap-2 hover:gap-3 transition-all'>
              <ArrowLeft size={16} />
              Back to Blogs
            </Button>
          </Link>

          {/* Loading State */}
          {isLoading && (
            <div className='space-y-8'>
              <Skeleton className='h-12 w-3/4' />
              <div className='flex gap-4'>
                <Skeleton className='h-6 w-24' />
                <Skeleton className='h-6 w-32' />
              </div>
              <Skeleton className='h-96 w-full rounded-xl' />
              <div className='space-y-4'>
                <Skeleton className='h-4 w-full' />
                <Skeleton className='h-4 w-full' />
                <Skeleton className='h-4 w-3/4' />
              </div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className='text-center py-16'>
              <div className='bg-destructive/10 border border-destructive/20 rounded-lg p-8 max-w-md mx-auto'>
                <h3 className='text-xl font-semibold mb-2 text-destructive'>
                  Blog post not found
                </h3>
                <p className='text-muted-foreground mb-4'>
                  {error.message || 'The blog post you are looking for does not exist.'}
                </p>
                <Link to='/blogs'>
                  <Button variant='outline'>
                    <ArrowLeft size={16} className='mr-2' />
                    Back to Blogs
                  </Button>
                </Link>
              </div>
            </div>
          )}

          {/* Blog Content */}
          {!isLoading && !error && blog && (
            <div className='space-y-8'>
              {/* Header */}
              <header className='space-y-4'>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 text-transparent bg-clip-text'>
                  {blog.fields.title}
                </h1>

                <div className='flex items-center gap-6 text-sm text-muted-foreground pt-4 border-t border-primary/10'>
                  <div className='flex items-center gap-2'>
                    <Calendar size={16} />
                    <span>
                      {format(new Date(blog.sys.createdAt), 'MMMM dd, yyyy')}
                    </span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Clock size={16} />
                    <span>
                      {calculateReadingTime(blog.fields.body)} min read
                    </span>
                  </div>
                </div>
              </header>

              {/* Featured Image */}
              {blog.fields.image?.fields.file.url && (
                <div className='relative w-full h-[400px] rounded-xl overflow-hidden border border-primary/10'>
                  <img
                    src={imageUrl}
                    alt={(blog.fields.image.fields.title as string) || blog.fields.title}
                    loading="eager"
                    className='w-full h-full object-cover'
                  />
                </div>
              )}

              {/* Content */}
              {blog.fields.body && (
                <div className='prose prose-lg max-w-none text-foreground
                  [&_p]:text-muted-foreground
                  [&_a]:text-primary [&_a]:no-underline hover:[&_a]:text-primary/80
                  [&_strong]:text-foreground [&_strong]:font-bold
                  [&_code]:text-primary [&_code]:bg-primary/10 [&_code]:px-1 [&_code]:rounded
                  [&_pre]:bg-primary/5 [&_pre]:border [&_pre]:border-primary/10 [&_pre]:p-4 [&_pre]:rounded-lg
                  [&_blockquote]:border-l-4 [&_blockquote]:border-primary/20 [&_blockquote]:pl-4 [&_blockquote]:italic
                  [&_img]:rounded-lg [&_img]:border [&_img]:border-primary/10
                  [&_ul]:list-disc [&_ol]:list-decimal
                  [&_hr]:border-primary/20
                '>
                  {documentToReactComponents(blog.fields.body, richTextOptions)}
                </div>
              )}

              {/* Recommended Posts */}
              {recommendedPosts && recommendedPosts.length > 0 && (
                <div className='pt-8 border-t border-primary/10'>
                  <h3 className='text-2xl font-bold mb-6'>Recommended Reading</h3>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {recommendedPosts.map((recommendedPost) => {
                      const recSlug = generateSlug(recommendedPost.fields.title);
                      const recImageUrl = recommendedPost.fields.image?.fields.file.url;
                      
                      return (
                        <Link
                          key={recommendedPost.sys.id}
                          to={`/blogs/${recSlug}`}
                          className='group'
                        >
                          <Card className='border-primary/10 hover:border-primary/30 transition-all duration-300 overflow-hidden h-full flex flex-col hover:shadow-xl hover:shadow-primary/5'>
                            {recImageUrl && (
                              <div className='relative h-40 overflow-hidden bg-primary/5'>
                                <img
                                  src={getImageUrl(recImageUrl as string | undefined)}
                                  alt={(recommendedPost.fields.image?.fields.title as string) || recommendedPost.fields.title}
                                  loading="lazy"
                                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                                />
                              </div>
                            )}
                            
                            <CardHeader className='flex-grow pb-3'>
                              <CardTitle className='text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2'>
                                {recommendedPost.fields.title}
                              </CardTitle>
                              <p className='text-sm text-muted-foreground line-clamp-2'>
                                {extractExcerpt(recommendedPost.fields.body, 100)}
                              </p>
                            </CardHeader>
                            
                            <CardContent className='pt-0 mt-auto'>
                              <div className='flex items-center justify-between text-xs text-muted-foreground border-t border-primary/10 pt-3'>
                                <div className='flex items-center gap-1'>
                                  <Calendar size={12} />
                                  <span>
                                    {format(new Date(recommendedPost.sys.createdAt), 'MMM dd, yyyy')}
                                  </span>
                                </div>
                                <div className='flex items-center gap-1 text-primary group-hover:gap-2 transition-all'>
                                  <span className='font-medium'>Read</span>
                                  <ArrowRight size={12} className='group-hover:translate-x-1 transition-transform' />
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Footer */}
              <footer className='pt-8 border-t border-primary/10'>
                <div className='flex items-center justify-between'>
                  <p className='text-sm text-muted-foreground'>
                    Last updated: {format(new Date(blog.sys.updatedAt), 'MMMM dd, yyyy')}
                  </p>
                  <Link to='/blogs'>
                    <Button variant='outline'>
                      View all posts
                    </Button>
                  </Link>
                </div>
              </footer>
            </div>
          )}
        </div>
      </article>

        <Footer />
      </div>
    </>
  );
};

export default BlogDetail;

