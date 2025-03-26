'use client'

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
import { Controller, useFormContext } from 'react-hook-form'
import { OpeningCallsSchema } from '..'
import { useEffect } from 'react'
interface FirstStepOpeningCallsProps {
  setStep: (step: number) => void
  setProgres: (progress: number) => void
}

export function FirstStepOpeningCalls({
  setStep,
  setProgres,
}: FirstStepOpeningCallsProps) {
  const { register, control, setFocus } = useFormContext<OpeningCallsSchema>()

  useEffect(() => {
    setFocus('type')
  })

  return (
    <div className="flex flex-col gap-2">
      <div className="space-y-1">
        <Label>Tipo</Label>
        <Controller
          name="type"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Canal"></SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="whatsapp">Whatsapp</SelectItem>
                <SelectItem value="telefone">Telefone</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <div className="space-y-1">
        <Label>Solicitante</Label>
        <Input
          placeholder="Informe o nome do solicitante"
          {...register('applicant')}
        />
      </div>

      <div className="space-y-1">
        <Label>Telefone</Label>
        <Input
          mask={'(00) 0000-0000'}
          placeholder="Informe o telefone do cliente"
          {...register('phone')}
        />
      </div>

      <div className="space-y-1">
        <Label>Acesso</Label>
        <Controller
          name="access"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="w-full">
                <SelectValue
                  defaultValue="anydesk"
                  placeholder="Canal"
                ></SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="anydesk">Anydesk</SelectItem>
                <SelectItem value="teamviewer">Team Viewer</SelectItem>
                <SelectItem value="aeroadmin">Aero admin</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <div className="space-y-1">
        <Label>ID/IP</Label>
        <Input {...register('accessId')} />
      </div>

      <div className="mt-2 ml-auto space-x-2">
        <DialogClose asChild>
          <Button type="button" variant={'outline'}>
            <X />
            Cancelar
          </Button>
        </DialogClose>
        <Button
          type="button"
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
