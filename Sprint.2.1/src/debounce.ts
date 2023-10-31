// Declara uma função e atribui uma constante e usa um tipo generico que permite flexibilidade para aceitar argumentos e não tem valor de retorno
export const debounce = <T extends (...args: any[]) => void>(
  // Primeiro parametro que por ser T pode ser qualquer função
  func: T,
  // Segundo parametro é numerico e representa o tempo em milissegundois do atraso para a execução
  timeout: number
) => {
  // Variavel usada para rastrear o identificador do temporizador para retornar por setTimeout
  let timeoutId: NodeJS.Timeout;

  // Retorna uma função anonima
  return (...args: Parameters<T>) => {
    // Verifica se há um temporizador em andamento
    clearTimeout(timeoutId);
    // Configura um novo temporizador usando setTimeout
    timeoutId = setTimeout(() => {
      func(...args);
    }, timeout);
  };
};

// export default debounce;
