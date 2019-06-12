export const logError = (actionName, error) => {
  const message = error.response ? error.response.data.error.message : (error && error.message)
  console.error(`${actionName} failed, detail message => ${message}`)
}
