import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((result) => setCategories(result));
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        Categories
      </h3>
      {
        categories.map((category, idx) => {
          return <Link href={`/category/${category.slug}`} key={idx}>
            <span className='cursor-pointer block mb-3 pb-3'>
              {category.name}
            </span>
          </Link>
        })
      }
    </div>
  );
};

export default Categories;
