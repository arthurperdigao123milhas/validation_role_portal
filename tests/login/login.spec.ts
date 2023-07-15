import { test, Page, chromium } from "@playwright/test";
import { configs } from "./constant";
import { TIMEOUT } from "dns";


  test("test_gpe", async ({ page }) => {
    await make_request_gpe(page);
  }); // colocar a quantidade de voos que quero comprar

  test("test_operator", async ({ page }) => {
    await make_request_operator(page);
  }); // colocar a quantidade de voos que quero comprar

async function make_request_gpe(page: Page) {

  await page.goto(`${configs.url}/login`);

  async function solicitacoesview() {
    const viewsolic = page.locator('.MuiButton-label')
    
  }
  
  if (page.locator('a').filter({ hasText: 'Entrar com e-mail ou CPF' })) {
    await page.getByPlaceholder('Digite seu CPF ou e-mail').fill('01490221077');
    await page.getByPlaceholder('Digite sua senha').fill('12345678');
    await page.getByRole('button', { name: 'Entrar' }).click();
  }
    //validar primeiro em Pesquisar solicição se aparece os nomes escritos antes de eu pesquisar
    if (await page.waitForSelector('#teste')){
      await page.getByTestId('idRoutes').getByText('Pesquisar Solicitações').click();
      
    }
    if (await page.waitForSelector('.MuiButton-label')){
      await page.screenshot({ path: '/home/dev123/Documentos/portalcancelamento/print/sucessSolicitacao.png', fullPage: true });
    }else (await page.screenshot({ path: '/home/dev123/Documentos/portalcancelamento/print/falseSolicitacao.png', fullPage: true }))
    await page.pause();
    await page.getByRole('navigation').locator('i').click();
    await page.getByText('Simular cancelamento', { exact: true }).click();
    await page.getByPlaceholder('XXXXXX (OP) ou XXX-XXX-X-XX (HASH)').fill('1287660')
    await page.getByPlaceholder('000000-000000 (ID Oracle)').fill('200000-000000')
    await page.getByTestId('formChildButtonSubmit').click();
    if(await page.getByRole('button', { name: 'Selecione um motivo' }).isVisible()){
      await page.screenshot({ path: '/home/dev123/Documentos/portalcancelamento/print/sucessMotibo.png', fullPage: true });
    }else (await page.screenshot({ path: '/home/dev123/Documentos/portalcancelamento/print/falseMotivo.png', fullPage: true }))
    await page.pause();

  }


async function make_request_operator(page: Page) {

  await page.goto(`${configs.url}/login`);
  
  if (page.locator('a').filter({ hasText: 'Entrar com e-mail ou CPF' })) {
    await page.getByPlaceholder('Digite seu CPF ou e-mail').fill('72974093086');
    await page.getByPlaceholder('Digite sua senha').fill('12345678');
    await page.getByRole('button', { name: 'Entrar' }).click();
  }

    //validar primeiro em Pesquisar solicição se aparece os nomes escritos antes de eu pesquisar
    if (await page.waitForSelector('#teste')){
      await page.getByTestId('idRoutes').getByText('Pesquisar Solicitações').click();
      
    }
    await page.pause()
    //veja se a tag esta disponivel ou não
    const element = await page.$('tbody');
  
  if (element === null) {
    await page.screenshot({ path: '/home/dev123/Documentos/portalcancelamento/print/sucessSolicitacaoOperator.png', fullPage: true });
    }else (await page.screenshot({ path: '/home/dev123/Documentos/portalcancelamento/print/falseSolicitacaoOperator.png', fullPage: true }))
  
    await page.getByRole('navigation').locator('i').click();
    await page.getByText('Simular cancelamento', { exact: true }).click();
    await page.getByPlaceholder('XXXXXX (OP) ou XXX-XXX-X-XX (HASH)').fill('1287660')
    await page.getByPlaceholder('000000-000000 (ID Oracle)').fill('200000-000000')
    await page.getByTestId('formChildButtonSubmit').click();
    await page.getByRole('button', { name: 'Selecione um motivo' }).click();
    
    if (await page.getByRole('option', { name: 'Prejuízo' }).isVisible){
      await page.screenshot({ path: '/home/dev123/Documentos/portalcancelamento/print/falseMotivoOperator.png', fullPage: true });
    }else (await page.screenshot({ path: '/home/dev123/Documentos/portalcancelamento/print/sucessMotivoOperator.png', fullPage: true }))

    }

