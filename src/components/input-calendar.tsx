import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { ptBR } from 'date-fns/locale'
import { useState } from 'react'
import { format, parse, isBefore } from 'date-fns'

export function InputCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [inputValue, setInputValue] = useState('')
  const [invalidDate, setIsInvalidDate] = useState(false)

  const formatDate = (value: string) => {
    const numbers = value.replace(/\D/g, '')
    if (numbers.length <= 2) return numbers
    if (numbers.length <= 4) return `${numbers.slice(0, 2)}/${numbers.slice(2)}`
    return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}/${numbers.slice(4, 8)}`
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = event.target.value
    setInputValue(formatDate(rawValue))
  }

  const handleBlur = () => {
    if (inputValue.length === 10) {
      const parsedDate = parse(inputValue, 'dd/MM/yyyy', new Date())
      const today = new Date()
      today.setHours(0, 0, 0, 0)

      if (!isNaN(parsedDate.getTime()) && !isBefore(parsedDate, today)) {
        setSelectedDate(parsedDate)
      } else {
        setIsInvalidDate(true)
        setSelectedDate(undefined)
        setInputValue('')
        setTimeout(() => {
          setIsInvalidDate(false)
        }, 2000)
      }
    }
  }

  const handleSelectDate = (date: Date | undefined) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    if (date && !isBefore(date, today)) {
      setSelectedDate(date)
      setInputValue(format(date, 'dd/MM/yyyy'))
    } else {
      setSelectedDate(undefined)
      setInputValue('')
    }
  }

  return (
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
            </div>
          </PopoverTrigger>
          <PopoverContent align="start" className="w-auto p-0">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleSelectDate}
              locale={ptBR}
              initialFocus
              disabled={{ before: new Date() }}
            />
          </PopoverContent>
        </Popover>
      </div>
      {invalidDate === true && (
        <span className="text-sm text-red-500">Data inválida</span>
      )}
    </div>
  )
}
