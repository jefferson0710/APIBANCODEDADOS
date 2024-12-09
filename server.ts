import 'reflect-metadata'
import sourceMapSupport from 'source-map-support'
import { Ignitor } from '@adonisjs/core/build/standalone'

sourceMapSupport.install({ handleUncaughtExceptions: false })

const startServer = async () => {
  await new Ignitor(__dirname)
    .httpServer()
    .start()

  console.log('Servidor AdonisJS está rodando!')
}

startServer().catch((error) => {
  console.error('Erro ao iniciar o servidor:', error)
  process.exit(1)
})
