import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

interface OccurrencesCardProps {
  title: string
  hours: string
  description: string
  startHour?: string
  endHour?: string
  occurrenceType: 'urgente' | 'imediato' | 'franquia'
}

export function OccurrencesCard({
  description,
  hours,
  title,
  endHour,
  startHour,
  occurrenceType,
}: OccurrencesCardProps) {
  const occurrenceBadge = {
    urgente: { text: 'Urgente', bg: 'bg-red-500' },
    imediato: { text: 'Imediato', bg: 'bg-blue-500' },
    franquia: { text: 'Franquia', bg: 'bg-green-500' },
  }[occurrenceType]

  const truncatedDescription =
    description.length > 116
      ? description.substring(0, 113) + '...'
      : description

  return (
    <Card className="mt-4 px-0 sm:mr-4 py-2 gap-2  cursor-pointer hover:bg-zinc-100">
      <CardHeader className="flex justify-between">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <span className="text-xs text-zinc-500">{hours}</span>
      </CardHeader>

      <CardContent>
        <span className="text-xs text-zinc-500">{truncatedDescription}</span>
      </CardContent>

      <CardFooter className="flex items-center">
        {startHour && (
          <div className="space-x-1">
            <Badge>{startHour}</Badge>
            {endHour && <Badge>{endHour}</Badge>}
          </div>
        )}

        {occurrenceBadge && (
          <div className="ml-auto">
            <Badge className={occurrenceBadge.bg}>{occurrenceBadge.text}</Badge>
          </div>
        )}
      </CardFooter>
    </Card>
  )
}
