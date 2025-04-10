import { SheetContent, SheetHeader, SheetTitle } from '../ui/sheet'
import {
  FileText,
  Monitor,
  FileCode,
  FolderOpen,
  PhoneCall,
  Users,
  ListChecks,
  Megaphone,
} from 'lucide-react'

const menuItems = [
  { label: 'Ocorrência', icon: FileText },
  { label: 'Remoto', icon: Monitor },
  { label: 'RFC', icon: FileCode },
  { label: 'Casos', icon: FolderOpen },
  { label: 'Contato', icon: PhoneCall },
  { label: 'Cs: Ricos', icon: Users },
  { label: 'Backlog', icon: ListChecks },
  { label: 'Campanha', icon: Megaphone },
]

export function OccurrencesDetailsSheet() {
  return (
    <SheetContent className="gap-0  [&_button.absolute.right-4.top-4]:hidden">
      <div className="p-4 bg-muted/50 rounded-xl border border-border space-y-2">
        <SheetHeader className="flex flex-row items-baseline justify-between p-0">
          <SheetTitle className="flex items-center gap-2 text-xl font-bold">
            Arthur Frios
            <span className="text-primary text-base font-semibold bg-primary/10 px-2 py-0.5 rounded-md">
              #1245
            </span>
          </SheetTitle>
          <div className="text-sm font-semibold text-secondary-foreground">
            Pdv: João Pessoa
          </div>
        </SheetHeader>

        <div className="flex flex-col gap-2 text-sm font-semibold text-secondary-foreground">
          <div className="flex justify-between">
            <span>CNPJ: 26.775.300/0001-36</span>
            <span>Cidade: Bayeux</span>
          </div>
          <div className="flex justify-end">
            <span>Versão: Web</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5">
        <div className="col-span-1 border-r-1 h-screen">
          <ul className="space-y-2 mt-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon
              return (
                <li
                  key={index}
                  className="pl-3 pr-2 py-1 cursor-pointer flex items-center gap-2 rounded-md hover:bg-primary/10 hover:border-l-4 border-transparent hover:border-primary text-sm transition-all"
                >
                  <Icon size={16} className="text-primary" />
                  {item.label}
                </li>
              )
            })}
          </ul>
        </div>
        <div className="col-span-4 "></div>
      </div>
    </SheetContent>
  )
}
