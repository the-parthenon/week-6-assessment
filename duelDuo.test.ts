import { Builder, Capabilities, By } from 'selenium-webdriver';

require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeEach(async () => {
  await driver.get('http://localhost:3000/');
});

afterAll(async () => {
  await driver.quit();
});

test('Title shows up when page loads', async () => {
  const title = await driver.findElement(By.id('title'));
  const displayed = await title.isDisplayed();
  expect(displayed).toBe(true);
});

test('Choices appear when clicking the Draw button', async () => {
  const choices = await driver.findElement(By.id('choices'));
  await driver.findElement(By.id('draw')).click();
  await driver.sleep(2000);
  const displayed = await choices.isDisplayed();
  expect(displayed).toBe(true);
});

test('Clicking Add to Duo displays the Player Duo div', async () => {
  await driver.findElement(By.id('draw')).click();
  const playerDuo = await driver.findElement(By.id('player-duo'));
  await driver.findElement(By.className('bot-btn')).click();
  await driver.sleep(2000);
  const displayed = await playerDuo.isDisplayed();
  expect(displayed).toBe(true);
});
