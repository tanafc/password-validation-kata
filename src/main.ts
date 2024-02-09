export class Password {
  private static readonly minLength: number = 8

  static ensureIsValid(password: string) {
    return (
      this.ensureIsLongEnough(password) &&
      this.ensureContainsAnUppercase(password) &&
      this.ensureContainsALowercase(password) &&
      this.ensureContainsANumber(password) &&
      this.ensureContainsAnUnderscore(password)
    )
  }

  private static ensureIsLongEnough(password: string) {
    return password.length > this.minLength
  }

  private static ensureContainsAnUppercase(password: string) {
    return password.toLowerCase() !== password
  }

  private static ensureContainsALowercase(password: string) {
    return password !== password.toUpperCase()
  }

  private static ensureContainsANumber(password: string) {
    return password.split("").some((character) => !isNaN(Number(character)))
  }

  private static ensureContainsAnUnderscore(password: string) {
    return password.includes("_")
  }
}
