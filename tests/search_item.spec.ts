import {test, expect} from '@playwright/test';

// Test case: Add lowest price clothing piece to cart
test('Search item by keyword', async ({page}) => {

    // Go to the website
    await page.goto('https://demo.prestashop.com/#/en/front');
    
    // Set frame
    const frame = page.frameLocator('#framelive');

    const string = 'notebook'
    await frame.getByRole('textbox', { name: 'Search' }).fill(string);
    await frame.getByRole('textbox', { name: 'Search' }).press('Enter');
    
    await expect(frame.getByRole('heading', { name: 'Search results' })).toBeVisible();

    await expect(await frame.locator("//div[@id='js-product-list-top']//p").innerText()).toEqual('There are 3 products.');
    await expect(await frame.locator("//div[@class='products row']/div").count()).toEqual(3);

    const results = await frame.locator("//div[@class='product-description']//a").allInnerTexts();
    
    for (let result = 0; result in results; result++){
        expect((results[result]).toLowerCase()).toContain(string.toLowerCase());
    }













    


});

