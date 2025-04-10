'use client'

import { useState, useRef, useEffect } from 'react'

import { FaqResponse, getFaqs } from '@/lib/services/get-faqs'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { AIChatHeader } from './ai-chat-header'

import { AIChatContent } from './ai-chat-content'
import { AIChatForm } from './ai-chat-form'

const getFaqsSchema = z.object({
  question: z.string().min(1, 'Digite uma pergunta.'),
})

type GetFaqsSchema = z.infer<typeof getFaqsSchema>

export type Message = {
  author: 'user' | 'ai'
  content: string
  relatedFaqs?: FaqResponse
}

export function AIChat() {
  const { setValue } = useForm<GetFaqsSchema>({
    resolver: zodResolver(getFaqsSchema),
  })

  const [isTyping, setIsTyping] = useState(false)

  const [shouldScroll, setShouldScroll] = useState(false)

  const chatContainerRef = useRef<HTMLDivElement | null>(null)

  const [messages, setMessages] = useState<Message[]>(() => {
    if (typeof window === 'undefined') return []
    try {
      const saved = localStorage.getItem('chat-messages')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('chat-messages', JSON.stringify(messages))
  }, [messages])

  useEffect(() => {
    if (shouldScroll && chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
      setShouldScroll(false)
    }
  }, [messages, shouldScroll])

  async function handleGetFaqs(question: string) {
    if (!question.trim()) return

    setShouldScroll(true)
    setMessages((prev) => [...prev, { author: 'user', content: question }])
    setValue('question', '')
    setIsTyping(true)

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
      <AIChatHeader setMessages={setMessages} />

      <AIChatContent
        isTyping={isTyping}
        messages={messages}
        chatContainerRef={chatContainerRef}
      />

      <AIChatForm onSend={handleGetFaqs} isTyping={isTyping} />
    </div>
  )
}
