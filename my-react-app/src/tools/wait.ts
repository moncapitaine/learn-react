export const wait = async (timeInMilliseconds: number): Promise<void> => {
  const result = new Promise<void>((resolve, _reject) => {
    setTimeout(() => resolve(undefined), timeInMilliseconds)
  })
  return result
}