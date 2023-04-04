import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forRootAsync({
            useFactory: (ConfigService: ConfigService) => ({
                uri:ConfigService.get<string>('MONGGODB_URL')
            }),
            inject: [ConfigService]

        })
    ]
})
export class DatabaseModule {}
