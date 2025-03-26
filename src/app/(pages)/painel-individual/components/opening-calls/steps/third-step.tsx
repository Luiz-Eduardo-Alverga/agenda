'use client'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { ArrowLeft, Check, ChevronsUpDown } from 'lucide-react'
import { InputCalendar } from '@/components/input-calendar'
import { Input } from '@/components/ui/input'
import { useFormContext } from 'react-hook-form'
import { OpeningCallsSchema } from '..'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { useState, useRef, useEffect } from 'react'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { cn } from '@/lib/utils'

const technicians = [
  { id: 1, name: 'APOIO N1', label: 'APOIO N1' },
  { id: 2, name: 'Patrick', label: 'Patrick' },
  { id: 3, name: 'Barbosa', label: 'Barbosa' },
  { id: 4, name: 'Luiz', label: 'Luiz' },
  { id: 5, name: 'Jose Carlos', label: 'Jose Carlos' },
]

interface ThirdStepOpeningCallsProps {
  setStep: (step: number) => void
  setProgres: (progress: number) => void
}

export function ThirdStepOpeningCalls({
  setStep,
  setProgres,
}: ThirdStepOpeningCallsProps) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const { register, setFocus } = useFormContext<OpeningCallsSchema>()

  useEffect(() => {
    setFocus('reasonForCalls')
  })

  const triggerRef = useRef<HTMLButtonElement>(null)

  return (
    <div className="flex flex-col gap-2">
      <div className="space-y-1">
        <Label>Motivo da Ocorrência</Label>
        <Textarea className="max-h-[300px]" {...register('reasonForCalls')} />
      </div>

      <div className="space-y-1">
        <Label>Suporte</Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-between"
              role="combobox"
              aria-expanded={open}
              ref={triggerRef}
            >
              {value
                ? technicians.find((technical) => technical.name === value)
                    ?.label
                : 'Selecione um técnico'}
              <ChevronsUpDown />
            </Button>
          </PopoverTrigger>

          <PopoverContent
            className="p-0"
            style={{
              width: triggerRef.current
                ? `${triggerRef.current.offsetWidth}px`
                : 'auto',
            }}
          >
            <Command>
              <CommandInput placeholder="Pesquisa o nome do técnico" />
              <CommandList>
                <CommandEmpty>Não foram encontrados técnicos</CommandEmpty>
                <CommandGroup>
                  {technicians.map((technical) => (
                    <CommandItem
                      key={technical.id}
                      value={technical.name}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? '' : currentValue)
                        setOpen(false)
                      }}
                    >
                      <Check
                        className={cn(
                          'mr-2 h-4 w-4',
                          value === technical.name
                            ? 'opacity-100'
                            : 'opacity-0',
                        )}
                      />
                      {technical.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      <InputCalendar />

      <div className="space-y-1">
        <Label>Hora Marcada</Label>
        <Input mask="00:00" {...register('scheduledTime')} />
      </div>

      <div className="ml-auto space-x-2">
        <Button
          type="button"
          variant={'outline'}
          onClick={() => {
            setStep(2)
            setProgres(66)
          }}
        >
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
