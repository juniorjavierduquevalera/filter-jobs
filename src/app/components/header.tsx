// src/components/Header.tsx
import Image from 'next/image';
import { FC } from 'react';
import { HeaderProps } from 'app/types/interfaces';


const Header: FC<HeaderProps> = ({ onFilterClick, onClearFilter }) => {
  return (
    <header className="relative bg-navbar bg-header-mobile lg:bg-header-desktop bg-cover bg-center h-48 bg-no-repeat flex items-end mb-28 md:mb-0">
      <nav className="bg-white p-4 w-5/6 mx-auto rounded-lg shadow-lg -mb-20 sm:-mb-16 md:-mb-12 lg:-mb-8">
        <div className="container mx-auto flex justify-between items-center">
          {/* Elementos del lado izquierdo */}
          <div className="flex flex-wrap items-start sm:space-x-4">
            <div className="flex items-center space-x-2 mb-4 md:mb-0 mr-4 sm:mr-0">
              <div
                onClick={() => onFilterClick("Frontend")}
                className="bg-light-grayish-cyan-filters flex-grow md:flex-grow-0 h-8 rounded flex justify-center items-center p-2 cursor-pointer"
              >
                <div className="text-lg font-bold">Frontend</div>
              </div>
              <div
                onClick={() => onClearFilter()}
                className="relative bg-navbar hover:bg-black hover:cursor-pointer w-10 h-8 rounded flex justify-center items-center aspect-square"
              >
                <Image
                  src="/images/icon-remove.svg"
                  alt="icon remove"
                  width={16}
                  height={16}
                  className="w-4 h-4 object-center"
                />
              </div>
            </div>
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div
                onClick={() => onFilterClick("CSS")}
                className="bg-light-grayish-cyan-filters flex-grow md:flex-grow-0 h-8 rounded flex justify-center items-center p-2 cursor-pointer"
              >
                <div className="text-lg font-bold">CSS</div>
              </div>
              <div
                onClick={() => onClearFilter()}
                className="relative bg-navbar hover:bg-black hover:cursor-pointer w-10 h-8 rounded flex justify-center items-center aspect-square"
              >
                <Image
                  src="/images/icon-remove.svg"
                  alt="icon remove"
                  width={16}
                  height={16}
                  className="w-4 h-4 object-center"
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div
                onClick={() => onFilterClick("JavaScript")}
                className="bg-light-grayish-cyan-filters flex-grow md:flex-grow-0 h-8 rounded flex justify-center items-center p-2 cursor-pointer"
              >
                <div className="text-lg font-bold">JavaScript</div>
              </div>
              <div
                onClick={() => onClearFilter()}
                className="relative bg-navbar hover:bg-black hover:cursor-pointer w-10 h-8 rounded flex justify-center items-center aspect-square"
              >
                <Image
                  src="/images/icon-remove.svg"
                  alt="icon remove"
                  width={16}
                  height={16}
                  className="w-4 h-4 object-center"
                />
              </div>
            </div>
          </div>

          {/* Elementos del lado derecho */}
          <div className="flex items-center space-x-4">
            <div
              onClick={() => onClearFilter()}
              className="text-lg font-bold hover:cursor-pointer underline"
            >
              Clear
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
