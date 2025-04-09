import { NextRequest } from 'next/server'
import axios, { AxiosError } from 'axios'

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get('url')

  if (!url) {
    return new Response('URL inválida.', { status: 400 })
  }

  try {
    const response = await axios.get(url, {
      responseType: 'arraybuffer',
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/91.0.4472.124 Safari/537.36',
        Accept: 'image/*',
      },
    })

    const contentType = response.headers['content-type'] || 'image/jpeg'

    return new Response(response.data, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400',
      },
    })
  } catch (error) {
    const axiosError = error as AxiosError

    console.error('Erro ao buscar imagem:', axiosError.message)

    return new Response(
      `Erro ao buscar imagem: ${axiosError.response?.status || 'Desconhecido'}`,
      { status: 500 },
    )
  }
}
