import { api } from '../axios'

export interface FaqResponse {
  id: number
  nome: string
  pergunta: string
  solucao: string
  resposta_refinada: string
  link_faq: string
  faqs_relacionados: {
    id: number
    nome: string
    pergunta: string
    link_faq: string
  }[]
}

interface GetFaqsParams {
  question: string
}

export async function getFaqs({
  question,
}: GetFaqsParams): Promise<FaqResponse> {
  const response = await api.get('https://softmind.softcomapps.com/api/faq', {
    params: { question },
  })

  return response.data
}
