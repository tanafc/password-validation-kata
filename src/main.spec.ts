import { describe, expect, it } from "vitest"
import { Password } from "./main.js"

// Tener más de 8 caracteres
// Contener una letra mayúscula
// Contener una letra minúscula
// Contener un número
// Contener un guión bajo

// True => Password_1

describe("Password validator", () => {
  it("validates a password", () => {
    const password = "Password_1"

    const isValid = Password.ensureIsValid(password)

    expect(isValid).toBe(true)
  })

  it("validates that the password is long enough", () => {
    const shortPassword = "Passw_1"

    const isValid = Password.ensureIsValid(shortPassword)

    expect(isValid).toBe(false)
  })

  it("validates that the password contains an uppercase character", () => {
    const lowercasePassword = "password_1"

    const isValid = Password.ensureIsValid(lowercasePassword)

    expect(isValid).toBe(false)
  })

  it("validates that the password contains a lowercase character", () => {
    const uppercasePassword = "PASSWORD_1"

    const isValid = Password.ensureIsValid(uppercasePassword)

    expect(isValid).toBe(false)
  })

  it("validates that the password contains a number", () => {
    const letterPassword = "Password_"

    const isValid = Password.ensureIsValid(letterPassword)

    expect(isValid).toBe(false)
  })

  it("validates that the password contains an underscore", () => {
    const passwordWithoutUnderscore = "Password1"

    const isValid = Password.ensureIsValid(passwordWithoutUnderscore)

    expect(isValid).toBe(false)
  })

  it("validates a password that contains a 0 as number", () => {
    const passwordWithZero = "Password_0"

    const isValid = Password.ensureIsValid(passwordWithZero)

    expect(isValid).toBe(true)
  })
})
