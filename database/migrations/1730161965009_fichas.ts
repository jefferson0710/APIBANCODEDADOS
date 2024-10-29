import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Fichas extends BaseSchema {
  protected tableName = 'fichas'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary() // Coluna id como chave primária
      table.string('name').notNullable() // Nome
      table.integer('idade').notNullable() // Idade
      table.string('cns').notNullable().unique()// CNS
      table.string('telefone') // Telefone
      table.string('endereco') // Endereço
      table.tinyint('sexo') // Sexo (pode ser representado como tinyint)
      table.boolean('queixa_principal') // Queixa Principal
      table.text('hma').notNullable() // HMA (História da Molécula A)
      table.text('historico_familiar').notNullable() // Histórico Familiar
      table.boolean('atividade_fisica').notNullable() // Atividade Física
      table.string('vezes').notNullable() // Vezes
      table.boolean('alcool').notNullable() // Alcool
      table.boolean('fuma').notNullable() // Fuma
      table.boolean('tarefa').notNullable() // Tarefa
      table.string('pa').nullable() // Pressão Arterial (opcional)
      table.string('altura').nullable() // Altura (opcional)
      table.string('eav').nullable() // EAV (opcional)
      table.text('dados_complementares').nullable() // Dados Complementares (opcional)
      table.timestamp('created_at', { useTz: true }) // Created At
      table.timestamp('updated_at', { useTz: true })// Updated At
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
