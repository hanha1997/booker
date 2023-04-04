import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { UsersResolver } from './users/users.resolver';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal : true,
      validationSchema: Joi.object({
        PORT: Joi.number().required(),
        MONGGODB_URL: Joi.string().required(),
        JWT_EXPIRATION: Joi.number().required(),
        JWT_SECRET: Joi.string().required()
      })
    }),
    GraphQLModule.forRoot<any>({
      autoSchemaFile: true, 
      driver: ApolloDriver
  }),
    UsersModule,
    DatabaseModule,
    AuthModule
  ]  ,
  controllers: [AppController],
  providers: [AppService, UsersResolver],
})
export class AppModule {}
