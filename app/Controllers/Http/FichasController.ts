import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Ficha from 'App/Models/Ficha'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class FichasController {

  // Listar todas as fichas
  public async index({ response }: HttpContextContract) {
    const fichas = await Ficha.all()
    return response.json(fichas)
  }

  // Criar uma nova ficha
  public async store({ request, response }: HttpContextContract) {
    const fichaSchema = schema.create({
      name: schema.string({}, [rules.required()]),
      idade: schema.number.optional(),
      cns: schema.string.optional(),
      endereco: schema.string({}, [rules.required()]),
      sexo: schema.number.optional(),
      telefone: schema.string.optional(),
      queixa_principal: schema.boolean(),
      hma: schema.string({}, [rules.required()]),
      historico_familiar: schema.string({}, [rules.required()]),
      atividade_fisica: schema.boolean([rules.required()]),
      fuma: schema.boolean([rules.required()]),
      vezes: schema.string({}, [rules.required()]),
      alcool: schema.boolean([rules.required()]),
      tarefa: schema.boolean([rules.required()]),
      pa: schema.string.optional(),
      altura: schema.string.optional(),
      eav: schema.string.optional(),
      dados_complementares: schema.string.optional(),
    })

    const validatedData = await request.validate({ schema: fichaSchema })

    const ficha = await Ficha.create(validatedData)
    return response.status(201).json(ficha)
  }

  // Visualizar uma ficha específica
  public async show({ params, response }: HttpContextContract) {
    const ficha = await Ficha.find(params.id)
    if (!ficha) {
      return response.status(404).json({ message: 'Ficha não encontrada' })
    }
    return response.json(ficha)
  }

  // Atualizar uma ficha
  public async update({ params, request, response }: HttpContextContract) {
    const ficha = await Ficha.find(params.id)
    if (!ficha) {
      return response.status(404).json({ message: 'Ficha não encontrada' })
    }

    const fichaSchema = schema.create({
      name: schema.string(),
      idade: schema.number.optional(),
      cns: schema.string.optional(),
      endereco: schema.string(),
      sexo: schema.number.optional(),
      telefone: schema.string(),
      queixa_principal: schema.boolean(),
      hma: schema.string.optional(),
      historico_familiar: schema.string.optional(),
      atividade_fisica: schema.boolean.optional(),
      fuma: schema.boolean.optional(),
      vezes: schema.string.optional(),
      alcool: schema.boolean.optional(),
      tarefa: schema.boolean.optional(),
      pa: schema.string.optional(),
      altura: schema.string.optional(),
      eav: schema.string.optional(),
      dados_complementares: schema.string.optional(),
    })

    const validatedData = await request.validate({ schema: fichaSchema })
    ficha.merge(validatedData)
    await ficha.save()

    return response.json(ficha)
  }

  // Excluir uma ficha
  public async destroy({ params, response }: HttpContextContract) {
    const ficha = await Ficha.find(params.id)
    if (!ficha) {
      return response.status(404).json({ message: 'Ficha não encontrada' })
    }

    await ficha.delete()
    return response.status(204).json({ message: 'Ficha excluída com sucesso' })
  }
}
