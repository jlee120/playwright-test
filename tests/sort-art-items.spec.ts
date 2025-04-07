import {test, expect} from '@playwright/test';

// Test case: Add lowest price clothing piece to cart
test('Sort art items', async ({page}) => {

    // Go to the website
    await page.goto('https://demo.prestashop.com/#/en/front');
    
    // Set frame
    const frame = page.frameLocator('#framelive');

    await frame.getByRole('link', { name: 'Art' }).click();
    await expect(frame.getByRole('heading', { name: 'Art' })).toBeVisible();

    await frame.getByRole('button', { name: 'Sort by selection' }).click();
    await frame.getByRole('link', { name: 'Sales, highest to lowest' }).click();
    await page.waitForTimeout(1000);

    let dropdownValue = await frame.getByRole('button', { name: 'Sort by selection' }).innerText();
    await expect(dropdownValue).toContain('Sales, highest to lowest');

    await frame.getByRole('button', { name: 'Sort by selection' }).click();
    await frame.getByRole('link', { name: 'Name, A to Z' }).click();
    await page.waitForTimeout(1000);

    dropdownValue = await frame.getByRole('button', { name: 'Sort by selection' }).innerText();
    await expect(dropdownValue).toContain('Name, A to Z');

    await frame.getByRole('button', { name: 'Sort by selection' }).click();
    await frame.getByRole('link', { name: 'Name, Z to A' }).click();
    await page.waitForTimeout(1000);

    dropdownValue = await frame.getByRole('button', { name: 'Sort by selection' }).innerText();
    await expect(dropdownValue).toContain('Name, Z to A');

    await frame.getByRole('button', { name: 'Sort by selection' }).click();
    await frame.getByRole('link', { name: 'Price, low to high' }).click();
    await page.waitForTimeout(1000);

    dropdownValue = await frame.getByRole('button', { name: 'Sort by selection' }).innerText();
    await expect(dropdownValue).toContain('Price, low to high');

    await frame.getByRole('button', { name: 'Sort by selection' }).click();
    await frame.getByRole('link', { name: 'Price, high to low' }).click();
    await page.waitForTimeout(1000);

    dropdownValue = await frame.getByRole('button', { name: 'Sort by selection' }).innerText();
    await expect(dropdownValue).toContain('Price, high to low');

    await frame.getByRole('button', { name: 'Sort by selection' }).click();
    await frame.getByRole('link', { name: 'Relevance' }).click();
    await page.waitForTimeout(1000);

    dropdownValue = await frame.getByRole('button', { name: 'Sort by selection' }).innerText();
    await expect(dropdownValue).toContain('Relevance');
    }


);

