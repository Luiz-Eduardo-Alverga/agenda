import { Separator } from '@/components/ui/separator'
import { ReleaseCard } from './components/release-card'
import { AnnouncementCard } from './components/announcement-card'
import { BirthdayCard } from './components/birthday-card'
import { Metadata } from 'next'

const releaseData = [
  { title: 'Softshop', releaseDate: '22/03/2025', version: '9.17.0' },
  { title: 'Softshop Caixa', releaseDate: '28/03/2025', version: '8.33.0' },
  { title: 'Emissor NFe', releaseDate: '29/03/2025', version: '9.15.0' },
  { title: 'Selfhost', releaseDate: '01/04/2025', version: '2.4.0' },
]

export const metadata: Metadata = {
  title: 'Avisos',
}

export default async function NoticeBoard() {
  return (
    <div className="space-y-2">
      <h1 className="text-xl font-bold">Painel de aviso</h1>

      <Separator />

      <div className="space-y-2">
        <h2 className="font-medium text-lg">Liberações</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {releaseData.map((release, index) => (
            <ReleaseCard
              key={index}
              title={release.title}
              releaseDate={release.releaseDate}
              version={release.version}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <BirthdayCard />
        <AnnouncementCard />
      </div>
    </div>
  )
}
