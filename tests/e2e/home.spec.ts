import { expect, test } from "@playwright/test";

test("portfolio loads and exposes the main navigation", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Anumandla Rohith/);
  await expect(page.getByRole("heading", { name: /Building useful intelligence/i })).toBeVisible();
  await expect(page.getByRole("link", { name: "Updated resume" }).first()).toHaveAttribute("href", "/documents/rohith-resume.pdf");
});
