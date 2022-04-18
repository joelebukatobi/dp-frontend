import Link from 'next/link';
import { API_URL } from '@/config/index';
export default function FeaturedBlog({ featured }) {
  return (
    <Link href={`/blog/${featured.attributes.slug}`}>
      <div className="featured-post__main__card">
        <div className="featured-post__main__card__picture">
          <img
            className="featured-post__main__card__picture__image"
            src={`${API_URL}${featured.attributes.image.data.attributes.url}`}
            alt=""
          />
        </div>
        <div className="featured-post__main__card__text">
          <h3>{featured.attributes.name}</h3>
          <p>{`${featured.attributes.introduction.substring(0, 150)}...`}</p>
          <div className="details">
            <Link href={`/blog/author/${featured.attributes.user.data.attributes.username}?`}>
              <p className="post-details">{featured.attributes.user.data.attributes.username}</p>
            </Link>
            <p className="post-details"> {'|'} </p>
            <p className="post-details"> {new Date(featured.attributes.date).toLocaleDateString('en-US')}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
