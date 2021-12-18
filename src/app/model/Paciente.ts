import { Convenio } from "./Convenio";

export class Paciente{
  public id: number;
  public numeroProntuario: number;
  public cpf: number;
  public nome: string;
  public sobrenome: string;
  public dataNascimento: Date;
  public genero: string;
  public rg: string;
  public email: string;
  public telefone: number;
  public celular: number;
  public convenio: Convenio;
}
