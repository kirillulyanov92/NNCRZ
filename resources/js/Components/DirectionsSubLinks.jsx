import { Link } from '@inertiajs/react'
import React from 'react'

function DirectionsSubLinks({ title, url }) {
  return (
    <li>
        <Link href={route(url)} className="block px-6 py-4 mx-4 text-sm text-gray-700 hover:bg-white/20 rounded-xl transition">
            {title}
        </Link>
    </li>
  )
}

export default DirectionsSubLinks