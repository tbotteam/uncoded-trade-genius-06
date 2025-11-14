import { useQuery } from "@tanstack/react-query";
import { contentfulClient, BlogPost, generateSlug } from "@/lib/contentful";

export const useContentfulBlogs = () => {
    return useQuery({
        queryKey: ["blogs"],
        queryFn: async () => {
            const response = await contentfulClient.getEntries({
                content_type: "blogPage",
                order: ["-sys.createdAt"],
            });

            return response.items as unknown as BlogPost[];
        },
        staleTime: 1000 * 60 * 5, // 5 minutes
    });
};

export const useContentfulBlog = (idOrSlug: string) => {
    return useQuery({
        queryKey: ["blog", idOrSlug],
        queryFn: async () => {
            // First try to get by ID
            try {
                const response = await contentfulClient.getEntry(idOrSlug);
                return response as unknown as BlogPost;
            } catch {
                // If that fails, search by title (generating slug to match)
                const response = await contentfulClient.getEntries({
                    content_type: "blogPage",
                });
                
                const blog = (response.items as unknown as BlogPost[]).find(
                    item => generateSlug(item.fields.title) === idOrSlug
                );
                
                if (!blog) {
                    throw new Error("Blog post not found");
                }
                
                return blog;
            }
        },
        enabled: !!idOrSlug,
        staleTime: 1000 * 60 * 5, // 5 minutes
    });
};

export const useRecommendedPosts = (postIds: string[]) => {
    return useQuery({
        queryKey: ["recommendedPosts", ...postIds],
        queryFn: async () => {
            if (postIds.length === 0) return [];
            
            const promises = postIds.map(id => 
                contentfulClient.getEntry(id).catch(() => null)
            );
            
            const results = await Promise.all(promises);
            return results.filter(Boolean) as unknown as BlogPost[];
        },
        enabled: postIds.length > 0,
        staleTime: 1000 * 60 * 5, // 5 minutes
    });
};
