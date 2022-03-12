export interface Address {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: Geolocation,
}

export interface Geolocation {
  lat: string,
  lng: string
}
