
import React ,{useEffect,useState, }from 'react';
import { Grid ,Box, Heading,Text,Image,Flex,Spacer, Divider,Button} from '@chakra-ui/react'
import {FormControl,Input,FormLabel,FormHelperText,FormErrorMessage} from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps,keyframes,Switch } from '@chakra-ui/react'
import { useScroll,useAnimation,useTransform, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


export default function Home(){
  const dispatch=useDispatch();
 
return(

<Flex justify={"center"} alignItems={"center"} w="100%" h="100vh">
    <Box>
    <Heading>{isLogin ? 'Login' : 'Sign Up'}</Heading>

        <Flex>
            <Button _hover={isLogin ? 'blue':'white' } bg={isLogin ? 'blue':'white' } onClick={()=>{setIsLogin(true)}}>Login</Button>
            <Button  _hover={isLogin ? 'blue':'white' } bg={isLogin ? 'white' : 'blue'} onClick={()=>{setIsLogin(false)}}>Sign Up</Button>
        </Flex>
       

      <FormControl mt={4} isRequired isInvalid={isError}>
        <FormLabel>Email</FormLabel>
        <Input placeholder='Email' value={email} onChange={handleEmailChange}/>
        {isError ? 
(
  <FormErrorMessage>Email is required.</FormErrorMessage>
) :(
  <FormHelperText>
   Enter your email address
  </FormHelperText>
)}
      </FormControl>
      <FormControl mt={4} isRequired>
        <FormLabel>Password</FormLabel>
        <Input placeholder='Password' type='password' value={password} onChange={handlePasswordChange} />
       
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Confirm Password</FormLabel>
     
        <Input placeholder='Confirm Password' type="password" value={conPassword} onChange={(e)=>{setConPassword(e.target.value)}} isInvalid={conPassword!==password} />
        {conPassword!==password ? 
(
  <FormErrorMessage>Password should be Match</FormErrorMessage>
) :(
  <FormHelperText>
   Re Enter Password
  </FormHelperText>
)}
      </FormControl>
 
      <Button onClick={createUser}>{isLogin ? 'Login' : 'Sign Up'}</Button>
    </Box>
</Flex>

)
}