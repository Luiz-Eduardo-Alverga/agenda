'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { OpeningCallsSchema } from '..'
import { FooterStep } from './footer-step'

interface SecondStepOpeningCallsProps {
  setStep: (step: number) => void
  setProgres: (progress: number) => void
}

export function SecondStepOpeningCalls({
  setStep,
  setProgres,
}: SecondStepOpeningCallsProps) {
  const { setFocus, register } = useFormContext<OpeningCallsSchema>()

  useEffect(() => {
    setFocus('scripts')
  })

  return (
    <div className="flex flex-col gap-2">
      <div className="space-y-1">
        <Label>Scripts</Label>
        <Input
          placeholder="Digite o nome do Script que você deseja usar"
          {...register('scripts')}
        />
      </div>

      <div>
        <Table>
          <TableCaption>Lista dos scripts filtrados</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Subgrupo FAQ</TableHead>
              <TableHead>Grupo FAQ</TableHead>
              <TableHead>SLA</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow className="cursor-pointer">
              <TableCell>Softshop nao abre</TableCell>
              <TableCell>SOFTSHOP</TableCell>
              <TableCell>ATENDIMENTO IMEADIATO</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Softshop nao abre</TableCell>
              <TableCell>SOFTSHOP</TableCell>
              <TableCell>ATENDIMENTO IMEADIATO</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Softshop nao abre</TableCell>
              <TableCell>SOFTSHOP</TableCell>
              <TableCell>ATENDIMENTO IMEADIATO</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Softshop nao abre</TableCell>
              <TableCell>SOFTSHOP</TableCell>
              <TableCell>ATENDIMENTO IMEADIATO</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Softshop nao abre</TableCell>
              <TableCell>SOFTSHOP</TableCell>
              <TableCell>ATENDIMENTO IMEADIATO</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <FooterStep
        buttonType="submit"
        backButtonLabel="Voltar"
        proceedButtonLabel="Prosseguir"
        backIcon={<ArrowLeft />}
        proceedIcon={<ArrowRight />}
        setStepProceedButton={() => setStep(3)}
        setProgresProceedButton={() => setProgres(100)}
        setProgresBackButton={() => setProgres(33)}
        setStepBackButton={() => setStep(1)}
      />
    </div>
  )
}
