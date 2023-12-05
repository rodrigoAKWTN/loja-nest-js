import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProdutoRepository } from "./produto.repository";
import { CriaProdutoDTO } from "./dto/CriaProduto.dto";
import { randomUUID } from "crypto";
import { ProdutoEntity } from "./produto.entity";
import { AtualizaProdutoDTO } from "./dto/AtualizaProduto.dto";

@Controller('/produtos')
export class ProdutoController {

    constructor(private readonly produtoRepository: ProdutoRepository) {}

    @Post()
    async criaProduto(@Body() dadosDoProduto: CriaProdutoDTO) {
        const novoProduto = new ProdutoEntity();

        novoProduto.id = randomUUID();
        novoProduto.nome = dadosDoProduto.nome;
        novoProduto.usuarioId = dadosDoProduto.usuarioId;
        novoProduto.valor = dadosDoProduto.valor;
        novoProduto.quantidade = dadosDoProduto.quantidade;
        novoProduto.descricao = dadosDoProduto.descricao;
        novoProduto.categoria = dadosDoProduto.categoria;
        novoProduto.caracteristicas = dadosDoProduto.caracteristicas;
        novoProduto.imagens = dadosDoProduto.imagens;
        
        const produtoCadastrado = this.produtoRepository.salvar(novoProduto);
        return produtoCadastrado;
    }

    @Get()
    async listProdutos() {
        return this.produtoRepository.listar();
    }

    @Put('/:id')
    async atualiza(@Param('id') id: string, @Body() dadosProduto: AtualizaProdutoDTO,) {
        const produtoAlterado = await this.produtoRepository.atualiza(id, dadosProduto);

        return {
        mensagem: 'produto atualizado com sucesso',
        produto: produtoAlterado,
        };
    }

    @Delete('/:id')
    async remove(@Param('id') id: string) {
        const produtoRemovido = await this.produtoRepository.remove(id);

        return {
        mensagem: 'produto removido com sucesso',
        produto: produtoRemovido,
        };
    }
}