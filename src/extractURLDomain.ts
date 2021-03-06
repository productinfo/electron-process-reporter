import * as memoize from 'memoizee';
import { parse } from 'url';

const extractURLDomain = (urlString: string): string => {
  const url = parse(urlString);

  if (url.protocol == 'https:' || url.protocol == 'http:') {
    return url.hostname;
  }

  return '';
};

// memoize it for performance
export default memoize(extractURLDomain, { max: 100 });
