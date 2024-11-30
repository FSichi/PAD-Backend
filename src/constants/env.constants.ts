import dotenv from 'dotenv';
dotenv.config();

class EnvVars {
    public apiStoreUrl: string;
    public port: number;
    
    constructor() {
      dotenv.config();
  
      this.apiStoreUrl = process.env.API_STORE_URL || '';
      this.port = parseInt(process.env.PORT || '3000', 10);
    }
  }
  
  export const envVars = new EnvVars();
  