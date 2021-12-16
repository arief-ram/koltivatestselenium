const { By, Key, Builder, WebElement } = require("selenium-webdriver");
require("chromedriver");

async function koltivaproducts() {
    //To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("chrome").build();

    //Goto Homepage 
    await driver.get("https://koltiva.com/");

    await new Promise(r => setTimeout(r, 1000));

    await driver.findElement(By.xpath('//*[@id="mainNavigation"]/li[5]/a')).click();

    await new Promise(r => setTimeout(r, 3000));

    driver.takeScreenshot().then(
        function(image) {
                require('fs').writeFileSync('koltiva-result.png', image, 'base64');
     }
    );

    var title = await driver.findElement(By.xpath('//*[@id="products"]/div[1]/h2')).getText();

    console.log(title);

    var expectedTitle = 'Our Products';
    
    async function result() {
        if( title == expectedTitle) {
            console.log('PASS')
        } else {
            console.log('FAILED')
        }
    }
     
    await result()

   
    await new Promise(r => setTimeout(r, 3000));
    await driver.quit();
}
koltivaproducts()