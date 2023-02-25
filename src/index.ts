import type { WebAPI } from './types';
import { webAPIMapper, webAPISourceMapper } from './config';

export const isWebAPISupport = (api: WebAPI | WebAPI[]) => {
  const apis = Array.isArray(api) ? api : [api];

  return apis.every((item) => {
    const mapper = webAPIMapper[item];
    if (mapper.checker) {
      return mapper.checker();
    } else {
      const { source, path } = mapper;
      const _source = webAPISourceMapper[source];

      return Boolean(_source[path]);
    }
  });
};
