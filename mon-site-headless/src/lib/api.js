const API_URL = process.env.WORDPRESS_API_URL;

export async function getPosts() {
  const res = await fetch(`${API_URL}/posts?_embed&per_page=20`);
  return await res.json();
}

export async function getPostBySlug(slug) {
  const posts = await fetch(
    `${API_URL}/posts?slug=${slug}&_embed`
  );
  return (await posts.json())[0];
}