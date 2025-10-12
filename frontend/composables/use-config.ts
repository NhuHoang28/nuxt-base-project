import {get} from 'lodash';

const CONFIG = {
  constants: {
    pagination: 15,
  },
};

const useConfig = () => {
  const getConfig = (
    keyPath: string,
    defaultValue?: any,
  ): any => get(CONFIG, keyPath, defaultValue);
  return {getConfig};
};

export default useConfig;
