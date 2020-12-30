function getConfig<T extends string>(configName: string): T {
  const config = process.env[configName]
  if (config === undefined) {
    throw new Error(`Missing config ${configName}`)
  }

  return config as T
}

export const config = {
  host: getConfig('REACT_APP_HOST'),
}
