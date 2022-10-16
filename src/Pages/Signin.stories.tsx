import {Meta,StoryObj} from '@storybook/react'
import{within,userEvent,waitFor} from '@storybook/testing-library'
import{expect} from '@storybook/jest'
import { SingIn} from './Signin'
import {context, rest} from 'msw'


export default  {
    title: 'Pages/Sign in',
    component:SingIn,
    args:{}, 
    argTypes:{} ,
     parameters: {
        msw:{
            handlers:[
                rest.post('/sessions',(req,res)=>{
                    return res(context.json({
                        message:'login realizado'
                    }))
                })
            ]
        }
     }
} as Meta
export const Default:StoryObj = {
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement)

        userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'),'e.calos_13@outlook.com')
        userEvent.type(canvas.getByPlaceholderText('**********'),'12345678')
        
        userEvent.click(canvas.getByRole('button'))

        await waitFor (() => {

            return expect(canvas.getByText('Login realizado com sucesso')).toBeInTheDocument()
        })

        

    }

}