
import React ,{useEffect,useState, }from 'react';
import { Grid ,Box, Heading,Text,Image,Flex,Spacer, Divider,Button} from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps,keyframes } from '@chakra-ui/react'
import { useScroll,useAnimation,useTransform, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


export default function Home(){
  const dispatch=useDispatch();
return(

    <Box>
        <Heading>Employee Mangement Software</Heading>
        <Flex>
        <Button>Add Employee</Button>
        <Button>Logout</Button>
        </Flex>
    
    </Box>
)
}