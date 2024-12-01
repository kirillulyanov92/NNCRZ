import { Link } from '@inertiajs/react';
import React from 'react'

const FooterNav = ({ title, links }) => {
    return (
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-semibold text-gray-900 md:text-base text-sm mb-3">{title}</h2>
            <nav className="list-none mb-10">
                {links.map((link, index) => (
                <li key={index}>
                    <Link href={link.url} className="text-gray-600 hover:text-gray-800">{link.label}</Link>
                </li>
                ))}
            </nav>
        </div>
    );
};

export default FooterNav