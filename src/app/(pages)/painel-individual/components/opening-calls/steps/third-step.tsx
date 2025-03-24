import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { ArrowLeft, Check } from 'lucide-react'
import { InputCalendar } from '@/components/input-calendar'

interface ThirdStepOpeningCallsProps {
  setStep: (step: number) => void
  setProgres: (progress: number) => void
}

export function ThirdStepOpeningCalls({
  setStep,
  setProgres,
}: ThirdStepOpeningCallsProps) {
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

      <InputCalendar />

      <div className="ml-auto space-x-2">
        <Button
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
