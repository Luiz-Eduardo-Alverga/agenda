'use client'

import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { RefreshCcw, Search } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { OccurrencesCard } from './occurrences-card'
import toast, { Toaster } from 'react-hot-toast'

import { useEffect, useRef, useState } from 'react'

const occurrencesData = [
  {
    title: 'Arthur Frios',
    hours: 'Há 2 horas',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum earum quibusdam repellat et obcaecati facilis sit deleniti',
    startHour: '12:37',
    endHour: '13:47',
    occurrenceType: '',
  },
  {
    title: 'João Silva',
    hours: 'Há 3 horas',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum earum quibusdam repellat et obcaecati facilis sit deleniti',
    occurrenceType: 'imediato',
  },
  {
    title: 'Maria Oliveira',
    hours: 'Há 1 hora',
    description: 'Solicitação de franquia para novo serviço.',
    occurrenceType: 'franquia',
  },
  {
    title: 'Carlos Souza',
    hours: 'Há 4 horas',
    description: 'Cliente relatou problema de conexão.',
    startHour: '09:00',
    endHour: '10:15',
    occurrenceType: 'imediato',
  },
  {
    title: 'Ana Pereira',
    hours: 'Há 5 horas',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum earum quibusdam repellat et obcaecati facilis sit deleniti',
    occurrenceType: 'urgente',
  },
  {
    title: 'Lucas Andrade',
    hours: 'Há 6 horas',
    description: 'Atualização de sistema realizada com sucesso.',
    occurrenceType: 'franquia',
  },
  {
    title: 'Fernanda Costa',
    hours: 'Há 7 horas',
    description: 'Dúvida sobre cobrança enviada ao suporte.',
    occurrenceType: 'imediato',
  },
  {
    title: 'Fernanda Costa',
    hours: 'Há 7 horas',
    description: 'Dúvida sobre cobrança enviada ao suporte.',
    occurrenceType: 'imediato',
  },
]

export function OccurrencesList() {
  const [searchTerm, setSearchTerm] = useState('')
  const [tabValue, setTabValue] = useState('all')
  const hasShownToast = useRef(false)

  const filteredOccurrences = occurrencesData.filter((occ) => {
    const matchesTab = tabValue === 'open' ? !occ.endHour : true
    const matchesSearch = occ.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())

    return matchesTab && matchesSearch
  })

  useEffect(() => {
    const isSearchActive = searchTerm.trim() !== ''
    const isEmptyResult = filteredOccurrences.length === 0

    if (isSearchActive && isEmptyResult && !hasShownToast.current) {
      toast.error('Nenhuma ocorrência encontrada.')
      hasShownToast.current = true
    }

    if (!isEmptyResult) {
      hasShownToast.current = false
    }
  }, [searchTerm, filteredOccurrences.length])

  return (
    <div className="sm:w-[400px] flex flex-col h-[calc(100vh-108px)] sm:border-r border-t">
      <Toaster position="top-center" />
      <div className="flex items-center justify-between py-2">
        <h2 className="text-lg font-semibold">Ocorrências</h2>

        <Tabs
          className="pr-2"
          value={tabValue}
          onValueChange={(value) => setTabValue(value)}
        >
          <TabsList>
            <TabsTrigger className="cursor-pointer" value="all">
              Todas
            </TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="open">
              Abertas
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <Separator />

      <div className="flex items-center mt-3 sm:pr-2 gap-2">
        <div className="relative w-full">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
          <Input
            autoComplete="off"
            type="text"
            placeholder="Buscar ocorrência..."
            className="pl-10 pr-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <Button className="cursor-pointer h-9" variant={'outline'}>
          <RefreshCcw />
        </Button>
      </div>

      <div className="mt-4 overflow-y-auto space-y-2">
        {filteredOccurrences.map((occurrence, index) => (
          <OccurrencesCard
            key={index}
            title={occurrence.title}
            hours={occurrence.hours}
            description={occurrence.description}
            startHour={occurrence.startHour}
            endHour={occurrence.endHour}
            occurrenceType={
              occurrence.occurrenceType as 'urgente' | 'imediato' | 'franquia'
            }
          />
        ))}
      </div>
    </div>
  )
}
