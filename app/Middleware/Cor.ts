import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Cors {
  public async handle({ request, response }: HttpContextContract, next: () => Promise<void>) {
    // Domínios permitidos
    const allowedOrigins = [
      'https://projeto-tcc-n3h6.vercel.app',
      'https://fichadeanamnese.netlify.app',
    ]

    // Origem da requisição
    const origin = request.header('origin')
    if (origin && allowedOrigins.includes(origin)) {
      response.header('Access-Control-Allow-Origin', origin)
      response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
      response.header(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization, X-Requested-With'
      )
      response.header('Access-Control-Allow-Credentials', 'true')
    }

    // Responder a requisições preflight (OPTIONS)
    if (request.method() === 'OPTIONS') {
      return response.status(204).send('')
    }

    // Continuar para o próximo middleware
    await next()
  }
}
