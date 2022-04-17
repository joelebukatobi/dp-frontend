import Link from 'next/link';
import { API_URL } from '@/config/index';
export default function Latest({ post }) {
  console.log(`${API_URL}${post.attributes.image.data.attributes.url}`);
  return (
    <Link href={`/blog/${post.attributes.slug}`}>
      <div className="blog-post__posts__card">
        <div className="blog-post__posts__card__picture">
          <img
            className="blog-post__posts__card__picture__image"
            src={`${API_URL}${post.attributes.image.data.attributes.url}`}
            alt="Blog Image"
          />
        </div>
        <div className="blog-post__posts__card__text">
          <h4>{post.attributes.name}</h4>
          <p>{`${post.attributes.introduction.substring(0, 100)}...`}</p>
          <div className="details">
            <Link href={`/blog/author/${post.attributes.user.data.attributes.username}?`}>
              <p className="post-details">{post.attributes.user.data.attributes.username}</p>
            </Link>
            <p className="post-details"> {'|'} </p>
            <p className="post-details"> {new Date(post.attributes.date).toLocaleDateString('en-US')}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
