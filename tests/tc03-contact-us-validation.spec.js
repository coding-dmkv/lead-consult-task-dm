import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home-page'
import { ContactUsPage } from '../pages/contact-us-page';

test('Contact us form input validation', async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();

  await home.clickTopLevelNav('Contact Us')
  await expect(page).toHaveURL('/contact-us/');
  await expect(page).toHaveTitle('Contact us - LEAD Consult');

  const contactPage = new ContactUsPage(page);
  await expect(contactPage.getInputByLabel('Your Name*', 'contactForm')).toBeVisible();
  await expect(contactPage.getInputByLabel('Your Email*', 'contactForm')).toBeVisible();
  await expect(contactPage.getInputByLabel('Your Phone Number', 'contactForm')).toBeVisible();
  await expect(contactPage.getInputByLabel('Your Message*', 'contactForm')).toBeVisible();
  await expect(contactPage.getButtonByValue('Send', 'contactForm')).toBeVisible();
});