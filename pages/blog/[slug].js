import Link from 'next/link';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import { useRouter } from 'next/router';
const qs = require('qs');

export default function BlogPost({ post }) {
  const router = useRouter();
  return (
    <Layout>
      {/* <!-- Header --> */}
      <div className="header header-two">
        <div className="header__container">
          {/* <!-- <img className="header__container__image header-two__image" src="images/blog-header.jpg" alt=""> --> */}
        </div>
        <div className="header__bg">
          <div className="header__bg__section"></div>
          <div className="header__bg__section"></div>
          <div className="header__bg__section"></div>
          <div className="header__bg__section"></div>
        </div>
        <div className="header__text">
          <div className="header__text__top">
            <p className="paragraph header-two__text__top__category">
              {post.attributes.category.data.attributes.name} ~ {new Date(post.attributes.date).toDateString('en-US')}
            </p>
          </div>
          <h1 className="heading-2 header-two__heading">{post.attributes.name}</h1>
          {/* <!-- <hr className="separator" /> --> */}
          <div className="header__text__bottom">
            <div className="header__text__bottom__container">
              {/* <img
                className="header__text__bottom__container__image"
                src={post.attributes.user.data.attributes.image.data.attributes.url}
                alt=""
              /> */}
            </div>
            <div className="header__text__bottom__text">
              <Link href={`/blog/author/${post.attributes.user.data.attributes.username}?`}>
                <p className="paragraph">{post.attributes.user.data.attributes.username}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="post">
          <div className="post__top">
            <img className="post__top__image" src={post.attributes.image.data.attributes.url} alt="" />
          </div>

          <div className="post__body">
            <div className="post__body__section">
              <h3 className="heading-3">{post.attributes.heading}</h3>
              <p className="paragraph">{post.attributes.introduction}</p>
            </div>
            <div className="post__body__section">
              <h3 className="heading-3">{post.attributes.subheading}</h3>
              <p className="paragraph">{post.attributes.main}</p>
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
