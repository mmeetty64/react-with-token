import { getSuggestedQuery } from '@testing-library/react';
import React, {useContext, useState} from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Context } from '../../Context/ContextWrapper';
import Service from '../../Services/Service';


const Login = () => {

  const [address, setAddress] = useState<string>('')
 
  const {getUser} = useContext(Context)

  const navigation = useHistory()
  const loginUserHandler = async(e: any) => {
      e.preventDefault();
      const { target } = e;
      const data = await Service.auth(target[1].value, target[2].value, address) 
      if(data){
        getUser({address, ...data});
        navigation.push('/Home');   
        console.log(data)
      }
   }
  return (
    <Form onSubmit={loginUserHandler} style={{width: "30%", margin: "0 auto"}}>
      <h1 className="text-center">Sing in</h1>
      <Form.Group className="text-center mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Address" onChange={({target}) => setAddress(target.value)}/>
      </Form.Group>

      <Form.Group className="text-center mb-3">
        <Form.Label>Login</Form.Label>
        <Form.Control type="text" placeholder="Login"/>
      </Form.Group>

      <Form.Group className="text-center mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}
export default Login;
