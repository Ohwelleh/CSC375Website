import { IconButton, Menu, MenuButton, Portal, MenuList, MenuItem } from "@chakra-ui/react";
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { LinkButton } from "../Styles";
import { MenuItems } from './MenuData';
import { AiFillHome } from 'react-icons/ai';

const MenuDiv = styled.div`
  grid-row: 1;
  grid-column: 1;
  margin-left: 20px;
`;

function MenuBar() {
  const props = MenuItems
  return(
    <MenuDiv>
      <Menu>
        <MenuButton as={IconButton} icon={<GiHamburgerMenu />} />
        <Portal>
          <MenuList>
            <LinkButton to='/'>
              <MenuItem icon={<AiFillHome />}> Home </MenuItem>
            </LinkButton>
            {MenuItems.map((item, index) => {
              return(
                <LinkButton to={`/${item.Name}`}>
                  <MenuItem key={index} icon={item.Icon} >
                    {item.Name}
                  </MenuItem>
                </LinkButton>
              );
            })}
          </MenuList>
        </Portal>
      </Menu>
    </MenuDiv>
  )
}

export default MenuBar;