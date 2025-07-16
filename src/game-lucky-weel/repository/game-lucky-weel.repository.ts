import { Injectable } from "@nestjs/common";
import { BaseRepository } from "src/common/repositories/base.repository";
import { GameLuckyWeelEntity } from "../entities/game-lucky-weel.entity";

@Injectable()
export class GameLuckyWeelRepository extends BaseRepository<GameLuckyWeelEntity> {}