import {clsx} from 'clsx'
import {Slot} from '@radix-ui/react-slot'
import { ButtonHTMLAttributes, ReactNode } from 'react';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  
   children:ReactNode
   asChild?:boolean
}

export function Button({ children,asChild,className,...props}: ButtonProps) {
  const Comp = asChild ? Slot:'button'
  
   return (
       <Comp className={clsx(
           ' text-center max-w-sm py-3 px-4 bg-cyan-500 w-full rounded font-semibold text-black text-sm  transition-colors hover:bg-cyan-300 focus:ring-2 ring-white',
            className,
       )}
       
       {...props}
       >{children}
       </Comp>
   )
}