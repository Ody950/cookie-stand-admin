import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="py-4 text-white bg-gray-800">
      <div className="container flex items-center justify-between mx-auto">
        <h1 className="text-2xl font-bold text-white-600">Cookie Stand Admin</h1>
        <nav className="space-x-4">
          <Link href="/overview" className="text-white-600 hover:text-stone-800">
            Overview
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;