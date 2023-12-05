import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { EmailEhUnico } from "../validacao/email-eh-unico.validator";


export class AtualizaUsuarioDTO{

    @IsNotEmpty({message: 'nome: O nome não pode estar vazio'})
    @IsOptional()
    nome: string;

    @IsEmail(undefined, {message: 'email: O email é inválido'})
    @EmailEhUnico({message: 'Já existe um usuario com este email'})
    @IsOptional()
    email: string;

    @MinLength(6, {message: 'senha: A senha precisa ter pelo menos 6 caracteres'})
    @IsOptional()
    senha: string;
}