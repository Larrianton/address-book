import { apiServices } from '../apiServices/apiServices';

export function getStreets() {
  return apiServices.get('Request/streets');
}
export function getHouses(streetId) {
  return apiServices.get(`Request/houses/${streetId}`);
}
export function getFlats(houseId) {
  return apiServices.get(`Request/house_flats/${houseId}`);
}
export function getClients(addressId) {
  return apiServices.get(`HousingStock/clients?addressId=${addressId}`);
}
