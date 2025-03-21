import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export default function Loading() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold">Agenda - Painel de aviso</h1>
      <Separator />

      <div className="space-y-2">
        <h2 className="font-medium text-lg">Liberações</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[...Array(4)].map((_, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle>
                  <Skeleton className="h-6 w-3/4" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Skeleton className="h-5 w-1/2" />
                <Skeleton className="h-4 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Aniversariantes */}
        <Card className="h-[550px] flex flex-col">
          <CardHeader>
            <CardTitle>
              <Skeleton className="h-6 w-2/3" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Skeleton className="h-24 w-full" />
            <div className="mt-3 space-y-2">
              {[...Array(3)].map((_, index) => (
                <Skeleton key={index} className="h-5 w-full" />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="h-[550px] flex flex-col">
          <CardHeader>
            <CardTitle>
              <Skeleton className="h-6 w-2/3" />
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[...Array(5)].map((_, index) => (
              <Skeleton key={index} className="h-4 w-full" />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
