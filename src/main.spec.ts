import { describe, it, expect } from "vitest"
import { validatePassword } from "./main.js"

describe("Password validator", () => {
  it("validates a password", () => {
    const password = "dummy"

    const result = validatePassword(password)

    expect(result).toBe(true)
  })
})
