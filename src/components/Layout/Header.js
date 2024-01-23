import React from 'react';
import { LoginRegister } from '../auth/LoginRegister';

const Header = () => {
  return (
    <header className="bg-indigo-600 font-bold text-white p-4 flex justify-around items-center">
      <div className="flex items-center">
        <img
          className="h-9 w-auto mr-2"
          src="https://tailwindui.com/img/logos/workflow-mark-white.svg"
          alt="Logo"
        />
      </div>

      <nav className="flex space-x-4">
        
      </nav>

      <div>
        <LoginRegister />
      </div>
    </header>
  );
};

export default Header;
