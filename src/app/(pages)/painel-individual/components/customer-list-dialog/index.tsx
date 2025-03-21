'use client'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
} from '@/components/ui/tooltip'
import { TooltipTrigger } from '@radix-ui/react-tooltip'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { CircleHelp, Search, X } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { Dialog } from '@/components/ui/dialog'
import { OpeningCallsDialog } from '../opening-calls'
import { useState } from 'react'

const customers = [
  {
    registro: '64004',
    fantasia: 'ARTHUR FRIOS',
    razao: 'ARTHUR FRIOS COMERCIO DE FRIOS E LATICINIOS LTDA',
    cnpj: '37422785000109',
    cidade: 'João Pessoa',
    uf: 'PB',
    partner: 'Não',
    qtdOc: 4,
    risco: 450,
  },
  {
    registro: '64005',
    fantasia: 'BELLA PIZZAS',
    razao: 'BELLA PIZZAS LTDA',
    cnpj: '12345678000199',
    cidade: 'São Paulo',
    uf: 'SP',
    partner: 'Sim',
    qtdOc: 7,
    risco: 320,
  },
  {
    registro: '64006',
    fantasia: 'MERCADO CENTRAL',
    razao: 'MERCADO CENTRAL LTDA',
    cnpj: '98765432000188',
    cidade: 'Belo Horizonte',
    uf: 'MG',
    partner: 'Não',
    qtdOc: 2,
    risco: 150,
  },
  {
    registro: '64007',
    fantasia: 'SUPERMERCADO BOM PREÇO',
    razao: 'SUPERMERCADO BOM PREÇO LTDA',
    cnpj: '45678912000155',
    cidade: 'Curitiba',
    uf: 'PR',
    partner: 'Sim',
    qtdOc: 10,
    risco: 500,
  },
]

export function CustomerList() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      setIsDialogOpen(true)
    }
  }

  return (
    <>
      <div className="flex items-center py-3 pl-2 justify-between">
        <h2 className="text-lg font-semibold">Listagem de Clientes</h2>
      </div>

      <Separator />

      <div className="flex items-center gap-2 mt-3 pl-2">
        <span className="font-medium text-muted-foreground">
          Use os Filtros abaixo para localizar o cadastro desejado:
        </span>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="bg-primary rounded-full">
              <CircleHelp className="h-6 w-6 text-white " />
            </TooltipTrigger>
            <TooltipContent>
              <div className="text-center">
                <span>Você pode buscar o cadastro por</span>
                <br />
                <span>Fantasia, Razão Social, CNPJ, Registro ou Cidade.</span>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="mt-2 pl-2 space-y-2">
        <Input placeholder="Digite a informação que você deseja buscar" />
        <div className="grid grid-cols-2 gap-2">
          <Button>
            <X /> <span>Limpar Filtros</span>{' '}
          </Button>
          <Button>
            <Search /> <span>Pesquisar</span>{' '}
          </Button>
        </div>

        <div className="relative pt-4">
          <div className="w-full absolute overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Registro</TableHead>
                  <TableHead>Nome Fantasia</TableHead>
                  <TableHead>Razão Social</TableHead>
                  <TableHead>CNPJ</TableHead>
                  <TableHead>Cidade</TableHead>
                  <TableHead>UF</TableHead>
                  <TableHead>Partner</TableHead>
                  <TableHead>QTD OC</TableHead>
                  <TableHead>Risco</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {customers.map((customer) => (
                  <TableRow
                    key={customer.registro}
                    className="h-14 cursor-pointer focus:ring-2 focus:ring-primary focus:outline-none"
                    tabIndex={0}
                    onClick={() => {
                      setIsDialogOpen(true)
                    }}
                    onKeyDown={(event) => {
                      handleKeyDown(event)
                    }}
                  >
                    <TableCell>{customer.registro}</TableCell>
                    <TableCell>{customer.fantasia}</TableCell>
                    <TableCell>{customer.razao}</TableCell>
                    <TableCell>{customer.cnpj}</TableCell>
                    <TableCell>{customer.cidade}</TableCell>
                    <TableCell>{customer.uf}</TableCell>
                    <TableCell>{customer.partner}</TableCell>
                    <TableCell>{customer.qtdOc}</TableCell>
                    <TableCell>{customer.risco}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <OpeningCallsDialog />
      </Dialog>
    </>
  )
}
