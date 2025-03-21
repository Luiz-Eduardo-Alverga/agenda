import { DialogClose, DialogContent, DialogTitle } from '@/components/ui/dialog'

import { Separator } from '@/components/ui/separator'
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
import { Progress } from '@/components/ui/progress'

export function OpeningCallsDialog() {
  return (
    <DialogContent className="sm:max-w-xl">
      <div className="space-y-4">
        <DialogTitle>
          <div>
            <div className="flex flex-col">
              <div className="flex justify-between">
                <span className="text-lg">59785 - Arthur Frios</span>
              </div>
              <span className="text-xs">
                Programa: Softshop - Versão: Desktop - PDV: Franquia
              </span>
            </div>
          </div>
        </DialogTitle>

        <Separator />

        <div className="flex flex-col gap-1">
          <span className="">
            Etapa <span className="font-bold">1</span> de{' '}
            <span className="font-bold">3</span>
          </span>
          <Progress className="h-6" value={50} />
        </div>

        <div className="flex flex-col gap-2">
          <div className="space-y-1">
            <Label>Tipo</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue
                  defaultValue="whatsapp"
                  placeholder="Canal"
                ></SelectValue>
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

          <div className="ml-auto space-x-1">
            <DialogClose asChild>
              <Button variant={'outline'}>Cancelar</Button>
            </DialogClose>
            <Button>Prosseguir</Button>
          </div>
        </div>
      </div>
    </DialogContent>
  )
}
