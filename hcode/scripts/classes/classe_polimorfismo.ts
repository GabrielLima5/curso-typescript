class Empresa {
  prestarServico(): string {
    return "Empresa prestando serviço.";
  }
}

class Padaria extends Empresa {
  prestarServico(): string {
    return "Vendendo pão.";
  }
}

class Mercearia extends Empresa {
  prestarServico(): string {
    return "Vendendo alimentos e bebidas.";
  }
}

console.log(new Empresa().prestarServico());
console.log(new Padaria().prestarServico());
