import { expect, test } from '@fixtures/base';
import mockedData from '@ui/data/mock.json';

test('should display mocked response', async ({ page }) => {

    await page.route('**/api/books', async (route) => {
        await route.fulfill({ contentType: 'application/json', body: JSON.stringify(mockedData) });
    });

    let data: unknown;

    page.on('request', async (request) => {
        if (request.url().includes('/api/books')) {
            const response = await request.response();
            data = await response?.json();
        }
    });

    await page.goto('https://danube-web.shop/');
    expect(await page.locator('.preview').all()).toHaveLength(1);
    expect(data).toEqual(mockedData);

});