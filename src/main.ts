export function validatePassword(password: string) {
  const validation = password.length > 7

  return validation
}
