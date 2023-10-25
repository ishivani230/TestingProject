export default () => (
    {

    port: parseInt(process.env.SERVICE_PORT, 10) || 5082,
    database: {
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10) || 5432
    }
  }
  
  
  );