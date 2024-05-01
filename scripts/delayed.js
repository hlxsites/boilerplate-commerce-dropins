// eslint-disable-next-line import/no-cycle
import { sampleRUM } from './aem.js';
import { getConfigValue } from './configs.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

// add more delayed functionality here

// Load Commerce events SDK and collector
const config = {
  environmentId: await getConfigValue('commerce-environment-id'),
  environment: await getConfigValue('commerce-environment'),
  storeUrl: await getConfigValue('commerce-store-url'),
  websiteId: await getConfigValue('commerce-website-id'),
  websiteCode: await getConfigValue('commerce-website-code'),
  storeId: await getConfigValue('commerce-store-id'),
  storeCode: await getConfigValue('commerce-store-code'),
  storeViewId: await getConfigValue('commerce-store-view-id'),
  storeViewCode: await getConfigValue('commerce-store-view-code'),
  websiteName: await getConfigValue('commerce-website-name'),
  storeName: await getConfigValue('commerce-store-name'),
  storeViewName: await getConfigValue('commerce-store-view-name'),
  baseCurrencyCode: await getConfigValue('commerce-base-currency-code'),
  storeViewCurrencyCode: await getConfigValue('commerce-base-currency-code'),
  storefrontTemplate: 'Franklin',
};

// TODO: use from config, not hardcode.
const imsOrgId = 'DEDB2A52641B1D460A495F8E@AdobeOrg'; // await getConfigValue('commerce-ims-org');
const datastreamId = 'fedf2de7-16d7-482b-92e0-f56fba88c532'; // await getConfigValue('commerce-datastream-id'); //
const shouldEnableAEP = imsOrgId && datastreamId;

const payload = [
  { storefrontInstanceContext: config },
  { eventForwardingContext: { commerce: true, aep: shouldEnableAEP } },
];

if (shouldEnableAEP) {
  payload.push({ aepContext: { imsOrgId, datastreamId, webSdkName: '' } });
}

window.adobeDataLayer.push(...payload);

// Load events SDK and collector
import('./commerce-events-sdk.js');
import('./commerce-events-collector.js');
