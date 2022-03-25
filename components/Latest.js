import Link from 'next/link';
import { API_URL } from '@/config/index';
export default function Latest({ latestPost }) {
  // console.log(`${API_URL}${latestPost.attributes.image.data.attributes.formats.large.url}`);
  return (
    <Link href={`/blog/${latestPost.attributes.slug}`}>
      <div className="blog-post__posts__card">
        <div className="blog-post__posts__card__picture">
          <img
            className="blog-post__posts__card__picture__image"
            src={latestPost.attributes.image.data.attributes.formats.small.url}
            alt=""
          />
        </div>
        <div className="blog-post__posts__card__text">
          <h4 className="heading-4">{latestPost.attributes.name}</h4>
          <p className="paragraph">{`${latestPost.attributes.introduction.substring(0, 150)}...`}</p>
          <div className="featured-post__other__card__text__bottom">
            <Link href={`/blog/author/${latestPost.attributes.user.data.attributes.username}?`}>
              <p className="post-details">{latestPost.attributes.user.data.attributes.username}</p>
            </Link>
            <p className="post-details"> {'|'} </p>
            <p className="post-details"> {new Date(latestPost.attributes.date).toLocaleDateString('en-US')}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
