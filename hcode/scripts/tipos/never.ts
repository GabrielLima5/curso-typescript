function showError(msg: string): never {
  throw new Error(msg);
}

// console.log(showError("Algo deu errado"));

let n = 0;

function loopInfinito(): never {
  while (true) {
    console.log(n++);
  }
}
