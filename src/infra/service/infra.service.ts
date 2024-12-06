import { Injectable } from '@nestjs/common';
import { createPool, Pool } from 'mysql2/promise';

@Injectable()
export class InfraService {
  private dbPool: Pool;

  constructor() {
    this.connect();
  }

  private connect() {
    const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;
    this.dbPool = createPool({
      host: DB_HOST, // localhost
      user: DB_USER, // root
      password: DB_PASSWORD, // DB_PW
      database: DB_DATABASE, // testdb
      connectionLimit: 10,
    });
    console.log('SUCCESS DB CONNECTION');
  }
}
