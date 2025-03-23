import { Button } from '@/components/ui/button'
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

interface SecondStepOpeningCallsProps {
  setStep: (step: number) => void
}

export function SecondStepOpeningCalls({
  setStep,
}: SecondStepOpeningCallsProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="space-y-1">
        <Label>Scripts</Label>
        <Input placeholder="Digite o nome do Script que você deseja usar" />
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

      <div className="mt-2 ml-auto space-x-1">
        <Button variant={'outline'} onClick={() => setStep(1)}>
          <ArrowLeft />
          Voltar
        </Button>

        <Button onClick={() => setStep(3)}>
          <ArrowRight />
          Prosseguir
        </Button>
      </div>
    </div>
  )
}
