import { UsuarioRepository } from './usuario.repository';
import { Body, Controller, Get, Post } from "@nestjs/common";

@Controller('/usuarios')
export class UsuarioController {

    private UsuarioRepository = new UsuarioRepository();

    @Post()
    async criaUsuario(@Body() dadosDoUsuario) {
        this.UsuarioRepository.salvar(dadosDoUsuario);
        //return {status: 'Usuario criado!'};
        return dadosDoUsuario;
    }

    @Get()
    async listUsuarios() {
        return this.UsuarioRepository.listar();
    } 
}