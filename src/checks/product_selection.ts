import { it, page } from "../lib/helpers";
import { OverviewPage } from "../pages/overview_page";
import { OverviewWithSidebarPage } from "../pages/overview_with_sidebar_page";
import {
  ProductSelectionPage,
  ProductSelectionWithLicenseAndModePage,
  ProductSelectionWithLicensePage,
} from "../pages/product_selection_page";

function reviewAndAcceptlicenseAndAcceptProduct(productSelectionWithLicensePage) {
  it(`should allow to review its license`, async function () {
    productSelectionWithLicensePage = new ProductSelectionWithLicensePage(page);
    await productSelectionWithLicensePage.openLicense();
    await productSelectionWithLicensePage.verifyLicense();
    await productSelectionWithLicensePage.closeLicense();
  });
  it(`should allow to accept its license`, async function () {
    await productSelectionWithLicensePage.acceptProductLicense();
  });
  it(`should allow to accept selected product`, async function () {
    await productSelectionWithLicensePage.select();
  });
}

export function ensureLandingOnOverview() {
  it(
    "should display Overview",
    async function () {
      await new OverviewPage(page).waitVisible(70000);
    },
    71 * 1000,
  );
}

export function ensureLandingOnOverviewWithSidebar() {
  it(
    "should display Overview",
    async function () {
      await new OverviewWithSidebarPage(page).waitVisible(70000);
    },
    71 * 1000,
  );
}

export function productSelection(productId: string) {
  it(`should allow to select product ${productId}`, async function () {
    const productSelectionPage = new ProductSelectionPage(page);
    await productSelectionPage.choose(productId);
    await productSelectionPage.select();
  });
}

export function productSelectionWithSidebar(productId: string) {
  it(`should allow to select product ${productId}`, async function () {
    const productSelectionPage = new ProductSelectionPage(page);
    await productSelectionPage.choose(productId);
    await productSelectionPage.select();
  });
}

export function productSelectionWithLicense(productId: string) {
  let productSelectionWithLicensePage: ProductSelectionWithLicensePage;
  it(`should allow to choose product ${productId}`, async function () {
    productSelectionWithLicensePage = new ProductSelectionWithLicensePage(page);
    await productSelectionWithLicensePage.choose(productId);
  });
  reviewAndAcceptlicenseAndAcceptProduct(productSelectionWithLicensePage);
}

export function productSelectionWithLicenseAndMode(productId: string, productMode: string) {
  let productSelectionWithLicenseAndModePage: ProductSelectionWithLicenseAndModePage;
  it(`should allow to choose product ${productId}`, async function () {
    productSelectionWithLicenseAndModePage = new ProductSelectionWithLicenseAndModePage(page);
    await productSelectionWithLicenseAndModePage.choose(productId);
  });
  it(`should allow to select mode ${productMode}`, async function () {
    await productSelectionWithLicenseAndModePage.selectMode(productMode);
  });
  reviewAndAcceptlicenseAndAcceptProduct(productSelectionWithLicenseAndModePage);
}

export function productSelectionWithLicenseWithSidebar(productId: string) {
  it(`should allow to choose product ${productId}`, async function () {
    await new ProductSelectionWithLicensePage(page).choose(productId);
  });
  it(`should allow to review its license`, async function () {
    const productSelectionWithLicensePage = new ProductSelectionWithLicensePage(page);
    await productSelectionWithLicensePage.openLicense();
    await productSelectionWithLicensePage.verifyLicense();
    await productSelectionWithLicensePage.closeLicense();
  });
  it(`should allow to accept its license`, async function () {
    await new ProductSelectionWithLicensePage(page).acceptProductLicense();
  });
  it(`should allow to select product`, async function () {
    await new ProductSelectionWithLicensePage(page).select();
  });
}
