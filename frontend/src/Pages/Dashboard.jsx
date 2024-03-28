
import React ,{useEffect,useState, }from 'react';
import { Grid ,Box, Heading,Text,Image,Flex,Spacer, Divider,Button} from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps,keyframes } from '@chakra-ui/react'
import { useScroll,useAnimation,useTransform, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

export default function Dashboard(){
  const dispatch=useDispatch();
return(

    <Box>
        <Heading align="left" m="1em">Employee Mangement Software</Heading>
        <Flex mx="1em" justify="space-between" align="center" w="20%">
        <Button >Add Employee</Button>
        <Spacer/>

        <Button>Logout</Button>
        </Flex>
        <TableContainer  m="1em">
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th isNumeric>No</Th>
        <Th>FirstName</Th>
        <Th >LastName</Th>
        <Th >Email</Th>
        <Th >Salary</Th>
        <Th >Date</Th>
        <Th >Action</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td isNumeric>1</Td>
        <Td>Rishita</Td>
        <Td>Mukherjee</Td>
        <Td >rishitaa.m@gmail.com</Td>
        <Td>$50000000</Td>
        <Td>03-02-2024</Td>
        <Td><Button size="sm">Edit</Button>
        <Button size="sm">Delete</Button></Td>
      </Tr>
    
    </Tbody>
    
  </Table>
</TableContainer>
    
    </Box>
)
}