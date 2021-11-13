import { apiServices } from '../apiServices/apiServices';

export function bindClient(AddressId, ClientId) {
  return apiServices.put(`/HousingStock/bind_client`, { AddressId, ClientId });
}
export function addClient(clientId, Name, Phone, Email, addressId) {
  return apiServices.post(`/HousingStock/client`, {
    Id: clientId,
    Name,
    Phone,
    Email,
    BindId: addressId,
  });
}
export function deleteClient(id) {
  return apiServices.delete(`/HousingStock/bind_client/${id}`);
}
