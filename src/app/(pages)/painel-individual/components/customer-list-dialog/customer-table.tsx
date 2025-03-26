import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

interface CustomerTableProps {
  customers: {
    registro: string
    fantasia: string
    razao: string
    cnpj: string
    cidade: string
    uf: string
    partner: string
    qtdOc: number
    risco: number
  }[]
  setIsDialogOpen: (param: boolean) => void
}

export function CustomersTable({
  customers,
  setIsDialogOpen,
}: CustomerTableProps) {
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      setIsDialogOpen(true)
    }
  }

  return (
    <div className="relative pt-4">
      <div className="w-full absolute overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Registro</TableHead>
              <TableHead>Nome Fantasia</TableHead>
              <TableHead>CNPJ</TableHead>
              <TableHead>Razão Social</TableHead>
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
                <TableCell>{customer.cnpj}</TableCell>
                <TableCell>{customer.razao}</TableCell>
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
  )
}
