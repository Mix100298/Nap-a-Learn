import { Input, InputLeftElement, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import React from "react";
import Colour from "../color/napalearncolor";

// form in profile page
function PasswordRegister ({ show, form, icon, click, change, text}) {
  return (
    <InputGroup size='md'>
    <InputLeftElement pointerEvents='none' children={icon} />
    <Input
      pr='4.5rem'
      type={{show} ? 'text' : 'password'}
      placeholder={text}
      _placeholder={{ opacity: 0.8, color: 'white' }}
      focusBorderColor={Colour.FirstPink}
      colorScheme="white"
      color="white"
      value={form} onChange={change}
    />
    <InputRightElement width='4.5rem'>
      <Button h='1.75rem' size='sm' onClick={click}>
        {{show} ? 'Hide' : 'Show'}
      </Button>
    </InputRightElement>
  </InputGroup>
  )
}

export default PasswordRegister;