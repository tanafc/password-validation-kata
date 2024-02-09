import { describe, it, expect } from "vitest"
import { validatePassword } from "./main.js"

// Tener más de 8 caracteres
// Contener una letra mayúscula
// Contener una letra minúscula
// Contener un número
// Contener un guión bajo

// True => Password_1

describe("Password validator", () => {
  it("validates a password", () => {
    const password = "Password_1"

    const isValid = validatePassword(password)

    expect(isValid).toBe(true)
  })

  it("validates that the password is long enough", () => {
    const shortPassword = "Passw_1"

    const isValid = validatePassword(shortPassword)

    expect(isValid).toBe(false)
  })
})
