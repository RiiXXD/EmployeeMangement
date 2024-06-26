import { SIGN_SUCCESS,SIGN_REQUEST,SIGN_ERROR, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS,LOGOUT } from "./action-type"

const baseUrl="http://localhost:8080/";

export const sign=(formData)=>async (dispatch) =>{
    dispatch({type:SIGN_REQUEST})

    try{
        const res= await fetch(`${baseUrl}user/sign`,{
          method: "POST",
          headers:{
            "Content-Type": "application/json"
          },
          body: JSON.stringify({...formData})
    })
    const data = await res.json();
      console.log(data.user);
      dispatch({type:SIGN_SUCCESS, payload:data.user})
    }
    catch(err){
        dispatch({type:SIGN_ERROR,payload:err})

        
    }
   
}

export const logOut=()=>(dispatch)=>{
  dispatch({type:LOGOUT})
  localStorage.removeItem('token');
  
}

export const login=({email,password})=>async(dispatch)=>{
   

 try{ 
  dispatch({type:LOGIN_REQUEST})
  const res= await fetch(`${baseUrl}user/login`,{
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
  body: JSON.stringify({email,password})
})

const data = await res.json();

dispatch({type:LOGIN_SUCCESS,payload:data})
console.log(data);
}
catch(e){
  dispatch({type:LOGIN_FAILURE,payload:e})

}
}
