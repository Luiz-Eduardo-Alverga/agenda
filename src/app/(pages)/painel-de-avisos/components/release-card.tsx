'use-client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FolderOpen } from 'lucide-react'

interface ReleaseCardProps {
  title: string
  version: string
  releaseDate: string
}

export function ReleaseCard({ releaseDate, title, version }: ReleaseCardProps) {
  return (
    <Card className="cursor-pointer flex flex-col h-full">
      <CardHeader className="flex justify-between">
        <CardTitle className="font-semibold">{title}</CardTitle>
        <FolderOpen className="w-4 h-4 text-sky-500" />
      </CardHeader>
      <CardContent className="flex flex-col flex-grow justify-end">
        <span className="font-bold text-lg">{version}</span>
        <span className="text-xs text-zinc-400">
          Previsão liberação: {releaseDate}
        </span>
      </CardContent>
    </Card>
  )
}
