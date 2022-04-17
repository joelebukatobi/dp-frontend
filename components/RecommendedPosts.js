import Link from 'next/link';
import { API_URL } from '@/config/index';
export default function RecommendedBlog({ recommended }) {
  return (
    <Link href={`/blog/${recommended.attributes.slug}`}>
      <div className="featured-post__other__col__card">
        <div className="featured-post__other__col__card__picture">
          <img
            className="featured-post__other__col__card__picture__image"
            src={`${API_URL}${recommended.attributes.image.data.attributes.url}`}
            alt=""
          />
        </div>
        <div className="featured-post__other__col__card__text">
          <h4>{recommended.attributes.name}</h4>
          <p>{`${recommended.attributes.introduction.substring(0, 70)}...`}</p>
          <div className="details">
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
