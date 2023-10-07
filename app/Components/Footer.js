import React from 'react';

function Footer({ reports }) {
  const numLocations = reports.length;
  const locationsText = numLocations === 0 ? '0 Locations Worldwide' : `${numLocations} Locations Worldwide`;

  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-xs font-semibold">{locationsText}</p>
        <p className="text-xs font-semibold mt-2 md:mt-0">&copy; {new Date().getFullYear()} Cookie Stand Admin</p>
      </div>
    </footer>
  );
}

export default Footer;
