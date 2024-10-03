import { Button, Icon, IconButton } from '@mui/material';
import React, { FC } from 'react';

const Header: FC = () => {
  return (
    <div className="h-16 bg-black w-full absolute text-white flex items-center justify-center overflow-x-hidden">
      <div className="flex flex-row justify-between items-center w-full max-w-[768px]">
        <img src="/images/Logo.png" className="h-12" alt="Logo" />
        <nav className="flex gap-16">
          <Button sx={{color:'white'}}>Discovery</Button>
          <Button sx={{color:'white'}}>Sobre</Button>
          <Button sx={{color:'white'}}>Contate-nos</Button>
        </nav>
        <div className="flex gap-2">

        <IconButton>
          <img src="/icons/user-icon.svg" className="w-6 h-6" alt="User Icon" />
        </IconButton>
        <IconButton>
          <img src="/icons/cart-shopping.svg" className="w-6 h-6" alt="Cart Icon" />
        </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
