import React from 'react'
import CArtWidget from './CArtWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div>

<Flex>
    <Box p='4'>
        Mi Ecommerce
    </Box>
  <Spacer />

  <Menu>
  <MenuButton>
    Categorías
  </MenuButton>
  <MenuList>
    <MenuItem>Categoría 1</MenuItem>
    <MenuItem>Categoría 2</MenuItem>
  </MenuList>
</Menu>
<Spacer />

  <Box p='4'>
      <CArtWidget/>
  </Box>
</Flex>
        

        

      
    </div>
  )
}

export default NavBar