import { DialogClose } from '@/components/ui/dialog'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { ArrowRight, X } from 'lucide-react'
interface FirstStepOpeningCallsProps {
  setStep: (step: number) => void
  setProgres: (progress: number) => void
}

export function FirstStepOpeningCalls({
  setStep,
  setProgres,
}: FirstStepOpeningCallsProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="space-y-1">
        <Label>Tipo</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Canal"></SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="whatsapp">Whatsapp</SelectItem>
            <SelectItem value="telefone">Telefone</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1">
        <Label>Solicitante</Label>
        <Input placeholder="Informe o nome do solicitante" />
      </div>

      <div className="space-y-1">
        <Label>Telefone</Label>
        <Input placeholder="Informe o telefone do cliente" />
      </div>

      <div className="space-y-1">
        <Label>Acesso</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue
              defaultValue="anydesk"
              placeholder="Canal"
            ></SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="anydesk">Anydesk</SelectItem>
            <SelectItem value="teamviewe">Team Viewer</SelectItem>
            <SelectItem value="aeroadmin">Aero admin</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1">
        <Label>ID/IP</Label>
        <Input className="" />
      </div>

      <div className="mt-2 ml-auto space-x-2">
        <DialogClose asChild>
          <Button variant={'outline'}>
            <X />
            Cancelar
          </Button>
        </DialogClose>
        <Button
          onClick={() => {
            setStep(2)
            setProgres(66)
          }}
        >
          <ArrowRight />
          Prosseguir
        </Button>
      </div>
    </div>
  )
}
