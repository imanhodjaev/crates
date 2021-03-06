import reverse from "./reverse-recursion"

test("reverse recursive", () => {
  expect(reverse("keyword")).toBe("drowyek")
  expect(reverse("str")).toBe("rts")
  expect(reverse("123456789")).toBe("987654321")
  expect(reverse("181")).toBe("181")
  expect(reverse("100001")).toBe("100001")
})
