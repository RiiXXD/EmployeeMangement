
import React ,{useEffect,useState, }from 'react';
import { Grid ,Box, Heading,Text,Image,Flex,Spacer, Divider,Button,Select} from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps,keyframes } from '@chakra-ui/react'
import { useScroll,useAnimation,useTransform, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useToast } from '@chakra-ui/react'
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
  import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,useDisclosure,
  } from '@chakra-ui/react'
  import {FormControl,Input,FormLabel,FormHelperText,FormErrorMessage} from '@chakra-ui/react'

import {logOut} from "../Redux/Authentication/action";
export default function Dashboard(){
  const dispatch=useDispatch();
  const checkAuth = useSelector((store)=> store.authReducer.checkAuth)
  const token = useSelector((store)=> store.authReducer.token)

  const [employeeData,setEmployeeData]=useState({firstName:"",lastName:"",email:"",department:"",salary:""});
const navigate=useNavigate();
useEffect(()=>{
    if(!checkAuth){
    navigate("/");
    }
},[checkAuth]);
const toast = useToast()
const handleEmailChange = (e) =>  setEmployeeData((prev)=>({
  ...prev,
  email:e.target.value,
}))
const handleFirstNameChange = (e) => setEmployeeData((prev)=>({
  ...prev,
  firstName:e.target.value,
}))
const handleLastNameChange = (e) => setEmployeeData((prev)=>({
  ...prev,
  lastName:e.target.value,
}))
const handleDepartmentChange = (e) => setEmployeeData((prev)=>({
  ...prev,
  department:e.target.value,
}))
const handleSalaryChange = (e) => setEmployeeData((prev)=>({
  ...prev,
  salary:e.target.value,
}))
const { isOpen, onOpen, onClose } = useDisclosure()
const { isLogOpen} = useDisclosure()

const initialRef = React.useRef(null)
const finalRef = React.useRef(null)
const addEmployee=async(employeeData)=>
{
  const baseUrl="http://localhost:8080/";
    try{
        const res= await fetch(`${baseUrl}employee/employees`,{
          method: "POST",
          headers:{
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`,
          },
        body: JSON.stringify({...employeeData})})
       
      const data = await res.json();
      if(data)
      {toast({
        title: 'Employee Added',
        description: "We Have Added Employee To The Database.",
        status: 'success',
        duration: 2000,
        isClosable: true,
      })}
      console.log(data);
    }
      
      catch(err) {
        console.log(err);
      }
}

return(
 

    <Box>
        <Heading align="left" m="1em">Employee Mangement Software</Heading>
        <Flex mx="1em" justify="space-between" align="center" w="20%">
        <Button onClick={onOpen}>Add Employee</Button>
        <Spacer/>

        <Button onClick={()=>{dispatch(logOut());}}>Logout</Button>
        </Flex>
        <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef} placeholder='First name' onChange={handleFirstNameChange} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder='Last name' onChange={handleLastNameChange}/>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input placeholder='Email' onChange={handleEmailChange} />
            </FormControl>
            
            <FormControl mt={4}>
              <FormLabel>Department</FormLabel>
              <Select placeholder='Select option' onChange={handleDepartmentChange}>
  <option value='Tech'>Tech</option>
  <option value='Marketing'> Marketing</option>
  <option value='Operations'> Operations </option>
</Select>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Salary</FormLabel>
              <Input placeholder='Last name' type="number" onChange={handleSalaryChange}/>
            </FormControl>
            
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={addEmployee}>
              Add
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
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