import { Module } from "@nestjs/common";
import { ProdutoRepository } from "./produto.repository";
import { ProdutoController } from "./produto.controller";
import { UsuarioModule } from "src/usuario/usuario.module";

@Module({
    imports: [UsuarioModule],
    controllers: [ProdutoController],
    providers: [ProdutoRepository]
})
export class ProdutoModule {}