interface Categoria {
  nome: string;
  id: number;
  categoriaPai?: Categoria;
}

const frontEnd: Categoria = {
  nome: "Frontend",
  id: 1,
};

const backEnd: Categoria = {
  nome: "Backend",
  id: 2,
};

const carreiras: Categoria[] = [frontEnd, backEnd];

///////////////////

interface Todo {
  [indice: number]: string | boolean | number;
}

let minhasTarefas: Todo;
minhasTarefas = [
  "Estudar Typescript",
  "Estudar JavaScript",
  "Estudar PHP8",
  20,
  true,
];
console.log(minhasTarefas[0]);
