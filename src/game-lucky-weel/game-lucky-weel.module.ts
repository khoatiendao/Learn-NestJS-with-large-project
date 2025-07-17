import { Module } from '@nestjs/common';
import { GameLuckyWeelController } from './controller/game-lucky-weel.controller';
import { GameLuckyWeelService } from './services/game-lucky-weel.service';
import { PrizesController } from '../prize/controller/prize.controller';
import { PrizeService } from '../prize/service/prizes.service';
import { PrizesRepository } from '../prize/repository/prize.repository';

@Module({
  controllers: [GameLuckyWeelController],
  providers: [GameLuckyWeelService]
})
export class GameLuckyWeelModule {}
