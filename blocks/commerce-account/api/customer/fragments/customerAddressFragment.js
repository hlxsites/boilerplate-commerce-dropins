const customerAddressFragment = `
  firstname
  lastname
  city
  company
  country_code
  region{
      region
      region_code
      region_id
  }
  region_id
  telephone
  id
  vat_id
  postcode
  street
  default_shipping
  default_billing
`;

export default customerAddressFragment;
