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


export default function Sign(){
  const dispatch=useDispatch();

const[conPassword,setConPassword]=useState();
const[email,setEmail]=useState();
const[password,setPassword]=useState();
const isError=(email==="")
const [formData,setFormData]=useState({
  email:"",
  password:"",
})
const createUser=()=>{
  // dispatch(sign(formData));
  
  if(formData.email!=="" && formData.password!=="" && conPassword!==""){
    if(conPassword===password){
        console.log(formData);

      }
      else
      console.log("Password not Matched!");
      
  }
else
console.log("Fill all the fields",formData,conPassword,password);
}  

const handleEmailChange = (e) =>  setFormData((prev)=>({
  ...prev,
  email:e.target.value,
}))
const handlePasswordChange = (e) => {setFormData((prev)=>({
  ...prev,
  password:e.target.value,
})); 
setPassword(e.target.value);}
return(
    <Box>
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
    <Input placeholder='Password' type="password" value={password} onChange={handlePasswordChange} />
   
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

  <Button mt="4" onClick={createUser}>Sign Up</Button>

    </Box>
  
)
}