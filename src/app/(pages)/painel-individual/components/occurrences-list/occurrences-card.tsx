import { OccurrencesDetailsSheet } from '@/components/occurrences-details-sheet'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Sheet, SheetTrigger } from '@/components/ui/sheet'

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
    urgente: {
      text: 'Urgente',
      bg: 'bg-red-500',
      hover: 'hover:bg-red-500/90',
      textColor: 'text-white',
    },
    imediato: {
      text: 'Imediato',
      bg: 'bg-blue-500',
      hover: 'hover:bg-blue-500/90',
      textColor: 'text-white',
    },
    franquia: {
      text: 'Franquia',
      bg: 'bg-green-500',
      hover: 'hover:bg-green-500/90',
      textColor: 'text-white',
    },
  }[occurrenceType]

  const truncatedDescription =
    description.length > 116
      ? description.substring(0, 56) + '...'
      : description

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Card className="px-0 sm:mr-2 py-2 gap-2  cursor-pointer hover:bg-muted/50">
          <CardHeader className="flex justify-between">
            <CardTitle className="text-sm font-medium">{title}</CardTitle>
            <span className="text-xs text-zinc-500">{hours}</span>
          </CardHeader>

          <CardContent>
            <span className="text-xs text-zinc-500">
              {truncatedDescription}
            </span>
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
                <Badge
                  variant="outline"
                  className={`${occurrenceBadge.bg} ${occurrenceBadge.hover} ${occurrenceBadge.textColor}`}
                >
                  {occurrenceBadge.text}
                </Badge>
              </div>
            )}
          </CardFooter>
        </Card>
      </SheetTrigger>

      <OccurrencesDetailsSheet />
    </Sheet>
  )
}
