import { Params } from "react-router-dom";
import { IAuthResponse } from "../interface";

class StorageUtils {
  static setDataJwtToken(value: IAuthResponse) {
    localStorage.setItem("jwt", JSON.stringify(value));
  }

  static setMenu(value: number) {
    localStorage.setItem("menu", JSON.stringify(value));
  }

  static getMenu() {
    const menu = localStorage.getItem("menu");
    return menu ? JSON.parse(menu) : false;
  }

  static getDataJwtToken() {
    const valueJwtToken = localStorage.getItem("jwt");
    return valueJwtToken ? JSON.parse(valueJwtToken) : false;
  }

  static deleteDataJwtToken() {
    localStorage.removeItem("jwt");
  }

  static validarCpfCnpj(valor: string): boolean {
    const valorNumerico = valor.replace(/\D/g, "");

    if (valorNumerico.length === 11) {
      return StorageUtils.validarCPF(valorNumerico);
    } else if (valorNumerico.length === 14) {
      return StorageUtils.validarCNPJ(valorNumerico);
    }

    return false;
  }

  static validarCPF(cpf: string): boolean {
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }

    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;

    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    return resto === parseInt(cpf.charAt(10));
  }

  static validarCNPJ(cnpj: string): boolean {
    if (cnpj.length !== 14 || /^(\d)\1+$/.test(cnpj)) return false;

    const calcularDigito = (digitos: string, multiplicadores: number[]) =>
      digitos
        .split("")
        .map((num, i) => parseInt(num) * multiplicadores[i])
        .reduce((soma, val) => soma + val) % 11;

    const digitos = cnpj.slice(0, 12);
    const multiplicadores1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const multiplicadores2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    let d1 = calcularDigito(digitos, multiplicadores1);
    d1 = d1 < 2 ? 0 : 11 - d1;

    let d2 = calcularDigito(digitos + d1, multiplicadores2);
    d2 = d2 < 2 ? 0 : 11 - d2;

    return cnpj === digitos + d1.toString() + d2.toString();
  }

  static formatarMoeda(valor: any): string {
    const numeroFormatado = valor ? valor.toFixed(2).replace(".", ",") : 0.0;
    return `R$ ${numeroFormatado}`;
  }

  static formatDecimalForDjango(inputString: string): string {
    // Substitui vírgulas por pontos para garantir um formato decimal válido
    const stringWithDotSeparator = inputString.replace(",", ".");

    // Converte a string para um número
    const numericValue = parseFloat(stringWithDotSeparator);

    // Verifica se a conversão foi bem-sucedida
    if (isNaN(numericValue)) {
      throw new Error("Valor de entrada inválido");
    }

    // Arredonda o valor para dois dígitos decimais
    const roundedValue = Math.round(numericValue * 100) / 100;

    // Converte o valor arredondado para uma string com 2 casas decimais
    const formattedValue = roundedValue.toFixed(2);

    return formattedValue;
  }

  // static validarCpfCnpj(input: any): boolean {
  //   let cleanedInput = input.replace(/\D/g, "");

  //   if (cleanedInput.length === 11) {
  //     if (!/[0-9]{11}/.test(cleanedInput)) return false;
  //     if (cleanedInput === "00000000000") return false;

  //     var soma = 0;

  //     for (var i = 1; i <= 9; i++) {
  //       soma += parseInt(cleanedInput.substring(i - 1, i)) * (11 - i);
  //     }

  //     var resto = soma % 11;

  //     if (resto === 10 || resto === 11 || resto < 2) {
  //       resto = 0;
  //     } else {
  //       resto = 11 - resto;
  //     }

  //     if (resto !== parseInt(cleanedInput.substring(9, 10))) {
  //       return false;
  //     }

  //     soma = 0;

  //     for (var i = 1; i <= 10; i++) {
  //       soma += parseInt(cleanedInput.substring(i - 1, i)) * (12 - i);
  //     }
  //     resto = soma % 11;

  //     if (resto === 10 || resto === 11 || resto < 2) {
  //       resto = 0;
  //     } else {
  //       resto = 11 - resto;
  //     }

  //     if (resto !== parseInt(cleanedInput.substring(10, 11))) {
  //       return false;
  //     }

  //     return true;
  //   }

  //   if (cleanedInput.length === 14) {
  //     var b = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  //     if (/0{14}/.test(cleanedInput)) return false;
  //     if ((cleanedInput = cleanedInput.replace(/[^\d]/g, "")).length != 14)
  //       return false;
  //     for (var i = 0, n = 0; i < 12; n += cleanedInput[i] * b[++i]);
  //     if (cleanedInput[12] != ((n %= 11) < 2 ? 0 : 11 - n)) return false;
  //     for (var i = 0, n = 0; i <= 12; n += cleanedInput[i] * b[i++]);
  //     if (cleanedInput[13] != ((n %= 11) < 2 ? 0 : 11 - n)) return false;
  //     return true;
  //   }

  //   return false;
  // }

  static formatarDataBd(dataString: string) {
    const data = new Date(dataString);
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0"); // Mês começa em 0
    const ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
  }

  static formatCEP(cep: string): string {
    // Remove todos os caracteres não numéricos do CEP
    const cleanedCEP = cep.replace(/\D/g, "");

    if (cleanedCEP.length === 8) {
      const formattedCEP = `${cleanedCEP.slice(0, 5)}-${cleanedCEP.slice(5)}`;
      return formattedCEP;
    }

    return cep;
  }

  static getRoutePath(location: any, params: Params): string {
    const { pathname } = location;

    if (!Object.keys(params).length) {
      return pathname;
    }

    let path = pathname;
    Object.entries(params).forEach(([paramName, paramValue]) => {
      if (paramValue) {
        path = path.replace(paramValue, `:${paramName}`);
      }
    });
    return path;
  }

  static formatCPF(cpf: string | undefined): string | undefined {
    const cleanedCPF: string | undefined = cpf?.replace(/\D/g, "");

    if (cleanedCPF) {
      if (cleanedCPF.length !== 11) {
        throw new Error("CPF inválido");
      }

      const formattedCPF = `${cleanedCPF.substr(0, 3)}.${cleanedCPF.substr(
        3,
        3
      )}.${cleanedCPF.substr(6, 3)}-${cleanedCPF.substr(9)}`;
      return formattedCPF;
    }
  }

  static formatarCPF(cpf: string): string {
    // Remove todos os caracteres não numéricos
    cpf = cpf.replace(/\D/g, "");

    // Adicione os separadores e o dígito verificador
    cpf = cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");

    return cpf;
  }

  static formatarCNPJ(cnpj: string): string {
    // Remove todos os caracteres não numéricos
    cnpj = cnpj.replace(/\D/g, "");

    // Adicione os separadores e os dígitos verificadores
    cnpj = cnpj.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
      "$1.$2.$3/$4-$5"
    );

    return cnpj;
  }

  static formatarCPFCNPJ(numero: string): string {
    // Remove todos os caracteres não numéricos
    numero = numero.replace(/\D/g, "");

    // Verifica o tamanho da string
    if (numero.length === 11) {
      // Formata como CPF (999.999.999-99)
      return numero.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
    } else if (numero.length === 14) {
      // Formata como CNPJ (99.999.999/9999-99)
      return numero.replace(
        /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
        "$1.$2.$3/$4-$5"
      );
    } else {
      // Tamanho não é válido, retorna sem formatação
      return numero;
    }
  }

  // static formValidate(dadosEntrada: any, dados: any): string {
  //   return "string";
  // }

  static obterData4DiasAFrente(): string {
    const dataAtual = new Date();
    dataAtual.setDate(dataAtual.getDate() + 5);

    const ano = dataAtual.getFullYear();
    const mes = (dataAtual.getMonth() + 1).toString().padStart(2, "0"); // Adiciona zero à esquerda, se necessário
    const dia = dataAtual.getDate().toString().padStart(2, "0"); // Adiciona zero à esquerda, se necessário

    return `${ano}-${mes}-${dia}`;
  }

  static formatarDataTres(dataString: string): string {
    const data = new Date(dataString);
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, "0"); // Mês começa em 0 (janeiro) e vai até 11 (dezembro)
    const dia = String(data.getDate()).padStart(2, "0");
    return `${dia}/${mes}/${ano}`;
  }

  static formatDateToISO(dateString: string): string {
    // Divide a data em dia, mês e ano
    const parts = dateString.split("/");
    if (parts.length !== 3) {
      throw new Error("A data deve estar no formato 'dd/mm/YYYY'.");
    }

    const day = parts[0];
    const month = parts[1];
    const year = parts[2];

    // Cria uma nova data no formato ISO (YYYY-mm-dd)
    const isoDate = `${year}-${month}-${day}`;

    return isoDate;
  }

  static adicionarUmDia(data: any): string {
    // Parse da string para obter o objeto Date
    const partesData = data.split("-");
    const ano = parseInt(partesData[0]);
    const mes = parseInt(partesData[1]) - 1; // Meses são indexados de 0 a 11 em JavaScript
    const dia = parseInt(partesData[2]);

    const dataObj = new Date(ano, mes, dia);

    // Adiciona um dia à data
    dataObj.setDate(dataObj.getDate() + 1);

    // Formata a data de volta para o formato 'yyyy-mm-dd'
    const novoAno = dataObj.getFullYear();
    const novoMes = (dataObj.getMonth() + 1).toString().padStart(2, "0");
    const novoDia = dataObj.getDate().toString().padStart(2, "0");

    const novaData = `${novoAno}-${novoMes}-${novoDia}`;

    return novaData;
  }

  static diasDaSemanaComNumero(data: any) {
    const diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
    const dataAtual = data;
    const nomesDias = [];
    const numerosDias = [];

    for (let i = 0; i <= 4; i++) {
      const data = new Date(dataAtual);
      data.setDate(data.getDate() + i);
      const numeroDia = data.getDate(); // Obtém o número do dia
      const nomeDia = diasSemana[data.getDay()]; // Obtém o nome da semana

      nomesDias.push(nomeDia);
      numerosDias.push(numeroDia);
    }

    return [nomesDias, numerosDias];
  }

  static getCurrentDate(): string {
    const today = new Date();
    const year = today.getFullYear().toString().padStart(4, "0");
    const month = (today.getMonth() + 1).toString().padStart(2, "0"); // O mês começa em 0, então somamos 1.
    const day = today.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  static formatarHora(hora: any): string {
    let hour = hora;
    if (
      hour.substring(0, 1) == "1" ||
      hour.substring(0, 1) == "2" ||
      hour.substring(0, 1) == "0"
    ) {
      hour = String(hour).slice(0, 5);
    } else {
      hour = String(hour).slice(0, 4);
    }
    return hour;
  }

  static gerarDataDiaSeguinte(): any {
    const today = new Date();
    const year = today.getFullYear().toString().padStart(4, "0");
    const month = (today.getMonth() + 1).toString().padStart(2, "0"); // O mês começa em 0, então somamos 1.
    const day = (today.getDate() + 1).toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  static formatPhoneNumber(
    phoneNumber: string | undefined
  ): string | undefined {
    if (phoneNumber) {
      const cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");

      if (cleanedPhoneNumber.length < 11) {
        return cleanedPhoneNumber
        // throw new Error("Número de telefone inválido.");
      }

      const ddd = cleanedPhoneNumber.substring(0, 2);
      const mainPart = cleanedPhoneNumber.substring(2);

      const formattedPhoneNumber = `(${ddd}) ${mainPart.substring(
        0,
        1
      )} ${mainPart.substring(1, 5)}-${mainPart.substring(5)}`;

      return formattedPhoneNumber;
    }
  }

  static formatarData(data: any): string {
    const partes: string[] = data.split("-");
    if (partes.length !== 3) {
      throw new Error('Formato de data inválido. Use "yyyy-mm-dd".');
    }

    const ano: string = partes[0];
    const mes: string = partes[1];
    const dia: string = partes[2];

    return `${dia}/${mes}/${ano}`;
  }

  static formatarDataNew(dataString: string): string {
    const data = new Date(dataString);

    // Função para adicionar um zero à esquerda se o número for menor que 10
    const zeroEsquerda = (numero: number): string =>
      numero < 10 ? `0${numero}` : `${numero}`;

    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = data.getFullYear();
    const horas = zeroEsquerda(data.getHours());
    const minutos = zeroEsquerda(data.getMinutes());

    return `${dia}/${mes}/${ano} às ${horas}:${minutos}`;
  }

  static onlyNumbers(phoneNumber: string | undefined): string | undefined {
    // Remove all non-digit characters
    const digits: string | undefined = phoneNumber?.replace(/\D/g, "");
    if (digits) {
      return digits;
    }
  }
}

export default StorageUtils;
