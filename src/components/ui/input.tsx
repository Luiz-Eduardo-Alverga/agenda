import * as React from 'react'
import { IMaskInput } from 'react-imask'
import { MaskedPattern } from 'imask'
import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  mask?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', mask, ...props }, ref) => {
    const inputClass = cn(
      'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-border flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
      'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
      'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
      className,
    )

    if (mask) {
      return (
        <IMaskInput
          {...(props as MaskedPattern)}
          mask={mask}
          type={type}
          inputRef={ref}
          className={inputClass}
          overwrite
        />
      )
    }

    return <input ref={ref} type={type} className={inputClass} {...props} />
  },
)

Input.displayName = 'Input'
export { Input }
