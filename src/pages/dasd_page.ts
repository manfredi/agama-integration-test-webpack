import { type Page } from "puppeteer-core";

export class DasdPage {
  private readonly page: Page;

  private readonly selectRow = (index) =>
    this.page.locator(`::-p-aria(Select row ${index}[role=\\"checkbox\\"])`);

  private readonly performAnActionToggleButton = () =>
    this.page.locator("::-p-text('Perform an action')");

  private readonly activateDisk = () => this.page.locator("::-p-text('Activate')");

  private readonly backToDeviceSelectionButton = () =>
    this.page.locator("button::-p-text(Back to device selection)");

  constructor(page: Page) {
    this.page = page;
  }

  async activateDevice() {
    await this.selectRow(0).click();
    await this.performAnActionToggleButton().click();
    await this.activateDisk().click();
  }

  async backToDeviceSelection() {
    await this.backToDeviceSelectionButton().click();
  }
}