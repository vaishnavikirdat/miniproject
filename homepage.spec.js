
import { test, expect } from '@playwright/test';
test.describe.configure({retries :3});

test.describe('Instagram Web Application Tests', () => {

  // Home Page Tests
  test.describe('Home Page', () => {
    //test.setTimeOut(30000);
    test.slow();
    test('Home Page - Should load successfully', async ({ page }) => {
      await page.goto('https://www.instagram.com/');
      await expect(page).toHaveTitle(/Instagram/);
    });

    test('Home Page - Should display the login form', async ({ page }) => {
      //test.setTimeOut(30000);
      test.slow();
      await page.goto('https://www.instagram.com/');
      const loginForm = page.locator('form[method="post"]');
      await expect(loginForm).toBeVisible();
    });

    test('should display the Instagram logo', async ({ page }) => {
      await page.goto('https://www.instagram.com');
      const logo = page.locator('[aria-label="Instagram"]'); 
      await expect(logo).toBeVisible();
    });

   test('Home Page - Should have a sign up link', async ({ page }) => {
      await page.goto('https://www.instagram.com/');
      await page.waitForSelector('text= Sign up',{timeout:10000});
      const signUpLink = page.locator('text=Sign up');
      await expect(signUpLink).toBeVisible();
    });

   test('Home Page - Should have a “Forgot password?” link', async ({ page }) => {
      await page.goto('https://www.instagram.com/');
      const forgotPasswordLink = page.locator('text="Forgot password?"');
      await expect(forgotPasswordLink).toBeVisible();
    });
    test('Verify Instagram profile page for vaishnavi_kirdat', async ({ page }) => {
  
      await page.goto('https://www.instagram.com/accounts/login/');
      await page.fill('input[name="username"]','vaishnavi_kirdat');
      await page.fill('input[name="password"]','vaishnavi02@');
      await page.click('button[type="submit"]');
      await page.waitForLoadState('networkidle');
      const homeIcon = page.locator('svg[aria-label="Home"]');
      await expect(homeIcon).toBeVisible();
      
      
      await expect(page).toHaveURL(/.*instagram.com/);
    });
      
  });
});
   
  

   


