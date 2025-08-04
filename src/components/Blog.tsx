import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const PERSONAL_ACCESS_TOKEN = '8fd805a4-a4e2-417e-8d1a-a004aa665f45';

// List all your publication domains here:
const PUBLICATION_HOSTS = [
  'imrajeevnayan.hashnode.dev',
  'solving-array-ques.hashnode.dev',
  // add more publication domains if you have them, e.g.
  // 'anotherpublication.hashnode.dev',
];

const Blog = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch posts from a single publication
  const fetchPostsFromPublication = async (host: string) => {
    const res = await fetch('https://gql.hashnode.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${PERSONAL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        query: `
          {
            publication(host: "${host}") {
              posts(first: 10) {
                edges {
                  node {
                    id
                    title
                    brief
                    slug
                    publishedAt
                    tags {
                      name
                    }
                  }
                }
              }
            }
          }
        `,
      }),
    });

    const json = await res.json();

    // Map nodes, add publication host so you can build correct URLs later
    return (
      json.data?.publication?.posts?.edges.map((edge: any) => ({
        ...edge.node,
        publicationHost: host,
      })) || []
    );
  };

  useEffect(() => {
    const fetchAllPosts = async () => {
      setLoading(true);
      setError(null);

      try {
        // Fetch all publications in parallel
        const allPostsArrays = await Promise.all(
          PUBLICATION_HOSTS.map((host) => fetchPostsFromPublication(host))
        );

        // Flatten all arrays into a single array
        const allPosts = allPostsArrays.flat();

        if (allPosts.length === 0) {
          setError('No blog posts found.');
        } else {
          // Sort by published date (latest first)
          allPosts.sort(
            (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
          );

          setPosts(allPosts);
        }
      } catch (err) {
        setError('Failed to fetch blog posts');
      }
      setLoading(false);
    };

    fetchAllPosts();
  }, []);

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Daily Blog</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        {loading && <div className="text-center text-gray-500">Loading blog posts...</div>}
        {error && <div className="text-center text-red-500">{error}</div>}

        {!loading && !error && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                viewport={{ once: true }}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow"
              >
                <h3 className="text-2xl font-semibold text-blue-600 mb-2">{post.title}</h3>
                <p className="text-sm text-gray-500 mb-2">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{post.brief}</p>
                {post.tags.length > 0 && (
                  <div className="mb-3 flex flex-wrap gap-2">
                    {post.tags.map((tag: any, tagIdx: number) => (
                      <span
                        key={tagIdx}
                        className="text-xs bg-blue-200 dark:bg-blue-700 text-blue-900 dark:text-blue-100 px-2 py-1 rounded-full"
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                )}
                <a
                  href={`https://${post.publicationHost}/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition"
                >
                  Read More
                </a>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
