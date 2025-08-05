export class HomePage {
  constructor(page) {
      this.page = page;
      this.nav = page.locator('#site-navigation');
  }

  // Single header button
  async clickTopLevelNav(linkText) {
      const link = this.nav.getByRole('link', { name: linkText });
      await link.waitFor({ state: 'visible' });
      await link.click();
  }

  // Multiple level dropdown
  async clickDropdownNav(parentText, childText) {
      const parentLink = this.nav.locator('a', { hasText: parentText });
      await parentLink.hover();

      const childLink = this.nav.getByRole('link', { name: childText, exact: true });
      await childLink.waitFor({ state: 'visible'});
      await childLink.click();
  }

  async goto() {
      await this.page.goto('/');
      await this.page.waitForLoadState('networkidle');
  }
}