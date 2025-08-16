import { getPosts } from '../lib/api';

export default function Home({ posts }) {
  return (
    <div>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title.rendered}</h2>
          <div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
        </article>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: { posts },
    revalidate: 60 * 5 // ISR: 5 minutes
  };
}