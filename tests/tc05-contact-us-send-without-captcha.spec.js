import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home-page'
import { ContactUsPage } from '../pages/contact-us-page';

test('Contact us form input fill and send without checking captcha', async ({ page }) => {
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
  
  await contactPage.getCheckboxByText(
    'I agree and allow LEAD Consult to store and process my personal data.',
    'contactForm'
  ).check({ force: true });
  await contactPage.getButtonByValue('Send').click();

  // Error message validation
  await contactPage.expectCaptchaErrorVisible();

});