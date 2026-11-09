import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [UsuariosController],
  providers: [UsuariosService],
})
export class AppModule {}