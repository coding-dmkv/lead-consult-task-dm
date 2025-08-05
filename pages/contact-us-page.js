import { expect } from "@playwright/test";

export class ContactUsPage {
  constructor(page) {
    this.page = page;
    this.contactForm = page.locator('form[aria-label="Kontaktformular"]');
    this.callbackForm = page.locator('form[aria-label="Contact form"]');
  }

  getInputByLabel(labelText, formName) {
    return this[formName].getByLabel(labelText);
  }

  getButtonByValue(valueText) {    
    return this.page.locator(`input[type="submit"][value="${valueText}"]`);
  }

  getCheckboxByText(visibleText, formName) {
    return this[formName]
      .locator('label', { hasText: visibleText })
      .locator('input[type="checkbox"]');
  }

  async fillInput(labelText, formName, value) {
    const input = this.getInputByLabel(labelText, formName);
    await input.waitFor({ state: 'visible' });
    await expect(input).toBeEnabled();
    await input.page().waitForTimeout(150);    
    
    await input.click();
    await input.fill(value);

    await expect(input).toHaveValue(value);
  }

  async fillForm(fields, formName) {
    for (const [label, value] of Object.entries(fields)) {
      await this.fillInput(label, formName, value);
    }
  }

  async expectCaptchaErrorVisible() {
    const errorLocator = this.contactForm.locator('span[data-name="recaptcha"]', {
      hasText: 'Please verify that you are not a robot.'
    });
    await errorLocator.waitFor({ state: 'visible' });
    await expect(errorLocator).toBeVisible();
  }
}