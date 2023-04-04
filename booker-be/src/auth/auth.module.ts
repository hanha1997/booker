import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [
    UsersModule,
    JwtModule.registerAsync({
      useFactory: (configSevice: ConfigService) => ({
        secret: configSevice.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: `${configSevice.get('JWT_EXPIRATION')}s`
        }
      }),
      inject: [ConfigService] 
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy]
})
export class AuthModule {}
