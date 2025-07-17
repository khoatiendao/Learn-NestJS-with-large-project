import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { WareHouseHeadModule } from './warehouse-head/warehouse-head.module';
import { User } from './user/entity/user.entity';
import { WareHouseHead } from './warehouse-head/entity/warehouse-head.entity';
import { CategoryModule } from './category/category.module';
import { GameLuckyWeelModule } from './game-lucky-weel/game-lucky-weel.module';
import { PrizeModule } from './prize/prize.module';
import { SpinHistoryModule } from './spin-history/spin-history.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      WareHouseHead
    ]),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        autoLoadEntities: true,
        synchronize: false,
        migrations: ['dist/migrations/*.js'], // Đường dẫn đến các file migration
        migrationsRun: false,
      }),
    }),
    UserModule,
    WareHouseHeadModule,
    CategoryModule,
    GameLuckyWeelModule,
    PrizeModule,
    SpinHistoryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
