import { Metadata } from 'next'
import { CustomerList } from './components/customer-list'
import { OccurrencesList } from './components/occurrences-list'

export const metadata: Metadata = {
  title: 'Ocorrências',
}

export default function IndividualPanel() {
  return (
    <div className="space-y-2 flex flex-col flex-1">
      <h1 className="text-xl font-bold">Painel Individual</h1>

      <div className="flex flex-col sm:flex-row w-full h-full">
        <OccurrencesList />

        <div className="flex-1 border-t-1">
          <CustomerList />
        </div>
      </div>
    </div>
  )
}
