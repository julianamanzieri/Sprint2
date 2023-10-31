// Declara a função generica que aceita dois parametros
export const memoize = <T extends (...args: any[]) => any>(fn: T): T => {
  // Cria uma variavel cache que é um novo objeto map e o objetivo map é armazenar
  // os resultados das chamadas da funçao com base nos argumentos
  const cache = new Map();
  // Retorna uma função e esta função aceita os argumentos da funçao original (args)
  // e usa o tipo generico para garantir que os tipos de arg e retorno correspondam a função
  return ((...args: Parameters<T>): ReturnType<T> => {
    // Gera uma chave unica com base nos argumentos e isso permite que saber se ja calculamos
    // o resultado para os args ou não
    const key = JSON.stringify(args);
    // Verifica se a chave que representa os args já existe no cache e se existir, retorna o
    // valor armazenado no cache, que é o resultado da funçao para esses args
    if (cache.has(key)) {
      return cache.get(key);
    }

    // Se os args não estiverem no cache, chamamos a função original fn com esses args para
    // calcular o resulatdo e em seguida guarda esse resultado no cache com a chave correspondente e finalmente retorna o resultado calculado
    const result = fn(...args);
    cache.set(key, result);
    return result;
    // Usamos para afirmar o tipo da funçao retornada como sendo do mesmo tipo que a funçao
    // original fn e isso garante que a memoize tenha o mesmo tipo da funçao original e permite que seja usada em subs a fun original
  }) as T;
};

// export default memoize;
