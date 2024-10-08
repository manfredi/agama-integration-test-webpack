import puppeteer, { type Locator, type Page } from "puppeteer-core";

export class ProductSelectionPage {
    private readonly page: Page;
    private readonly leapText = () => this.page.locator("::-p-text('Leap 16.0 Alpha')");
    private readonly microOsText = () => this.page.locator("::-p-text('openSUSE MicroOS')");
    private readonly tumbleweedText = () => this.page.locator("::-p-text('openSUSE Tumbleweed')");
    private readonly selectButton = () => this.page.locator("button[form='productSelectionForm']");

    constructor(page: Page) {
        this.page = page;
    }

    async selectLeap() {
        await this.leapText().click();
        await this.selectButton().click();
    }

    async selectMicroOs() {
        await this.microOsText().click();
        await this.selectButton().click();
    }

    async selectTumbleweed() {
        await this.tumbleweedText().click();
        await this.selectButton().click();
    }
}

