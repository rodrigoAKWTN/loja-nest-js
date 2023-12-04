import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { EmailEhUnico } from "../validacao/email-eh-unico.validator";


export class CriaUsuarioDTO{

    @IsNotEmpty({message: 'nome: O nome não pode estar vazio'})
    nome: string;

    @IsEmail(undefined, {message: 'email: O email é inválido'})
    @EmailEhUnico({message: 'Já existe um usuario com este email'})
    email: string;

    @MinLength(6, {message: 'senha: A senha precisa ter pelo menos 6 caracteres'})
    senha: string;
}