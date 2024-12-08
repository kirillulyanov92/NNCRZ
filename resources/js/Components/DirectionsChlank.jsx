import { Link } from '@inertiajs/react'
import React from 'react'

function DirectionsChlank({ title, bgcolor, bgborder, imgname, url }) {
  return (
    <div className="lg:w-1/3 md:w-1/2 w-full p-4">
      <Link href={route(url)}>      
        <div className={`flex flex-row border ${bgcolor} ${bgborder} p-6 rounded-lg`}>
            <div
                className="w-1/2 content-center items-center">
                    <img className='mx-auto h-3/4 max-h-fit w-auto object-cover object-center' src={`./img/CategoryDist/${imgname}.png`} alt="" />
            </div>
            <div className='w-1/2 align-middle content-center'>
            <h2 className="text-lg text-gray-900 font-semibold">{title}</h2>
            </div>
        </div>
      </Link>
    </div>
  )
}

export default DirectionsChlank