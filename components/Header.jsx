import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getCategoriesHeader } from '../services';


const Header = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategoriesHeader().then((result) => setCategories(result));
  }, []);

  return (
    <div className='container mx-auto px-10 mb-8'>
        <div className='border-b w-full inline-block border-blue-400 py-8'>
            <div className='md:float-left block'>
                <Link href={"/"}>
                    <span className='cursor-pointer font-bold text-4xl text-white'>
                        GraphCMS
                    </span>
                </Link>
            </div>
            <div className='hidden md: float-left md:contents'>
                {
                    categories.map( (cat, idx) => {
                        return <Link key={idx} href={`/category/${cat.slug}`}>
                            <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                                {cat.name}
                            </span>
                        </Link>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Header