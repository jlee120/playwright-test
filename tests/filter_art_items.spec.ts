import {test, expect} from '@playwright/test';

// Test case: Add lowest price clothing piece to cart
test('Filter art items', async ({page}) => {

    // Go to the website
    await page.goto('https://demo.prestashop.com/#/en/front');
    
    // Set frame
    const frame = page.frameLocator('#framelive');

    await frame.getByRole('link', { name: 'Art' }).click();
    await expect(frame.getByRole('heading', { name: 'Art' })).toBeVisible();

    await frame.getByRole('checkbox', { name: 'Matt paper (3)' }).check();

    await expect(frame.getByText('Active filters')).toBeVisible();
    await expect(frame.getByText('Composition: Matt paper ')).toBeVisible();
    await frame.getByText('').click();

    await frame.getByRole('checkbox', { name: 'Available (7)' }).check();

    await expect(frame.getByText('Active filters')).toBeVisible();
    await expect(frame.getByText('Availability: Available ')).toBeVisible();
    await frame.getByText('').click();

    await frame.getByRole('checkbox', { name: 'In stock (7)' }).check();

    await expect(frame.getByText('Active filters')).toBeVisible();
    await expect(frame.getByText('Availability: In stock ')).toBeVisible();
    await frame.getByText('').click();

    await frame.getByRole('checkbox', { name: 'Graphic Corner (6)' }).check();

    await expect(frame.getByText('Active filters')).toBeVisible();
    await expect(frame.getByText('Brand: Graphic Corner ')).toBeVisible();
    await frame.getByText('').click();

    await frame.getByRole('checkbox', { name: '40x60cm (3)' }).check();

    await expect(frame.getByText('Active filters')).toBeVisible();
    await expect(frame.getByText('Dimension: 40x60cm ')).toBeVisible();
    await frame.getByText('').click();

    await frame.getByRole('checkbox', { name: '60x90cm (3)' }).check();

    await expect(frame.getByText('Active filters')).toBeVisible();
    await expect(frame.getByText('Dimension: 60x90cm ')).toBeVisible();
    await frame.getByText('').click();

    await frame.getByRole('checkbox', { name: '80x120cm (3)' }).check();

    await expect(frame.getByText('Active filters')).toBeVisible();
    await expect(frame.getByText('Dimension: 80x120cm ')).toBeVisible();
    await frame.getByText('').click();

  
    }


);

