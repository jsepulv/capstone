import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'

function NavBar () {
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (e, { name }) => setActiveItem(name);


    return (
        <Menu pointing secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name=''
            active={activeItem === 'friends'}
            onClick={handleItemClick}
          />
          <Menu.Menu position='right'>
          <Menu.Item
            name='Login'
            active={activeItem === 'Login'}
            onClick={handleItemClick}
          />
            <Menu.Item
              name='Register'
              active={activeItem === 'Register'}
              onClick={handleItemClick}
            />
          </Menu.Menu>
        </Menu>
    )
  }
export default NavBar