// Explore Page Tests
import { test, expect } from '@playwright/test';
test.describe('Explore Page', () => {
    test('Explore Page - Should load successfully', async ({ page }) => {
      await page.goto('https://www.instagram.com/explore/?hI=en');
      await expect(page).toHaveTitle(/Explore/);
    });

    test('Explore Page - Should display trending posts', async ({ page }) => {
      await page.goto('https://www.instagram.com/explore/?hI=en');
      const trendingPosts = page.locator('article');
      await expect(trendingPosts).toBeVisible();
    });

    test('Explore Page - Should have a search bar', async ({ page }) => {
      await page.goto('https://www.instagram.com/explore/hI=en');
      const searchBar = page.locator('input[aria-label="Search input"]');
      await expect(searchBar).toBeVisible();
    });

    test('Explore Page - Should display a grid of photos', async ({ page }) => {
      await page.goto('https://www.instagram.com/explore/?hI=en');
      const photoGrid = page.locator('div[data-visualcompletion="ignore"]"]');
      
      await expect(photoGrid).toBeVisible();
    });

    test('Explore Page - Should have profile links for posts', async ({ page }) => {
      await page.goto('https://www.instagram.com/explore/?hI=en');
      const profileLinks = page.locator('a[href^="/"]');
      await expect(profileLinks).toBeVisible();
    });
  });