'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import Image from 'next/image'
import { AIChat } from './ai-chat'

export function FloatingChat() {
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setChatOpen((prev) => !prev)}
        className="fixed bottom-4 right-4 z-50 rounded-full bg-primary text-white p-2 shadow-lg hover:bg-primary/90 transition-all flex items-center justify-center"
        style={{ width: 56, height: 56 }}
      >
        {chatOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Image
            src="https://blipmediastore.blob.core.windows.net/public-medias/Media_8cbed63d-64a5-432a-b642-c1ee773c5441"
            alt="Chat Icon"
            width={40}
            height={40}
            className="rounded-full"
          />
        )}
      </button>

      {chatOpen && (
        <div className="fixed bottom-20 right-4 z-50  w-[300px] sm:w-[400px] max-h-[700px] bg-background s overflow-auto">
          <div className="text-sm">
            <AIChat />
          </div>
        </div>
      )}
    </>
  )
}
