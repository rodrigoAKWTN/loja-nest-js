import { Type } from "class-transformer";
import { ArrayMinSize, IsArray, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, IsUUID, MaxLength, Min, ValidateNested } from "class-validator";
import { CaracteristicaProdutoDTO, ImagemProdutoDTO } from "./CriaProduto.dto";

export class AtualizaProdutoDTO {

    @IsUUID(undefined, {message: 'ID: ID de produto inválido'})
    id: string;
    
    @IsUUID(undefined, {message: 'ID: ID de usuário inválido'})
    usuarioId: string;

    @IsOptional()
    @IsNumber()
    @IsPositive({message: 'valor: O valor precisa ser positivo'})
    //@Min(0.25, {message: 'O valor precisa ser maior que zero'})
    valor: number;

    @IsOptional()
    @IsNumber()
    @Min(0, {message: 'quantidade: Quantidade mínima inválida'})
    quantidade: number;

    @IsOptional()
    @IsString()
    @IsNotEmpty({message: 'descrição: Descrição do produto não pode ser vazia '})
    @MaxLength(1000, {
        message: 'descrição: Descrição não pode ter mais que 1000 caracteres',
    })
    descricao: string;

    @IsOptional()
    @ValidateNested()
    @IsArray()
    @ArrayMinSize(2)
    @Type(() => CaracteristicaProdutoDTO)
    caracteristicas: CaracteristicaProdutoDTO[];

    @IsOptional()
    @ValidateNested()
    @IsArray()
    @ArrayMinSize(1)
    @Type(() => ImagemProdutoDTO)
    imagens: ImagemProdutoDTO[];

    @IsOptional()
    @IsString()
    @IsNotEmpty({message: 'categoria: Categoria do produto não pode ser vazia'})
    categoria: string;
}