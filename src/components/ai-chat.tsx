'use client'

import { useState, useRef, useEffect } from 'react'

import { SendHorizonal } from 'lucide-react'
import Image from 'next/image'
import { Button } from './ui/button'

export function AIChat() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<string[]>([])

  const chatContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = () => {
    if (!message.trim()) return
    setMessages((prev) => [...prev, message])
    setMessage('')
  }

  return (
    <div className="flex flex-col ">
      <div className="flex items-center gap-4 bg-primary p-2 rounded-t-lg w-full ">
        <Image
          src="https://blipmediastore.blob.core.windows.net/public-medias/Media_8cbed63d-64a5-432a-b642-c1ee773c5441"
          alt="Chat Icon"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <span className="text-xl text-white">Softmind</span>
          <span className="text-white">Online</span>
        </div>
      </div>

      <div
        ref={chatContainerRef}
        className="h-[350px] sm:h-[500px] bg-muted dark:bg-background p-4 overflow-y-auto border"
      >
        {messages.length === 0 ? (
          <div className="text-sm text-muted-foreground text-center mt-4"></div>
        ) : (
          <div className="flex flex-col gap-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className="bg-primary text-white px-3 py-2 rounded-l-xl rounded-tr-xl self-end ml-auto max-w-[80%] break-words"
              >
                {msg}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex bg-white dark:bg-black h-18 items-center border rounded-b-lg">
        <input
          className="w-full h-full text-black dark:text-white dark:placeholder:text-white focus:outline-none focus:ring-0 p-4"
          placeholder="Digite sua mensagem aqui"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSend()
          }}
        />

        <div className="w-14 pr-2">
          <Button
            className="rounded-full w-12 h-12 cursor-pointer"
            onClick={handleSend}
          >
            <SendHorizonal className="!h-6 !w-6" />
          </Button>
        </div>
      </div>
    </div>
  )
}
