import { NextRequest } from 'next/server'
import axios, { AxiosError } from 'axios'
import { readFile } from 'fs/promises'
import path from 'path'

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
    console.error('Erro ao buscar imagem:', (error as AxiosError).message)

    // Caminho absoluto para a imagem fallback na pasta public
    const fallbackPath = path.join(
      process.cwd(),
      'public',
      'fallback-image.jpg',
    )

    try {
      const fallbackBuffer = await readFile(fallbackPath)
      return new Response(fallbackBuffer, {
        headers: {
          'Content-Type': 'image/jpeg',
          'Cache-Control': 'public, max-age=86400',
        },
        status: 200,
      })
    } catch (fallbackError) {
      console.error('Erro ao carregar imagem fallback:', fallbackError)
      return new Response('Erro ao buscar imagem e imagem fallback.', {
        status: 500,
      })
    }
  }
}
