import * as config from 'config';

/**
 * First try to return data from env and if not found will return
 * from config
 * @param key
 * @param defaultValue
 */
export function envOrConfig(key: string, defaultValue?: any) {
  try {
    return config.util.getEnv(key) || config.get(key);
  } catch {
    return defaultValue || null;
  }
}

export function onlyConfig<T>(key: string): T {
  return config.get(key);
}

export function dbConfig(key: string) {
  try {
    return envOrConfig(key) || onlyConfig(`db.${key}`);
  } catch {
    return onlyConfig(`db.${key}`);
  }
}
export function jwtSessionConfig(key: string) {
  try {
    return envOrConfig(key) || onlyConfig(`jwt.session.${key}`);
  } catch {
    return onlyConfig(`db.session.${key}`);
  }
}
export function jwtAppsConfig(key: string) {
  try {
    return envOrConfig(key) || onlyConfig(`jwt.apps.${key}`);
  } catch {
    return onlyConfig(`db.apps.${key}`);
  }
}
