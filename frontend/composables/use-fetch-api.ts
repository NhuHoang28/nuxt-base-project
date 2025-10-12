import {createFetch} from '@vueuse/core';

type Options = {};

/**
 * @docs https://vueuse.org/core/usefetch/
 * @returns useFetch instance
 */
const useFetchApi = (options: Options = {}) => {
  const {} = options;

  const config = useRuntimeConfig();

  return createFetch({
    baseUrl: config.public.apiBase,
  });
};

export default useFetchApi;
