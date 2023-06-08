export interface ILocationProps {
  latitude: number;
  longitude: number;
}

export interface ILocationResult {
  results: Array<IResult>;
}

export interface IResult {
  address_components: Array<IAddressComponent>;
  formatted_address: string;
  geometry: object;
  place_id: string;
  plus_code: object;
  types: Array<string>;
}

export interface IAddressComponent {
  long_name: string;
  short_name: string;
  types: Array<string>;
}
