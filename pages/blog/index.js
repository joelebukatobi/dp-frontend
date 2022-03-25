import Link from 'next/link';
import { API_URL } from '@/config/index';
import Layout from '@/components/Layout';
import Featured from '@/components/Featured';
import Recommended from '@/components/Recommended';
import Latest from '@/components/Latest';
import Pagination from '@/components/Pagination';
import { BLOG_COUNT } from '@/config/index';
const qs = require('qs');

export default function index({ featured, reBlog, postCategory, ltPost, page }) {
  console.log(ltPost.meta.pagination.total);

  return (
    <Layout>
      {/* <!-- Header --> */}
      <div className="header header-two">
        <div className="header__container">
          <img className="header__container__image header-two__image" src="/images/blog-header.png" alt="" />
        </div>
        <div className="header__bg">
          <div className="header__bg__section"></div>
          <div className="header__bg__section"></div>
          <div className="header__bg__section"></div>
          <div className="header__bg__section"></div>
        </div>
        <div className="header__text">
          <h1 className="heading-2 header-two__heading">Blog</h1>
          <hr className="separator" />
          <p className="paragraph">Some of the musings of a couple of Potentials</p>
        </div>
      </div>

      <div className="container container-categories">
        <div className="categories">
          <div className="categories__main">
            <ul className="categories__main__list">
              {postCategory.map((category) => (
                <Link href={`/blog/category/${category.attributes.name}?`}>
                  <li className="categories__main__list__item" key={category.id} category={category}>
                    {category.attributes.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <form className="categories__search">
            <input type="text" className="input" placeholder="Search this blog" />
            <button className="btn categories__search__button" type="submit">
              <img className="categories__search__button__image" src="/images/search.svg" alt="" />
            </button>
          </form>
        </div>
      </div>

      {/* <!-- Featured Posts --> */}
      <div className="container">
        <div className="featured-header">
          <div className="featured-header__main">
            <h4 className="heading-4">Featured</h4>
          </div>
          <div className="featured-header__other">
            <h4 className="heading-4">Recommended</h4>
          </div>
        </div>
        <div className="featured-post">
          <div className="featured-post__main">
            <h4 className="heading-4 featured-post__main__header">Featured</h4>
            <Featured featured={featured} />
          </div>
          <div className="featured-post__other">
            <h4 className="heading-4 featured-post__other__header">Recommended</h4>
            {reBlog.map((recommended) => (
              <Recommended key-={recommended.id} recommended={recommended} />
            ))}
          </div>
        </div>
      </div>

      {/* <!-- Separator --> */}
      <div className="container">
        <hr className="blog-separator" />
      </div>

      {/* <!-- Blog Posts --> */}
      <div className="container">
        <div className="blog-post">
          <h4 className="heading-4">Latest Post</h4>
          <div className="blog-post__posts">
            {ltPost.data.map((latestPost) => (
              <Latest key-={latestPost.id} latestPost={latestPost} />
            ))}
          </div>
          <div className="blog-post__pagination">
            <Pagination total={ltPost.meta.pagination.total} page={page} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query: { page = 1 } }) {
  const fePost = qs.stringify(
    {
      populate: ['blog', 'user', 'image'],
      filters: {
        tags: {
          tagname: {
            $eq: 'featured',
          },
        },
      },
    },

    {
      encodeValuesOnly: true,
    }
  );
  const rePost = qs.stringify(
    {
      populate: ['blog', 'user', 'image'],
      sort: ['date:asc'],
      filters: {
        tags: {
          tagname: {
            $eq: 'recommended',
          },
        },
      },
      pagination: {
        start: 0,
        limit: 3,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
  const ltPost = qs.stringify(
    {
      populate: ['blog', 'user', 'image'],
      sort: ['date:asc'],
      pagination: {
        start: +page === 1 ? 0 : (+page - 1) * BLOG_COUNT,
        limit: BLOG_COUNT,
      },
      filters: {
        $and: [
          {
            tags: {
              tagname: {
                $ne: 'recommended',
              },
            },
          },
          {
            tags: {
              tagname: {
                $ne: 'featured',
              },
            },
          },
        ],
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await Promise.all([
    fetch(`${API_URL}/api/blogs?${fePost}`),
    fetch(`${API_URL}/api/blogs?${rePost}`),
    fetch(`${API_URL}/api/categories`),
    fetch(`${API_URL}/api/blogs?${ltPost}`),
  ]);
  const blog = await Promise.all(res.map((res) => res.json()));
  console.log(blog);
  return {
    props: {
      featured: blog[0].data[0],
      reBlog: blog[1].data,
      postCategory: blog[2].data,
      ltPost: blog[3],
      page: +page,
    },
  };
}
