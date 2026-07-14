import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { SessionsModule } from './sessions/sessions.module';
import { PhotosModule } from './photos/photos.module';
import { ExportsModule } from './exports/exports.module';
import { TemplatesModule } from './templates/templates.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UsersModule,
    SessionsModule,
    PhotosModule,
    ExportsModule,
    TemplatesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
