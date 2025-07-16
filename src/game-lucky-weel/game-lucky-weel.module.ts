import { Module } from '@nestjs/common';
import { GameLuckyWeelController } from './controller/game-lucky-weel.controller';
import { GameLuckyWeelService } from './services/game-lucky-weel.service';

@Module({
  controllers: [GameLuckyWeelController],
  providers: [GameLuckyWeelService]
})
export class GameLuckyWeelModule {}
