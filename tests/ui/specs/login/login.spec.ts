import { localEnv } from '@env/manager';
import { expect, test } from '@fixtures/base';

test.beforeEach('open app', async ({ loginPage }) => {
    await loginPage.open();
    await expect(loginPage.pageHeader).toBeVisible();
});

test('company footer link', async ({ loginPage }) => {
    await expect(loginPage.companyLinkFooter).toBeVisible();
});

test('should login with valid username and password', async ({ loginPage, landingPage }) => {
    await loginPage.login(localEnv.USERNAME, localEnv.PASSWORD);
    await expect(landingPage.pageHeader).toBeVisible();
});

test('should not login with invalid username', async ({ page, loginPage }) => {
    await loginPage.login('tester', localEnv.PASSWORD);
    await expect(page.getByRole('alert')).toHaveText('Invalid credentials');
});

test('should not login with invalid password', async ({ page, loginPage }) => {
    await loginPage.login(localEnv.USERNAME, 'password');
    await expect(page.getByRole('alert')).toHaveText('Invalid credentials');
});


test('should not login without username', async ({ loginPage }) => {
    await loginPage.login('', localEnv.PASSWORD);
    await expect(await loginPage.getRequiredErrorMessage('Username')).toHaveText('Required');
});

test('should not login without password', async ({ loginPage }) => {
    await loginPage.login(localEnv.USERNAME, '');
    await expect(await loginPage.getRequiredErrorMessage('Password')).toHaveText('Required');
});
