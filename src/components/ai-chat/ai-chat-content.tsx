import { Button } from '../ui/button'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import Image from 'next/image'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { useEffect } from 'react'
import { Message } from './ai-chat'

interface AIChatContentProps {
  messages: Message[]
  isTyping: boolean
  chatContainerRef: React.RefObject<HTMLDivElement>
}

export function AIChatContent({
  messages,
  isTyping,
  chatContainerRef,
}: AIChatContentProps) {
  useEffect(() => {
    localStorage.setItem('chat-messages', JSON.stringify(messages))
  }, [messages])

  return (
    <div
      ref={chatContainerRef}
      className="h-[350px] sm:h-[480px] chat-max-h-sm bg-muted dark:bg-background p-4 overflow-y-auto border"
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
              className={`px-3 py-2  max-w-[80%] break-words ${
                msg.author === 'user'
                  ? 'bg-primary text-white self-end ml-auto rounded-l-2xl rounded-tr-2xl'
                  : 'bg-white secondary dark:bg-secondary text-black dark:text-white self-start mr-auto rounded-r-2xl rounded-tl-2xl'
              }`}
            >
              <>
                <ReactMarkdown
                  components={{
                    img: ({ src, alt }) => {
                      if (!src || !/^https?:\/\//.test(src)) return null

                      return (
                        <Image
                          width={250}
                          height={250}
                          src={`/api/image-proxy?url=${encodeURIComponent(src)}`}
                          alt={alt || 'imagem'}
                          className="max-w-full h-auto rounded-md my-4 border"
                        />
                      )
                    },
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
                                  <li className="bg-secondary dark:bg-white  text-primary truncate p-1 rounded-md cursor-pointer">
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
                                <TooltipContent className="max-w-96">
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

          {isTyping && (
            <div className="bg-white dark:bg-secondary text-black dark:text-white px-3 py-2 rounded-r-xl rounded-tl-xl self-start mr-auto max-w-[80%] flex gap-1 items-center animate-pulse">
              <span
                className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                style={{ animationDelay: '0ms' }}
              ></span>
              <span
                className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                style={{ animationDelay: '150ms' }}
              ></span>
              <span
                className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                style={{ animationDelay: '300ms' }}
              ></span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
