import { expect, test } from "@playwright/test";

const viewports = [
  { name: "mobile", width: 390, height: 844 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1440, height: 900 }
] as const;

for (const viewport of viewports) {
  test(`home visual regression - ${viewport.name}`, async ({ page }) => {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/", { waitUntil: "networkidle" });
    await page.getByRole("banner").waitFor();
    await page.evaluate(() => {
      document.querySelectorAll("video").forEach((video) => {
        video.pause();
        video.currentTime = 0;
      });
    });
    const screenshot = await page.screenshot({
      fullPage: true,
      animations: "disabled"
    });
    expect(screenshot).toMatchSnapshot(`home-${viewport.name}.png`, { maxDiffPixelRatio: 0.02 });
  });
}
