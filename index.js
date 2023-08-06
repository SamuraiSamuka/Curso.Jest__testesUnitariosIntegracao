import chalk from 'chalk';

/* eslint-disable no-console */
const somaHorasExtras = (salario, valorHorasExtras) => salario + valorHorasExtras;

const calculaDescontos = (salario, descontos) => salario - descontos;

const verifiqueSe = (valor) => {
  const assercoes = {
    ehExatamenteIgualA(esperado) {
      if (valor !== esperado) {
        // eslint-disable-next-line no-throw-literal
        throw {};
      }
    },
  };
  return assercoes;
};

const teste = (titulo, funcaoDeTeste) => {
  try {
    funcaoDeTeste();
    console.log(titulo, chalk.bgGreen.bold(' passou '));
  } catch {
    console.log(titulo, chalk.bgRed.bold(' não passou '));
  }
};

teste('somaHorasExtras', () => {
  const esperado = 2500;
  const retornado = somaHorasExtras(2000, 500);

  verifiqueSe(retornado).ehExatamenteIgualA(esperado);
});

teste('calculaDescontos', () => {
  const esperado = 2300;
  const retornado = calculaDescontos(2500, 300);

  verifiqueSe(retornado).ehExatamenteIgualA(esperado);
});
