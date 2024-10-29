import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary() // Coluna id como chave primária
      table.string('username').notNullable().unique() // Username
      table.string('email').notNullable().unique() // Email
      table.string('password').notNullable() // Password
      table.string('name') // Name
      table.integer('idade').notNullable() // Idade
      table.dateTime('nascimento') // Nascimento
      table.string('cpf').notNullable().unique() // CPF
      table.string('ceffito').notNullable().unique() // CREFITO
      table.text('lembre_se').nullable() // Lembre-se (opcional)
      table.timestamp('created_at', { useTz: true }) // Created At
      table.timestamp('updated_at', { useTz: true }) // Updated At

    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
