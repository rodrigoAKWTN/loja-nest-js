import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProdutoRepository } from "./produto.repository";

@Controller('/produtos')
export class ProdutoController {

    constructor(private readonly produtoRepository: ProdutoRepository) {}

    @Post()
    criaProduto(@Body() dadosDoProduto) {
        const produtoCadastrado = this.produtoRepository.salvar(dadosDoProduto);
        return produtoCadastrado;
    }

    @Get()
    listProdutos() {
        return this.produtoRepository.listar();
    } 
}