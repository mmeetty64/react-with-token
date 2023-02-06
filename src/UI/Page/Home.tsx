import React, { useContext } from 'react'
import { Context } from '../../Context/ContextWrapper';

const Home = () => {

  const {user} = useContext(Context)

  return (
    <div>
      {
        user.login == "inv1" || "inv2" || "inv3" ? 
        (
          <>
            <h1 className={'text-center mt-5'}>Ваш логин: {user.login}</h1>
            <h1 className={'text-center mt-5'}>Ваш баланс: {user.balance}</h1>
            <h1 className={'text-center mt-5'}>Ваш адрес: {user.address}</h1>
          </>  
        ) : undefined
      },
      {
        user.deveveloper === true ?
        (
          <>
            <h1 className={'text-center mt-5'}>Ваш логин: {user.login}</h1>
            <h1 className={'text-center mt-5'}>Ваш баланс: {user.balance}</h1>
            <h1 className={'text-center mt-5'}>Ваш адрес: {user.address}</h1>
            <h1 className={'text-center mt-5'}>Вы разработчик {user.address}</h1>
          </>
        ) : undefined
      },
      {
         
      }
      
    </div>
    
  )
}
export default Home;