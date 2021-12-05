/*
 * Title: Pdf Creator Using Node js
 * Description: Pdf Creator Using Node js and Puppeteer
 * Author: Mohammad Mesbaul Haque
 * Github link: https://github.com/mohammad-mesbaul-haque
 * Date: 06/12/2021
 */
 
// Dependencies.
 const puppeteer = require('puppeteer');
 
// main functions or objects.
const createPdf = async ()=>{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Creating options which will be passed later
    const options = {
        path: 'pdf/web1.pdf',
        format: 'A4'
    }

    // Define which site's page will be captured
    await page.goto('https://github.com/mohammad-mesbaul-haque', {waitUntil: 'networkidle2'});
    await page.pdf(options);

    await browser.close();
} 
 
// Call the main  function
createPdf();
 
 
 
// export the module.
 