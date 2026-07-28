<<<<<<< HEAD
// src/framework/core/ServiceManifest.js
import { RenderService } from '../services/RenderService.js';
import { InputService } from '../services/InputService.js';
import { PlayerService } from '../services/PlayerService.js';
import { AudioService } from '../services/AudioService.js';
import { UIService } from '../services/UIService.js';
import { WorldManager } from '../../world/WorldManager.js';
import { ECSService } from '../../ecs/ECSService.js';
import { TimeManager } from '../../time/TimeManager.js';
import { SceneService } from '../services/SceneService.js';

export const ServiceManifest = [
  RenderService,
  InputService,
  PlayerService,
  AudioService,
  UIService,
  WorldManager,
  ECSService,
  TimeManager,
  SceneService
=======
import { RenderService } from '../services/RenderService.js';
import { InputService } from '../services/InputService.js';
import { PlayerService } from '../services/PlayerService.js';
import { AudioService } from '../services/AudioService.js';
import { UIService } from '../services/UIService.js';
import { WorldManager } from '../../world/WorldManager.js';
import { ECSService } from '../../ecs/ECSService.js';

export const ServiceManifest = [
  RenderService,
  InputService,
  PlayerService,
  AudioService,
  UIService,
  WorldManager,
  ECSService
>>>>>>> 2f42efe7e19574d94df56c89784f42d3d4e2c85a
];