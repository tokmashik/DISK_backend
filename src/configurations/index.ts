/* eslint-disable prettier/prettier */
export default () => ({
  port: process.env.PORT,
  db_port: process.env.DB_PORT,
  db_name: process.env.DB_NAME,
  db_user: process.env.DB_USER,
  db_password: process.env.DB_PASSWORD,
  db_host: process.env.DB_HOST,
  secret_jwt: process.env.SECRET,
  expire_jwt: process.env.EXPIRE_JWT,
  jwt_access: process.env.JWT_ACCESS_TOKEN,
  jwt_refresh: process.env.JWT_REFRESH_TOKEN,
});
