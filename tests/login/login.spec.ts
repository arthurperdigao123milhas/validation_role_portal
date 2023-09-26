import { test, Page, chromium } from "@playwright/test";
import { configs } from "./constant";
import { TIMEOUT } from "dns";


  test("autotange", async ({ page }) => {
    await make_request(page);
  }); 

async function make_request(page: Page) {


    await page.goto(`${configs.url}/login`);
    await page.locator('#login').fill(`${configs.LOGIN_URL}`);
    await page.locator('#password').fill(`${configs.PASSWORD_URL}`);
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.goto('https://tangerino.pipedrive.com/activities/list/user/19356873');

    
// Encontre a div que contém o texto "FVSB - Comunicação de boas vindas"
const divComunicacao = document.querySelector('div[role="row"]:contains("FVSB - Comunicação de boas vindas")');

if (divComunicacao) {
  // Encontre a palavra "[CSI]" dentro da mesma div
  const palavraCSI = divComunicacao.querySelector('div:contains("[CSI]")');
  
  if (palavraCSI) {
    // Você encontrou a palavra "[CSI]" dentro da div.
    // Não é necessário adicionar um ouvinte de clique, a menos que você queira realizar alguma ação específica após o clique.
  }
}






}

    
  
