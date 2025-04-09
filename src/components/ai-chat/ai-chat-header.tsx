import { Trash } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../ui/button'

interface AIChatHeaderProps {
  setMessages: (args: []) => void
}

export function AIChatHeader({ setMessages }: AIChatHeaderProps) {
  return (
    <div className="flex items-center gap-4 bg-primary p-2 rounded-t-lg w-full">
      <Image
        src="https://blipmediastore.blob.core.windows.net/public-medias/Media_8cbed63d-64a5-432a-b642-c1ee773c5441"
        alt="Chat Icon"
        width={40}
        height={40}
        className="rounded-full"
      />
      <div className="flex flex-col">
        <span className="text-xl text-white">SoftcomMind</span>
        <span className="text-white">Seu assistente inteligente</span>
      </div>

      <div className="ml-auto pr-2">
        <Button onClick={() => setMessages([])} className="cursor-pointer">
          <Trash className=" !w-6 !h-6" />
        </Button>
      </div>
    </div>
  )
}
