import React from 'react';

function NameDoctor({ name, about }) {
  return (
    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full grid items-center content-start border-gray-200 border p-4 rounded-lg">
            <div class="flex-grow">
                <h2 class="text-gray-900 text-sm mb-2 font-medium">{name}</h2>
                <p class="text-gray-500 text-xs">{about}</p>
            </div>
        </div>
    </div>
  )
}

export default NameDoctor