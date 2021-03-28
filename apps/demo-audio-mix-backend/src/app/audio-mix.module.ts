import {Module} from "@nestjs/common";
import {MulterModule} from "@nestjs/platform-express";
import {diskStorage} from "multer";
import {AudioMixController} from "./audio-mix.controller";
import {AudioMixService} from "./audio-mix.service";

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({})
    })
  ],
  controllers: [AudioMixController],
  providers: [AudioMixService],
})
export class AudioMixModule {}
