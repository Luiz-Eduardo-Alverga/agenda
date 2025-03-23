import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { ArrowLeft, Check, Calendar as CalendarIcon } from 'lucide-react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { format, parse } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface ThirdStepOpeningCallsProps {
  setStep: (step: number) => void
}

export function ThirdStepOpeningCalls({ setStep }: ThirdStepOpeningCallsProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [inputValue, setInputValue] = useState('')

  // Função para formatar a data automaticamente enquanto o usuário digita
  const formatDate = (value: string) => {
    const numbers = value.replace(/\D/g, '') // Remove tudo que não for número
    if (numbers.length <= 2) return numbers
    if (numbers.length <= 4) return `${numbers.slice(0, 2)}/${numbers.slice(2)}`
    return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}/${numbers.slice(4, 8)}`
  }

  // Atualiza o campo enquanto o usuário digita
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = event.target.value
    setInputValue(formatDate(rawValue))
  }

  // Valida e converte a data ao sair do campo
  const handleBlur = () => {
    if (inputValue.length === 10) {
      const parsedDate = parse(inputValue, 'dd/MM/yyyy', new Date())
      if (!isNaN(parsedDate.getTime())) {
        setSelectedDate(parsedDate)
      } else {
        setInputValue('') // Reseta se for inválida
      }
    }
  }

  // Atualiza a data ao selecionar no calendário
  const handleSelectDate = (date: Date | undefined) => {
    if (date) {
      setSelectedDate(date)
      setInputValue(format(date, 'dd/MM/yyyy')) // Atualiza o input
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="space-y-1">
        <Label>Motivo da Ocorrência</Label>
        <Textarea className="max-h-[300px]" />
      </div>

      <div className="space-y-1">
        <Label>Suporte</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione o nome do técnico" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="APOIO N1">APOIO N1</SelectItem>
            <SelectItem value="Jesus">Jesus</SelectItem>
            <SelectItem value="Patrick">Patrick</SelectItem>
            <SelectItem value="José Carlos">José Carlos</SelectItem>
            <SelectItem value="Barbosa">Barbosa</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1">
        <Label>Data</Label>
        <div className="relative">
          <Popover>
            <PopoverTrigger asChild>
              <div>
                <Input
                  value={inputValue}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  maxLength={10}
                  placeholder="DD/MM/AAAA"
                  className="pr-10"
                />
                <CalendarIcon className="absolute right-2 top-2.5 h-5 w-5 text-gray-500 cursor-pointer" />
              </div>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-auto p-0">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={handleSelectDate}
                locale={ptBR}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="ml-auto space-x-1">
        <Button variant={'outline'} onClick={() => setStep(2)}>
          <ArrowLeft />
          Voltar
        </Button>

        <Button>
          <Check />
          Confirmar
        </Button>
      </div>
    </div>
  )
}
