
import { Building, BuildingInfo } from './buildings';

export interface IGameTown {
  name: string;

  gold: bigint;
  goldPerTick: bigint;

  buildings: Partial<Record<Building, BuildingInfo>>;
}

export interface IGameState {
  lastTimestamp: number;
  currentInfo: string;
  currentTown: string;
  towns: Record<string, IGameTown>;
}
