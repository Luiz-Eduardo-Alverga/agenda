'use-client'

interface AnnouncementCardProps {
  title: string
  date: string
  wasRead: boolean
}

export function AnnouncementItems({
  title,
  date,
  wasRead = false,
}: AnnouncementCardProps) {
  return (
    <div className="p-2 mb-4 grid grid-cols-[25px_1fr] items-start  last:mb-0 last:pb-0 cursor-pointer hover:bg-slate-100 hover:rounded-sm">
      {!wasRead ? (
        <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
      ) : (
        <div />
      )}

      <div className="space-y-1">
        <p className="text-sm font-medium leading-none">{title}</p>
        <p className="text-sm text-muted-foreground">{date}</p>
      </div>
    </div>
  )
}
