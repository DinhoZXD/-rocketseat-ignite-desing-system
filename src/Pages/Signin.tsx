import { Checkbox } from "@radix-ui/react-checkbox";
import { Envelope,Lock } from "phosphor-react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";
import { Logo } from "../Logo";
import { FormEvent, useState } from "react";
import axios from 'axios';

export function SingIn (){
    const [isUserSignedIn,setIsUserSignedIn] = useState(false)

    async function handleSignIn(event:FormEvent){
        
        event.preventDefault()

       await axios.post('/sessions',{
            email:'sads@ssa.com',
            password:'12345678'
        })
        setIsUserSignedIn(true)
    }

    return (
        <div className='w-screen h-screen flex-col bg-gray-900 flex items-center justify-center text-gray-100'>
         
         <header className=' flex flex-col items-center justify-center'>
          
          <Logo />
         
          <Heading size='lg' className='mt-4' >
            Ignite Lab
          </Heading>
    
          <Text size='lg' className='text-gray-400 mt-1'>
             Faça login e comece a usar!
          </Text>
          </header>
    
          <form onSubmit={handleSignIn} className='flex flex-col items-stretch gap-4 w-full max-w-sm mt-10' >
            
            {isUserSignedIn && <Text> Login realizado com sucesso</Text>}

            <label htmlFor="email" className='flex flex-col gap-3'> 
            <Text className='font-semibold'> Endereço de Email</Text>
            <TextInput.Root>
    
              <TextInput.Icon>
                 <Envelope></Envelope>
    
              </TextInput.Icon>
    
                  <TextInput.Input type="email" id='email' placeholder='Digite seu e-mail'>
    
                  </TextInput.Input>
    
              </TextInput.Root>
    
              </label>
            
            <label htmlFor="password" className=''>
                
            <TextInput.Root>
    
              <TextInput.Icon>
              <Lock/>
    
              </TextInput.Icon>
    
                <TextInput.Input type="password" id='password' placeholder='**********'>
    
              </TextInput.Input>
    
                </TextInput.Root>
            
            
            
            </label>
    
            <label htmlFor="remember" className='flex items-center gap-8'>
              <Checkbox id='remenber'></Checkbox>
    
              <Text size='sm' className="text-gray-200">Lembrar de mim por 30 dias</Text>
            </label>
            <Button type="submit" className='mt-4' > Entrar na Plataforma</Button>
          </form>
          
            <footer className=' flex flex-col items-center gap-4 mt-8'>
                <Text asChild size='sm'>
    
                <a href="" className='text-gray-400 underline hover:text-gray-200'>esqueceu sua senha?</a>
                
                </Text>
    
                <Text asChild size='sm'>
    
                <a href="" className='text-gray-400 underline  hover:text-gray-200'>nao possui conta? Crie agora</a>
                
                </Text>
            </footer>
    
          
        </div>
      )
    }
    
    
