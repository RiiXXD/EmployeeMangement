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
import{ login } from "../Redux/Authentication/action";


export default function Login(){
  const dispatch=useDispatch();

const[conPassword,setConPassword]=useState();
const[email,setEmail]=useState();
const[password,setPassword]=useState();
const isError=(email==="")

const [formData,setFormData]=useState({
  email:"",
  password:"",
})
const LoginUser=()=>{
  dispatch(login(formData));
  if(formData.email!=="" && formData.password!=="")
  console.log(formData);
else
console.log("Fill all the fields");

}  

const handleEmailChange = (e) =>  setFormData((prev)=>({
  ...prev,
  email:e.target.value,
}))
const handlePasswordChange = (e) => setFormData((prev)=>({
  ...prev,
  password:e.target.value,
}))
return(
    <Box minH={"45vh"}>
  <FormControl mt={4} isRequired isInvalid={isError}>
    <FormLabel>Email</FormLabel>
    <Input placeholder='Email' value={email} onChange={handleEmailChange}/>
    {isError ? 
(
<FormErrorMessage textAlign={"left"}>Email is required.</FormErrorMessage>
) :(
<FormHelperText textAlign={"left"}>
Enter your email address
</FormHelperText>
)}
  </FormControl>
  <FormControl mt={4} isRequired>
    <FormLabel>Password</FormLabel>
    <Input placeholder='Password' type='password' value={password} onChange={handlePasswordChange} />
   
  </FormControl>
  

  <Button mt="4" onClick={LoginUser}>Login</Button>

    </Box>
  
)
}