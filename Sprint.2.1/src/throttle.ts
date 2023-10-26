// Declara uma função e atribui uma constante e usa um tipo generico que permite flexibilidade para aceitar argumentos e não tem valor de retorno
export const throttle = <T extends (...args: any[]) => void>(
  // Primeiro parametro que pode ser qualquer funcao
  func: T,
  // Segundo parametro é num e representa tempo em ms do intervalo para execuçao
  time: number
) => {
  // VAriavel usada para armazenar o ultimo tempo em que a funçao foi executada
  let lastTime: number;

  // Retorna uma funçao anonima
  return (...args: Parameters<T>) => {
    // Obtem o tempo atual em ms
    let now = Date.now();
    // Verifica se o tempo atual é maior ou igual ao ultimo tempo mais intervalo
    if (!lastTime || now >= lastTime + time) {
      // Executa a funçao com os argumentos fornecidos
      func(...args);
      // Atualiza o ultimo tempo com o tempo atual
      lastTime = now;
    }
  };
};

// export default throttle;
