function enviarEmail(
  para: string,
  assunto: string = "Sem assunto",
  remetente?: string | undefined
): void {
  console.log({
    para,
    assunto,
    remetente,
  });
}
