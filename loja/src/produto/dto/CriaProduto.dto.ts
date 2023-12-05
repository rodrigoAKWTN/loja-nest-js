import {Type} from "class-transformer";
import {ArrayMinSize, IsArray, IsNotEmpty, IsNumber, IsPositive, IsString, IsUUID, IsUrl, MaxLength, Min, ValidateNested} from "class-validator";


export class CriaProdutoDTO {

    @IsUUID(undefined, {message: 'ID: ID de usuário inválido'})
    usuarioId: string;

    @IsNotEmpty({message: 'nome: O nome não pode estar vazio'})
    @IsString()
    nome: string;

    @IsNumber()
    @IsPositive({message: 'valor: O valor precisa ser positivo'})
    //@Min(0.25, {message: 'O valor precisa ser maior que zero'})
    valor: number;

    @IsNumber()
    @Min(0, {message: 'quantidade: Quantidade mínima inválida'})
    quantidade: number;

    @IsString()
    @IsNotEmpty({message: 'descrição: Descrição do produto não pode ser vazia '})
    @MaxLength(1000, {
        message: 'descrição: Descrição não pode ter mais que 1000 caracteres',
    })
    descricao: string;

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(2)
    @Type(() => CaracteristicaProdutoDTO)
    caracteristicas: CaracteristicaProdutoDTO[];

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(1)
    @Type(() => ImagemProdutoDTO)
    imagens: ImagemProdutoDTO[];

    @IsString()
    @IsNotEmpty({message: 'categoria: Categoria do produto não pode ser vazia'})
    categoria: string;
}

export class CaracteristicaProdutoDTO {

    @IsNotEmpty({message: 'nome: O nome da característica não pode estar vazio'})
    @IsString()
    nome: string;

    @IsString()
    @IsNotEmpty({message: 'descrição: Descrição da característica não pode ser vazia'})
    descricao: string;
}

export class ImagemProdutoDTO {
    @IsUrl(undefined, {message: 'url: URL para imagem inválida'})
    url: string;

    @IsString()
    @IsNotEmpty({message: 'descrição: Descrição da imagem não pode ser vazia'})
    descricao: string;
}