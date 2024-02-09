export class Password {
  private static readonly minLength: number = 8

  static ensureIsValid(password: string) {
    return (
      this.ensureIsLongEnough(password) && this.ensureHasAnUppercase(password) && password !== password.toUpperCase()
    )
  }
  private static ensureIsLongEnough(password: string) {
    return password.length > this.minLength
  }

  private static ensureHasAnUppercase(password: string) {
    return password.toLowerCase() !== password
  }
}
