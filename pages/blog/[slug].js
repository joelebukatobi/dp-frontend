import Link from 'next/link';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import { useRouter } from 'next/router';
import BlogHeader from '@/components/BlogHeader';
const qs = require('qs');

export default function BlogPost({ post }) {
  const router = useRouter();
  return (
    <Layout>
      {/* <!-- Header --> */}

      <BlogHeader
        date={`${post.attributes.category.data.attributes.name}${' ~ '}${new Date(post.attributes.date).toDateString(
          'en-US'
        )}`}
        title={post.attributes.name}
        bgImage={'none'}
        profile={`${API_URL}${post.attributes.user.data.attributes.photo.data.attributes.url}`}
        username={post.attributes.user.data.attributes.username}
      />

      <div className="container">
        <div className="post">
          <div className="post__top">
            <img className="post__top__image" src={`${API_URL}${post.attributes.image.data.attributes.url}`} alt="" />
          </div>

          <div className="post__body">
            <div className="post__body__section">
              <h3>{post.attributes.heading}</h3>
              <p>{post.attributes.introduction}</p>
            </div>
            <div className="post__body__section">
              <h3>{post.attributes.subheading}</h3>
              <p>{post.attributes.main}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  const query = qs.stringify(
    {
      populate: ['tags', 'user', 'user.photo', 'image', 'category'],
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await fetch(`${API_URL}/api/blogs?filters[slug][$eq]=${slug}&${query}`);
  const blog = await res.json();
  return {
    props: {
      post: blog.data[0],
    },
  };
}

// export async function getStaticPaths() {
//   const res = await fetch(`${API_URL}/api/blogs`);
//   const blog = await res.json();
//   const paths = blog.data.map((post) => ({
//     params: { slug: post.attributes.slug },
//   }));
//   return {
//     paths,
//     fallback: true,
//   };
// }

// export async function getStaticProps({ params }) {
//   const res = await fetch(`${API_URL}/api/blogs?slug=${params.slug}`);

//   const blogs = await res.json();
//   const blog = blogs.data;

//   return {
//     props: {
//       post: blog[0],
//     },

//     revalidate: 1,
//   };
// }

// export async function getServerSideProps({ query: { slug } }) {
//   const res = await fetch(`${API_URL}/api/blogs/${slug}`);

//   const blogs = await res.json();
//   return {
//     props: {
//       post: blogs[0],
//     },
//   };
// }
