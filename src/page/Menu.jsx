import React from 'react';
import FetchMenu from '../fetch/fetch-menu.jsx';

function Menu() {
  return (
    <div className='containerdiv'>
      <div id="MenuDiv">
        <div className='menu-container'>
          <FetchMenu />
        </div>
      </div>
    </div>
  );
}

export default Menu;