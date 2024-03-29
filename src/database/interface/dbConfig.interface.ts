export interface IDatabaseConfigAttributes {
  dialect?: string;
  host?: string;
  port?: number | string;
  username?: string;
  password?: string;
  database?: string;
}
export interface IDatabaseConfig {
  development: IDatabaseConfigAttributes;
  staging: IDatabaseConfigAttributes
  test: IDatabaseConfigAttributes;
  production: IDatabaseConfigAttributes;
}
