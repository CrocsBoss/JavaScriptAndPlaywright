import {test} from '@playwright/test';

test('Test Description', async ({page}) => {
   await page.goto('https://www.google.com/');
   await page.waitForTimeout(3000);


   //if promises used needs to come with 'await', to understand if a method promises basically just hoverover 

   let searchBox =  page.locator("//textarea[@class='gLFyf']");
  //  await searchBox.type("Baba NAberrr"); 'type' types charecters one by one
   await searchBox.fill("Baba NAberrr");  // fill more preffered
   await page.waitForTimeout(3000);
  



});

/*
<    class="gLFyf" aria-controls="Alh6id" aria-owns="Alh6id" autofocus="" title="Ara" value="" jsaction="paste:puy29d;" aria-label="Ara" aria-autocomplete="both" aria-expanded="false" aria-haspopup="false" autocapitalize="off" autocomplete="off" autocorrect="off" id="APjFqb" maxlength="2048" name="q" role="combobox" rows="1" spellcheck="false" data-ved="0ahUKEwj94tOUkNKIAxXjrYkEHdLnAuwQ39UDCA0"></textarea>


//textarea[@class='gLFyf']
*/
