import { Skeleton } from '@/components/ui/skeleton'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Search } from 'lucide-react'

export default function Loading() {
  return (
    <div className="space-y-4 h-screen">
      <h1 className="text-xl font-bold">Agenda - Painel Individual</h1>

      <div className="flex w-full h-full">
        <div className="w-[400px] border-r-1 border-t-1">
          <div className="flex items-center justify-between py-2">
            <h2 className="text-lg font-semibold">Ocorrências</h2>
            <Tabs className="pr-2" defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">Todas</TabsTrigger>
                <TabsTrigger value="open">Abertas</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="relative mt-3 pr-2">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <Skeleton className="w-full h-10 pl-10 pr-2 py-2 rounded-md" />
          </div>

          <div className="space-y-3 mt-4 pr-2">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="p-3 border rounded-lg space-y-2">
                <Skeleton className="h-5 w-1/3" />
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-3 w-full" />
              </div>
            ))}
          </div>
        </div>

        {/* <div className="flex-1 flex pt-4 pl-2 border-t-1">
          <Skeleton className="w-full h-[300px] rounded-md" />
        </div> */}
      </div>
    </div>
  )
}
