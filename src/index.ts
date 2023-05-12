import type { WebAPI } from './types';
import { webAPIMapper } from './config';

const isWebAPISupport = (api: WebAPI | WebAPI[]) => {
  const apis = Array.isArray(api) ? api : [api];

  return apis.every((item) => {
    const mapper = webAPIMapper[item];
    if (mapper.checker) {
      return mapper.checker();
    } else {
      const { source, path } = mapper;

      return Boolean(source?.[path]);
    }
  });
};

export type { WebAPI };
export { isWebAPISupport };
