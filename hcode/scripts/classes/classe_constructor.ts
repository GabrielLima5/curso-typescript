class Pedido {
  //   produto: string;
  //   valorTotal: number;
  //   previsaoEntrega: Date;

  constructor(
    private produto: string,
    protected valorTotal: number,
    public previsaoEntrega: Date
  ) {
    this.produto = produto;
    this.valorTotal = valorTotal;
    this.previsaoEntrega = previsaoEntrega;
  }
}

const meuPedido = new Pedido("TV 30 Polegadas", 3000, new Date("2024-08-31"));
