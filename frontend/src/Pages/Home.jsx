
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
  const [isLogin,setIsLogin]=useState(true);

const checkAuth = useSelector((store)=> store.authReducer.checkAuth)
const user = useSelector((store)=> store.authReducer.user)

const navigate=useNavigate();
useEffect(()=>{
    if(checkAuth){
   
    localStorage.setItem('token', user.token);

        navigate("/dashboard");

    }
},[checkAuth]);
return(

<Flex justify={"center"} alignItems={"center"} w="100%" h="100vh" >
    <Box boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} w="30%" p="2em 1em">
    <Heading>{isLogin ? 'Login' : 'Sign Up'}</Heading>

        <Flex justify={"center"} alignItems={"center"} w="100%" mt="0.5em"  >
            <Button _hover={isLogin ? 'blue':'white' } bg={isLogin ? 'blue':'white' } onClick={()=>{setIsLogin(true)}}>Login</Button>
            <Button  _hover={isLogin ? 'blue':'white' } bg={isLogin ? 'white' : 'blue'} onClick={()=>{setIsLogin(false)}}>Sign Up</Button>
        </Flex>
       
        {isLogin ? <Login/>: <Sign/>}
    </Box>
</Flex>

)
}