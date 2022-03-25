import Link from 'next/link';
import Router from 'next/router';
import { BLOG_COUNT } from '@/config/index';

export default function Pagination({ page, total }) {
  const lastPage = Math.ceil(total / BLOG_COUNT);
  return (
    <>
      {(page > 1 || page === 1) && (
        <button className="btn" onClick={() => Router.push(`/blog?page=${page - 1}`)} disabled={page <= 1}>
          {'<'}
        </button>
      )}
      <p className="paragraph">{page}</p>
      {(page < lastPage || page === lastPage) && (
        <button className="btn" onClick={() => Router.push(`/blog?page=${page + 1}`)} disabled={page === lastPage}>
          {'>'}
        </button>
      )}
    </>
  );
}
