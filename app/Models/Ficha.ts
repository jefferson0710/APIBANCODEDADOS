import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Ficha extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public idade: number

  @column()
  public cns: string

  @column()
  public telefone: string

  @column()
  public endereco: string

  @column()
  public sexo: number

  @column()
  public queixa_principal: boolean

  @column()
  public hma: string

  @column()
  public historico_familiar: string

  @column()
  public atividade_fisica: boolean

  @column()
  public vezes: string

  @column()
  public alcool: boolean

  @column()
  public fuma: boolean

  @column()
  public tarefa: boolean

  @column()
  public pa: string

  @column()
  public altura: string

  @column()
  public eav: string

  @column()
  public dados_complementares: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
