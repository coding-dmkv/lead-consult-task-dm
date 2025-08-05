import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home-page'
import { ContactUsPage } from '../pages/contact-us-page';

test('Contact us form input fill and validation', async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();

  await home.clickTopLevelNav('Contact Us')
  await expect(page).toHaveURL('/contact-us/');
  await expect(page).toHaveTitle('Contact us - LEAD Consult');

  const contactPage = new ContactUsPage(page);
  await page.waitForLoadState('networkidle');
  await contactPage.fillForm({
    'Your Name*': 'Dino Makarinov',
    'Your Email*': 'test_dm@abv.bg',
    'Your Phone Number': '+359885784286',
    'Your Message*': 'Hello, Lead Consult!'
  }, 'contactForm');

  // Assert form is filled with expected values
  await expect(contactPage.getInputByLabel('Your Name*', 'contactForm')).toHaveValue('Dino Makarinov');
  await expect(contactPage.getInputByLabel('Your Email*', 'contactForm')).toHaveValue('test_dm@abv.bg');
  await expect(contactPage.getInputByLabel('Your Phone Number', 'contactForm')).toHaveValue('+359885784286');
  await expect(contactPage.getInputByLabel('Your Message*', 'contactForm')).toHaveValue('Hello, Lead Consult!');
});