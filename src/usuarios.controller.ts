import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import {
  CreateUsuarioDto,
  USUARIOS_PATTERNS,
} from '@apirestaurante/contracts';
import { UsuariosService } from './usuarios.service';

@Controller()
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @MessagePattern(USUARIOS_PATTERNS.FIND_ALL)
  findAll() {
    return this.usuariosService.findAll();
  }

  @MessagePattern(USUARIOS_PATTERNS.CREATE)
  create(@Payload() dto: CreateUsuarioDto) {
    console.log('Received create user request:', dto);
    return this.usuariosService.create(dto);
  }
}