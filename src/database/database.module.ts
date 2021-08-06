import { DynamicModule, Global, Module } from '@nestjs/common';
import { MySqlProvider } from './mysql-provider';

@Global()
@Module({})
export class DatabaseModule {
  static forRoot(): DynamicModule {
    const connectionFactory = {
      provide: 'DATABASE',
      useFactory: () => {
        return new MySqlProvider();
      },
    };
    return {
      module: DatabaseModule,
      providers: [connectionFactory],
      exports: ['DATABASE'],
    };
  }
}
