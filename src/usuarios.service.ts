import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { CreateUsuarioDto } from '@apirestaurante/contracts';
import type { Usuario } from '@apirestaurante/contracts';

@Injectable()
export class UsuariosService {
  private readonly usuarios: Usuario[] = [];

  findAll(): Usuario[] {
    return this.usuarios;
  }

  create(dto: CreateUsuarioDto): Usuario {
    const usuario: Usuario = {
      username: dto.username,
      email: dto.email,
      password: dto.password,
    };

    this.usuarios.push(usuario);

    return usuario;
  }
}