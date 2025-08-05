import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home-page'

test('Header buttons validation', async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();
  await expect(page).toHaveTitle('LEAD Consult - ETRM | Energy Digitalisation| Energy IT Consulting');

  const navItems = [
    { method: 'clickDropdownNav', parent: 'About Us', child: 'Our Company', title: 'About us - LEAD Consult', url: '/about-us/' },
    { method: 'clickDropdownNav', parent: 'About Us', child: 'Core Values and Vision', title: 'Core Values and Vision - LEAD Consult', url: '/core-values-and-vision/' },
    { method: 'clickTopLevelNav', name: 'Services', title: 'Services - LEAD Consult', url: '/services/' },
    { method: 'clickTopLevelNav', name: 'Products', title: 'Products - LEAD Consult', url: '/products/' },
    { method: 'clickTopLevelNav', name: 'Customers', title: 'Customers - LEAD Consult', url: '/customers/' },
    { method: 'clickDropdownNav', parent: 'Our Partners', child: 'Business Partners', title: 'Business Partners - LEAD Consult', url: '/business-partners/' },
    { method: 'clickDropdownNav', parent: 'Our Partners', child: 'Technical Partners', title: 'Technical Partners - LEAD Consult', url: '/technical-partners/' },
    { method: 'clickTopLevelNav', name: 'Careers', title: 'Careers - LEAD Consult', url: '/careers/' },
    { method: 'clickDropdownNav', parent: 'Newsroom', child: 'News', title: 'News Articles - LEAD Consult', url: '/newsroom/category/articles/' },
    { method: 'clickDropdownNav', parent: 'Newsroom', child: 'LEAD Blog', title: 'Blog Archive - LEAD Consult', url: '/newsroom/category/blog/' },
    { method: 'clickDropdownNav', parent: 'Newsroom', child: 'Success Stories', title: 'Success Stories Archive - LEAD Consult', url: '/newsroom/category/success/' },
    { method: 'clickDropdownNav', parent: 'Newsroom', child: 'Whitepapers', title: 'Whitepapers Archive - LEAD Consult', url: '/newsroom/category/whitepapers/' },
    { method: 'clickDropdownNav', parent: 'Newsroom', child: 'Case Studies', title: 'Case Studies Archive - LEAD Consult', url: '/newsroom/category/case-studies/' },
    { method: 'clickDropdownNav', parent: 'Newsroom', child: 'Webinars', title: 'Webinars Archive - LEAD Consult', url: '/newsroom/category/webinars/' },
    { method: 'clickDropdownNav', parent: 'Newsroom', child: 'Events', title: 'Events Archive - LEAD Consult', url: '/newsroom/category/events/' },
    { method: 'clickTopLevelNav', name: 'Contact Us', title: 'Contact us - LEAD Consult', url: '/contact-us/' },
    { method: 'clickTopLevelNav', name: 'Home', title: 'LEAD Consult - ETRM | Energy Digitalisation| Energy IT Consulting', url: '/' },
  ];

  for (const item of navItems) {
    await test.step(`Navigate to ${item.method === 'clickTopLevelNav' ? item.name : `${item.parent} > ${item.child}`}`, async () => {
      if (item.method === 'clickTopLevelNav') {
        await home.clickTopLevelNav(item.name);
      } else {
        await home.clickDropdownNav(item.parent, item.child);
      }

      // Assert correct url and page title on each page navigation
      await expect(page).toHaveURL(item.url);
      await expect(page).toHaveTitle(item.title);
    });
  }
});