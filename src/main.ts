export class Password {
  private static readonly minLength: number = 8

  static ensureIsValid(password: string) {
    const validation = password.length > this.minLength

    return validation && password.toLowerCase() !== password
  }
}
