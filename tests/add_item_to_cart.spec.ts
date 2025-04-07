import {test, expect} from '@playwright/test';

// Test case: Add lowest price clothing piece to cart
test('Add clothing item to cart', async ({page}) => {

    // Go to the website
    await page.goto('https://demo.prestashop.com/#/en/front');
    // Set frame
    const frame = page.frameLocator('#framelive');
    // Click on "Clothes" tab
    await frame.getByRole('link', { name: 'Clothes' }).click();
    // Verify Clothes header
    await expect(frame.locator('span').filter({ hasText: 'Clothes' })).toBeVisible();
    // Sort by lowest price
    await frame.getByRole('button', { name: 'Sort by selection' }).click();
    await frame.getByRole('link', { name: 'Price, low to high' }).click();
    // await expect(await frame.getByRole('button', { name: 'Sort by selection' })).toHaveText("Price, low to high");
    await frame.locator("(//div[@id='js-product-list']//article)[1]").click();
    // Verify product cover is displayed
    await expect(frame.locator("(//div[@class='product-cover'])[1]")).toBeVisible();
    // Select size 'M'
    await frame.getByLabel('Size').selectOption('2');
    // Select color 'Black'
    await frame.getByRole('radio', { name: 'Black' }).check();
    // Select quantity 2
    await frame.getByRole('button', { name: '' }).click();
    // Click 'Add to cart' button
    await frame.getByRole('button', { name: ' Add to cart' }).click();
    // Verify confirmation dialog
    await expect(frame.locator("#blockcart-modal")).toBeVisible();
    // Verify product successfully added message
    await expect(frame.getByRole('heading', { name: ' Product successfully added' })).toBeVisible();
    // Click 'Continue Shopping' button
    await frame.getByRole('button', { name: 'Continue shopping' }).click();
    // Verify cart count is 2
    const cartCount = await frame.locator("//div[@id='_desktop_cart']//span[2]").innerText();
    const cartCountQuantity = cartCount.replace(/[()]/g, '');
    expect(cartCountQuantity).toEqual('2');
    // Go to cart
    await frame.getByRole('link', { name: 'Shopping cart link containing' }).click();
    // Verify 'Shopping cart' header
    await expect(frame.getByRole('link', { name: 'Shopping cart link containing' })).toBeVisible();
    await expect(frame.locator("//li[@class='cart-item']")).toBeVisible();
});

