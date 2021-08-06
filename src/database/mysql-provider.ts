import { Logger } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { Connection, createPool, Pool } from 'mysql2/promise';

@Injectable()
export class MySqlProvider {
  private readonly logger: Logger;
  private readonly pool: Pool;
  constructor() {
    this.logger = new Logger('MysqlProvicer');
    this.pool = createPool({
      host: 'localhost',
      user: 'root',
      password: '123456',
      database: 'cat-products',
      waitForConnections: true,
      connectionLimit: 20,
      queueLimit: 0,
    });
    this.logger.log('Initialized');
  }
  async getConnection(): Promise<Connection> {
    return await this.pool.getConnection();
  }
}
