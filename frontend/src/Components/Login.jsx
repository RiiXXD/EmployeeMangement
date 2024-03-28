const [isLogin,setIsLogin]=useState(true);
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
  console.log(formData);
}  

const handleEmailChange = (e) =>  setFormData((prev)=>({
  ...prev,
  email:e.target.value,
}))
const handlePasswordChange = (e) => setFormData((prev)=>({
  ...prev,
  password:e.target.value,
}))