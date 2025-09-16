export function getConfig(configName) {
  return import.meta.env[`VITE_${configName}`];
}
