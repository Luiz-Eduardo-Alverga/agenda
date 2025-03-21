'use-client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { birthdayData } from './birthday-data'

export function BirthdayCard() {
  return (
    <Card className="max-h-[550px] flex flex-col">
      <CardHeader>
        <CardTitle>Aniversariantes do mês</CardTitle>
        <div className="mt-2 flex gap-2 border-1 rounded-sm">
          <img
            className="w-24 h-24 rounded-sm"
            src={birthdayData[0].profilePic}
            alt="foto de perfil"
          />
          <div className="flex flex-col">
            <span>{birthdayData[0].name}</span>
            <Separator />
            <span className="text-sm">{birthdayData[0].description}</span>
            <div className="flex justify-between mt-auto pr-1">
              <span className="text-sm">Setor: {birthdayData[0].sector}</span>
              <span className="text-sm">PDV: {birthdayData[0].location}</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 overflow-y-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome Aniversariante</TableHead>
              <TableHead className="text-right">Dia aniversário</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {birthdayData.map((birthday, index) => (
              <TableRow key={index} className="cursor-pointer">
                <TableCell>{birthday.name}</TableCell>
                <TableCell className="text-right">{birthday.day}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
