import * as config from 'config';

/**
 * First try to return data from env and if not found will return
 * from config
 * @param key
 * @param defaultValue
 */
export function envOrConfig(
  key: string,
  configPath: string,
  defaultValue?: any,
) {
  try {
    return config.util.getEnv(key) || config.get(`${configPath}.${key}`);
  } catch {
    return defaultValue || null;
  }
}

export function onlyConfig<T>(key: string): T {
  return config.get(key);
}

export function dbConfig(key: string) {
  try {
    return envOrConfig(key, 'db') || onlyConfig(`db.${key}`);
  } catch {
    return onlyConfig(`db.${key}`);
  }
}
export function jwtSessionConfig(key: string) {
  return envOrConfig(key, 'jwt.session');
}
export function jwtAppsConfig(key: string) {
  return envOrConfig(key, 'jwt.apps');
}
