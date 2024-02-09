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

    const result = validatePassword(password)

    expect(result).toBe(true)
  })

  it("validates that the password is long enough", () => {
    const incorrectPassword = "Passw_1"

    const result = validatePassword(incorrectPassword)

    expect(result).toBe(false)
  })
})
