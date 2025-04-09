'use client'

import { useState, useRef } from 'react'
import { SendHorizonal } from 'lucide-react'

import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { FaqResponse, getFaqs } from '@/lib/services/get-faqs'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import { AIChatHeader } from './ai-chat-header'
import Image from 'next/image'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const getFaqsSchema = z.object({
  question: z.string().min(1, 'Digite uma pergunta.'),
})

type GetFaqsSchema = z.infer<typeof getFaqsSchema>

type Message = {
  author: 'user' | 'ai'
  content: string
  relatedFaqs?: FaqResponse
}

export function AIChat() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm<GetFaqsSchema>({
    resolver: zodResolver(getFaqsSchema),
  })

  const chatContainerRef = useRef<HTMLDivElement | null>(null)

  const [messages, setMessages] = useState<Message[]>([])

  async function handleGetFaqs({ question }: GetFaqsSchema) {
    if (!question.trim()) return

    setMessages((prev) => [...prev, { author: 'user', content: question }])
    setValue('question', '')

    try {
      const response = await getFaqs({ question })

      setMessages((prev) => [
        ...prev,
        {
          author: 'ai',
          content: response.resposta_refinada,
          relatedFaqs: response,
        },
      ])
    } catch (error) {
      console.error(error)
      setMessages((prev) => [
        ...prev,
        { author: 'ai', content: 'Erro ao buscar resposta. 😓' },
      ])
    }
  }

  return (
    <div className="flex flex-col">
      <AIChatHeader />

      <div
        ref={chatContainerRef}
        className="h-[350px] sm:h-[500px] bg-muted dark:bg-background p-4 overflow-y-auto border"
      >
        {messages.length === 0 ? (
          <div className="text-sm text-muted-foreground text-center mt-4">
            Envie uma pergunta para começar. 🤖
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`px-3 py-2 rounded-xl max-w-[80%] break-words ${
                  msg.author === 'user'
                    ? 'bg-primary text-white self-end ml-auto rounded-l-xl rounded-tr-xl'
                    : 'bg-secondary text-black dark:text-white self-start mr-auto rounded-r-xl rounded-tl-xl'
                }`}
              >
                <>
                  <ReactMarkdown
                    components={{
                      img: ({ src, alt }) => (
                        <Image
                          width={250}
                          height={250}
                          src={`/api/image-proxy?url=${encodeURIComponent(src ?? '')}`}
                          alt={alt || 'imagem'}
                          className="max-w-full h-auto rounded-md my-4 border"
                        />
                      ),
                    }}
                  >
                    {msg.content}
                  </ReactMarkdown>

                  {msg.relatedFaqs && (
                    <div className="mt-4">
                      {msg.relatedFaqs.faqs_relacionados.length > 0 && (
                        <>
                          <p className="font-semibold mb-2">
                            📚 FAQs Relacionados:
                          </p>
                          <ul className="list-none list-inside space-y-1">
                            {msg.relatedFaqs.faqs_relacionados.map((faq) => (
                              <TooltipProvider key={faq.id}>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <li className="bg-white text-primary truncate p-1 rounded-md cursor-pointer">
                                      <Link
                                        href={faq.link_faq}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="no-underline"
                                      >
                                        🔹 {faq.nome}
                                      </Link>
                                    </li>
                                  </TooltipTrigger>
                                  <TooltipContent className="max-w-64">
                                    <p>{faq.nome}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            ))}
                          </ul>
                        </>
                      )}

                      <div className="mt-4">
                        <Link
                          href={msg.relatedFaqs.link_faq}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary"
                        >
                          <Button className="cursor-pointer rounded-full">
                            🔗 Ver FAQ original
                          </Button>
                        </Link>
                      </div>
                    </div>
                  )}
                </>
              </div>
            ))}
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit(handleGetFaqs)}>
        <div className="flex bg-white dark:bg-black h-18 items-center border rounded-b-lg">
          <Input
            autoComplete="off"
            className="border-0 w-full h-full p-4 text-black dark:text-white dark:placeholder:text-muted-foreground focus-visible:border-0 focus-visible:ring-0"
            placeholder="Digite sua mensagem aqui"
            {...register('question')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                handleSubmit(handleGetFaqs)()
              }
            }}
          />

          <div className="w-14 pr-2">
            <Button
              className="rounded-full w-12 h-12 cursor-pointer"
              type="submit"
              disabled={isSubmitting}
            >
              <SendHorizonal className="!h-6 !w-6" />
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
