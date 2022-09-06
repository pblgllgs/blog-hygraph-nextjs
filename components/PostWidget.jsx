import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getRecentPost, getSimilarPost } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPost] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPost(categories, slug).then((result) => setRelatedPost(result));
    } else {
      getRecentPost().then((result) => setRelatedPost(result));
    }
  }, [slug, categories]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? 'Post Relacionados' : 'Post Recientes'}
      </h3>
      {relatedPosts.map((post, idx) => {
          return (
            <div key={idx} className="flex items-center w-full mb-4">
              <div className="w-16 flex-none">
                <Image
                  src={post.featuredImage.url}
                  alt={post.title}
                  width="60px"
                  height="60px"
                  className="align-middle rounded-full"
                />
              </div>
              <div className='flex-grow ml-4'>
                <p className='text-gray-500 font-xs'>
                  {
                    moment(post.createdAt).format('MMM DD, YYYY')
                  }
                </p>
                <Link href={`/post/${post.slug}`} key={idx}>{post.title}</Link>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default PostWidget;
