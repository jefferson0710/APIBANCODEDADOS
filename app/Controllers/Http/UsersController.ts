import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class UsersController {

  // Método para listar todos os usuários
  public async index({ response }: HttpContextContract) {
    const users = await User.all()
    return response.json(users)
  }

  // Método para criar um novo usuário
  public async store({ request, response }: HttpContextContract) {
    const userSchema = schema.create({
      username: schema.string(),
      email: schema.string(),
      password: schema.string(),
      name: schema.string(),
      idade: schema.number(),
      nascimento: schema.date(),
      cpf: schema.string(),
      ceffito: schema.string(),
      lembre_se: schema.string(),
    });

    const validatedData = await request.validate({ schema: userSchema })

    const user = await User.create(validatedData)
    return response.status(201).json(user)
  }

  // Método para visualizar um usuário específico
  public async show({ params, response }: HttpContextContract) {
    const user = await User.find(params.id)
    if (!user) {
      return response.status(404).json({ message: 'User not found' })
    }
    return response.json(user)
  }

  // Método para atualizar um usuário
  public async update({ params, request, response }: HttpContextContract) {
    const user = await User.find(params.id)
    if (!user) {
      return response.status(404).json({ message: 'User not found' })
    }

    const userSchema = schema.create({
      username: schema.string.optional({}, [rules.required()]),
      email: schema.string.optional({}, [rules.required(), rules.email()]),
      password: schema.string.optional({}, [rules.required()]),
      name: schema.string.optional(),
      idade: schema.number.optional(),
      nascimento: schema.date.optional(),
      cpf: schema.string.optional({}, [rules.required()]),
    })

    const validatedData = await request.validate({ schema: userSchema })
    user.merge(validatedData)
    await user.save()

    return response.json(user)
  }

  // Método para excluir um usuário
  public async destroy({ params, response }: HttpContextContract) {
    const user = await User.find(params.id)
    if (!user) {
      return response.status(404).json({ message: 'User not found' })
    }

    await user.delete()
    return response.status(204).json({ message: 'User deleted successfully' })
  }
  public async buscarPorCpf({ params, response }: HttpContextContract) {
    console.log(params)
    try {
      const paciente = await User.findBy('cpf', params.cpf); // Busca pelo CPF
      console.log(paciente)
      if (paciente) {
        return response.status(200).json(paciente);
      } else {
        return response.status(404).json({ error: 'Paciente não encontrado' });
      }
    } catch (error) {
      return response.status(500).json({ error: 'Erro ao buscar paciente' });
    }
  }

}
