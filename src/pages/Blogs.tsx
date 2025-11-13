import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useContentfulBlogs } from '@/hooks/useContentfulBlogs';
import { generateSlug, extractExcerpt } from '@/lib/contentful';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Calendar, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';

const Blogs = () => {
  const { data: blogs, isLoading, error } = useContentfulBlogs();

  const featuredBlog = blogs?.[0];
  const otherBlogs = blogs?.slice(1) || [];
  
  const pageTitle = "Blog - unCoded | Crypto Trading Insights & Updates";
  const pageDescription = "Read the latest insights, updates, and stories about automated crypto trading, Binance bots, and trading strategies from the unCoded team.";
  const pageUrl = "https://uncoded.ch/blogs";
  
  // Helper to get image URL safely
  const getImageUrl = (imageUrl: string | undefined): string => {
    if (!imageUrl) return "https://uncoded.ch/og-image.png";
    return imageUrl.startsWith('//') ? `https:${imageUrl}` : imageUrl;
  };
  
  const ogImage = getImageUrl(featuredBlog?.fields.image?.fields.file.url as string | undefined);

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
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "unCoded Blog",
            "description": pageDescription,
            "url": pageUrl,
            "publisher": {
              "@type": "Organization",
              "name": "unCoded",
              "logo": {
                "@type": "ImageObject",
                "url": "https://uncoded.ch/logos/logo-complete.png"
              }
            }
          })}
        </script>
      </Helmet>
      
      <div className='min-h-screen bg-gradient-to-b from-background via-background/95 to-primary/5'>
        <Navbar />
      
      {/* Hero Section */}
      <section className='pt-32 pb-16 px-4'>
        <div className='container mx-auto max-w-7xl'>
          <div className='text-center mb-16'>
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 text-transparent bg-clip-text'>
              Our Blog
            </h1>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              Insights, updates, and stories from the unCoded team
            </p>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className='space-y-8'>
              <Card className='border-primary/10 overflow-hidden'>
                <Skeleton className='h-96 w-full' />
                <CardHeader>
                  <Skeleton className='h-8 w-3/4 mb-2' />
                  <Skeleton className='h-4 w-full' />
                </CardHeader>
              </Card>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {[1, 2, 3].map((i) => (
                  <Card key={i} className='border-primary/10 overflow-hidden'>
                    <Skeleton className='h-48 w-full' />
                    <CardHeader>
                      <Skeleton className='h-6 w-3/4 mb-2' />
                      <Skeleton className='h-4 w-full' />
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className='text-center py-16'>
              <div className='bg-destructive/10 border border-destructive/20 rounded-lg p-8 max-w-md mx-auto'>
                <h3 className='text-xl font-semibold mb-2 text-destructive'>
                  Failed to load blogs
                </h3>
                <p className='text-muted-foreground'>
                  {error.message || 'An error occurred while fetching blog posts.'}
                </p>
              </div>
            </div>
          )}

          {/* Blog Content */}
          {!isLoading && !error && blogs && blogs.length > 0 && (
            <div className='space-y-12'>
              {/* Featured Blog - Full Width */}
              {featuredBlog && (
                <Link
                  to={`/blogs/${generateSlug(featuredBlog.fields.title)}`}
                  className='group block'
                >
                  <Card className='border-primary/10 hover:border-primary/30 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-primary/10'>
                    <div className='grid md:grid-cols-2 gap-0'>
                      {/* Featured Image */}
                      {featuredBlog.fields.image && (
                        <div className='relative h-64 md:h-auto overflow-hidden bg-primary/5'>
                          <img
                            src={getImageUrl(featuredBlog.fields.image.fields.file.url as string | undefined)}
                            alt={(featuredBlog.fields.image.fields.title as string) || featuredBlog.fields.title}
                            loading="eager"
                            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                          />
                        </div>
                      )}
                      
                      {/* Content */}
                      <div className='p-8 md:p-12 flex flex-col justify-between'>
                        <div>
                          <div className='text-sm text-primary font-semibold mb-4'>
                            FEATURED POST
                          </div>
                          <CardTitle className='text-3xl md:text-4xl mb-4 group-hover:text-primary transition-colors'>
                            {featuredBlog.fields.title}
                          </CardTitle>
                          <p className='text-muted-foreground text-lg mb-6 line-clamp-3'>
                            {extractExcerpt(featuredBlog.fields.body, 200)}
                          </p>
                        </div>
                        
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                            <Calendar size={16} />
                            <span>
                              {format(new Date(featuredBlog.sys.createdAt), 'MMMM dd, yyyy')}
                            </span>
                          </div>
                          <div className='flex items-center gap-2 text-primary group-hover:gap-3 transition-all'>
                            <span className='font-medium'>Read more</span>
                            <ArrowRight size={20} className='group-hover:translate-x-1 transition-transform' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              )}

              {/* Other Blogs - Grid */}
              {otherBlogs.length > 0 && (
                <div>
                  <h2 className='text-2xl font-bold mb-6'>More Articles</h2>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {otherBlogs.map((blog) => {
                      const slug = generateSlug(blog.fields.title);
                      const imageUrl = blog.fields.image?.fields.file.url;
                      
                      return (
                        <Link
                          key={blog.sys.id}
                          to={`/blogs/${slug}`}
                          className='group'
                        >
                          <Card className='border-primary/10 hover:border-primary/30 transition-all duration-300 overflow-hidden h-full flex flex-col hover:shadow-xl hover:shadow-primary/5'>
                            {imageUrl && (
                              <div className='relative h-48 overflow-hidden bg-primary/5'>
                                <img
                                  src={getImageUrl(imageUrl as string | undefined)}
                                  alt={(blog.fields.image?.fields.title as string) || blog.fields.title}
                                  loading="lazy"
                                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                                />
                              </div>
                            )}
                            
                            <CardHeader className='flex-grow pb-4'>
                              <CardTitle className='text-xl mb-2 group-hover:text-primary transition-colors line-clamp-2'>
                                {blog.fields.title}
                              </CardTitle>
                              <p className='text-sm text-muted-foreground line-clamp-3'>
                                {extractExcerpt(blog.fields.body)}
                              </p>
                            </CardHeader>
                            
                            <CardContent className='pt-0 mt-auto'>
                              <div className='flex items-center justify-between text-xs text-muted-foreground border-t border-primary/10 pt-4'>
                                <div className='flex items-center gap-1'>
                                  <Calendar size={14} />
                                  <span>
                                    {format(new Date(blog.sys.createdAt), 'MMM dd, yyyy')}
                                  </span>
                                </div>
                                <div className='flex items-center gap-1 text-primary group-hover:gap-2 transition-all'>
                                  <span className='font-medium'>Read</span>
                                  <ArrowRight size={14} className='group-hover:translate-x-1 transition-transform' />
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
            </div>
          )}

          {/* Empty State */}
          {!isLoading && !error && blogs && blogs.length === 0 && (
            <div className='text-center py-16'>
              <div className='bg-primary/5 border border-primary/10 rounded-lg p-8 max-w-md mx-auto'>
                <h3 className='text-xl font-semibold mb-2'>
                  No blog posts yet
                </h3>
                <p className='text-muted-foreground'>
                  Check back soon for exciting content!
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

        <Footer />
      </div>
    </>
  );
};

export default Blogs;

