import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home-page'

test('About us text validation', async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();

  await home.clickDropdownNav('About Us', 'Our Company')
  await expect(page).toHaveURL('/about-us/');
  await expect(page).toHaveTitle('About us - LEAD Consult');

  // Assert the words "team" and "consulting" are present on the page layout
  await expect(page.locator('body')).toContainText(/team/i)
  await expect(page.locator('body')).toContainText(/consulting/i)
});