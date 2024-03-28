
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
import Login from "../Components/Login"
import Sign from "../Components/Sign"

export default function Home(){
  const dispatch=useDispatch();
  const [isLogin,setIsLogin]=useState(true);

return(

<Flex justify={"center"} alignItems={"center"} w="100%" h="100vh">
    <Box>
    <Heading>{isLogin ? 'Login' : 'Sign Up'}</Heading>

        <Flex>
            <Button _hover={isLogin ? 'blue':'white' } bg={isLogin ? 'blue':'white' } onClick={()=>{setIsLogin(true)}}>Login</Button>
            <Button  _hover={isLogin ? 'blue':'white' } bg={isLogin ? 'white' : 'blue'} onClick={()=>{setIsLogin(false)}}>Sign Up</Button>
        </Flex>
       
        {isLogin ? <Login/>: <Sign/>}
    </Box>
</Flex>

)
}