import Link from 'next/link';
import { API_URL } from '@/config/index';
export default function RecommendedBlog({ recommended }) {
  return (
    <Link href={`/blog/${recommended.attributes.slug}`}>
      <div className="featured-post__other__card">
        <div className="featured-post__other__card__picture">
          <img
            className="featured-post__other__card__picture__image"
            src={recommended.attributes.image.data.attributes.url}
            alt=""
          />
        </div>
        <div className="featured-post__other__card__text">
          <h4 className="heading-4">{recommended.attributes.name}</h4>
          <p className="paragraph">{`${recommended.attributes.introduction.substring(0, 100)}...`}</p>
          <div className="featured-post__other__card__text__bottom">
            <Link href={`/blog/author/${recommended.attributes.user.data.attributes.username}?`}>
              <p className="post-details">{recommended.attributes.user.data.attributes.username}</p>
            </Link>
            <p className="post-details"> {'|'} </p>
            <p className="post-details"> {new Date(recommended.attributes.date).toLocaleDateString('en-US')}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
