// Profile Page Tests
import { test, expect } from '@playwright/test';
test.describe.configure({retries :3});
  
test.describe('Profile Page Tests', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('https://www.instagram.com/vaishnavi_kirdat/'); 
    });

    test('Profile Page - Should display username', async ({ page }) => {
       //test.setTimeOut(30000);
       test.slow();
      await page.goto('https://www.instagram.com/vaishnavi_kirdat/');
      const usernameSelector='span.x1lliihq.x193iq5w.x6ikm8r.x10wlt62.xlyipyv.xuxw1ft';
      const username= page.locator(usernameSelector);
      await expect(username).toBeVisible();
    });

    test('should have a profile picture', async ({ page }) => {
      await page.goto('https://www.instagram.com/vaishnavi_kirdat'); 
      const profilePic = page.locator('img[alt="Profile picture"]');
      await expect(profilePic).toBeVisible({timeout : 5000});
    });

    test('Profile Page - Should have a follower count', async ({ page }) => {
      await page.goto('https://www.instagram.com/vaishnavi_kirdat/');
      const followerCount = page.locator('a[href="/vaishnavi_kirdat/followers/"]');
      await expect(followerCount).toBeVisible();
    });

    test('Profile Page - Should have a following count', async ({ page }) => {
      await page.goto('https://www.instagram.com/vaishnavi_kirdat/');
      const followingCount = page.locator('a[href="/vaishnavi_kirdat/following/"]');
      await expect(followingCount).toBeVisible();
    });
  });