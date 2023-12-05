import { Injectable } from "@nestjs/common";
import { AtualizaProdutoDTO } from "./dto/AtualizaProduto.dto";
import { ProdutoEntity } from "./produto.entity";

@Injectable()
export class ProdutoRepository {
    private produtos = [];

    salvar(dadosProduto: ProdutoEntity) {
        this.produtos.push(dadosProduto);
        return dadosProduto;
    }

    listar() {
        return this.produtos;
    }

    private buscaID(id: string) {
        const possivelProduto = this.produtos.find(
            produto => produto.id === id
        );

        if(!possivelProduto) {
            throw new Error('Produto inexistente')
        }

        return possivelProduto;
    }

    remove(id: string) {
        const produtoRemovido = this.buscaID(id);
        
        this.produtos = this.produtos.filter((produto) => produto.id !== id);
        return produtoRemovido;
    }

    atualiza(id: string, dadosProduto: Partial<ProdutoEntity>) {
        const dadosNaoAtualizaveis = ['id', 'usuarioId'];
        const produto = this.buscaID(id);

        Object.entries(dadosProduto).forEach(([chave, valor]) => {
        if (dadosNaoAtualizaveis.includes(chave)) {
            return;
        }
        produto[chave] = valor;
        });

        return produto;
    }
}