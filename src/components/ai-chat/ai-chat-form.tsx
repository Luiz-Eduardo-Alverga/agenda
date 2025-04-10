'use client'

import { SendHorizonal } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const getFaqsSchema = z.object({
  question: z.string().min(1, 'Digite uma pergunta.'),
})

type GetFaqsSchema = z.infer<typeof getFaqsSchema>

type Props = {
  onSend: (question: string) => void
  isTyping: boolean
}

export function AIChatForm({ onSend, isTyping }: Props) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm<GetFaqsSchema>({
    resolver: zodResolver(getFaqsSchema),
  })

  const handleFormSubmit = ({ question }: GetFaqsSchema) => {
    onSend(question)
    setValue('question', '')
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="flex bg-white dark:bg-black h-18 items-center border rounded-b-lg">
        <Input
          autoComplete="off"
          className="border-0 w-full h-full p-4 text-black dark:text-white dark:placeholder:text-muted-foreground focus-visible:border-0 focus-visible:ring-0"
          placeholder="Digite sua mensagem aqui"
          {...register('question')}
          disabled={isSubmitting || isTyping}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              handleSubmit(handleFormSubmit)()
            }
          }}
        />

        <div className="w-14 pr-2">
          <Button
            className="rounded-full w-12 h-12 cursor-pointer"
            type="submit"
            disabled={isSubmitting || isTyping}
          >
            <SendHorizonal className="!h-6 !w-6" />
          </Button>
        </div>
      </div>
    </form>
  )
}
