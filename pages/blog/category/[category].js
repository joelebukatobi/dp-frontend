import { API_URL } from '@/config/index';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Latest from '@/components/Latest';
const qs = require('qs');

export default function PostCategories({ postCategory, ltPost, category }) {
  console.log(category);
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
          <h1 className="heading-2 header-two__heading">Blog {/*<Link href="/"></Link> */}</h1>
          <hr className="separator" />
          <p className="paragraph">Category ~ {category}</p>
        </div>
      </div>

      {/* Categories */}
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
              <img className="categories__search__button__image" src="/images/mail.svg" alt="" />
            </button>
          </form>
        </div>
      </div>
      <div className="container">
        <h4 className="heading-4">{ltPost.latestPost}</h4>
        <div className="blog-post">
          <div className="blog-post__posts">
            {ltPost.map((latestPost) => (
              <Latest key-={latestPost.id} latestPost={latestPost} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query: { category } }) {
  const ltPost = qs.stringify(
    {
      populate: ['user', 'image', 'category'],
      sort: ['date:asc'],
      filters: {
        category: {
          name: category,
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await Promise.all([
    // fetch(`${API_URL}/api/blogs?${rePost}`),
    fetch(`${API_URL}/api/categories?$filters[name][$eq]=${category}`),
    fetch(`${API_URL}/api/blogs?${ltPost}`),
  ]);
  const blog = await Promise.all(res.map((res) => res.json()));
  console.log(blog);
  return {
    props: {
      postCategory: blog[0].data,
      ltPost: blog[1].data,
      category: category,
    },
  };
}
