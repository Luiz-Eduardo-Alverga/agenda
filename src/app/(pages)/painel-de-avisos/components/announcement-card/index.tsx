import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { AnnouncementItems } from './announcements-items'

const announcementsDate = [
  {
    title: 'Consignação: Correção do botão Novo no painel de Consignação',
    date: '13/03/2025 18:19:10',
    wasRead: true,
  },
  {
    title: 'Sistema: Melhoria na performance da consulta de pedidos',
    date: '14/03/2025 09:30:45',
    wasRead: false,
  },
  {
    title: 'Financeiro: Ajuste no cálculo de juros para boletos vencidos',
    date: '15/03/2025 14:22:05',
    wasRead: true,
  },
  {
    title: 'Segurança: Atualização de protocolo de autenticação',
    date: '16/03/2025 11:10:33',
    wasRead: false,
  },
  {
    title: 'Usuários: Novo fluxo para recuperação de senha',
    date: '17/03/2025 08:45:20',
    wasRead: true,
  },
  {
    title: 'Relatórios: Exportação aprimorada para Excel e PDF',
    date: '18/03/2025 16:05:50',
    wasRead: false,
  },
  {
    title: 'Dashboard: Adicionado novo gráfico de análise de vendas',
    date: '19/03/2025 10:15:00',
    wasRead: true,
  },
  {
    title: 'Mobile: Correção de bug na exibição de notificações',
    date: '20/03/2025 13:50:25',
    wasRead: false,
  },
  {
    title: 'Integração: Conector atualizado para API externa XYZ',
    date: '21/03/2025 17:40:15',
    wasRead: true,
  },
  {
    title: 'Configurações: Novo campo para personalização de temas',
    date: '22/03/2025 12:30:55',
    wasRead: false,
  },
  {
    title: 'Chat: Melhorias na experiência de mensagens em tempo real',
    date: '23/03/2025 09:05:40',
    wasRead: true,
  },
]

export function AnnouncementCard() {
  return (
    <Card className="max-h-[550px]">
      <CardHeader>
        <CardTitle>Comunicados</CardTitle>
        <CardDescription>
          Uma lista de todos os comunicados enviados para você
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-2 overflow-auto">
        {announcementsDate.map((announcementsDate) => (
          <AnnouncementItems
            key={announcementsDate.title}
            wasRead={announcementsDate.wasRead}
            date={announcementsDate.date}
            title={announcementsDate.title}
          />
        ))}
      </CardContent>

      <CardFooter className="m-auto">
        <span className="text-lg text-sky-500">
          Você tem 15 mensagens não lidas
        </span>
      </CardFooter>
    </Card>
  )
}
