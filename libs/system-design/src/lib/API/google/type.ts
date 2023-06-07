export interface ILocationProps{
  latitude: number;
  longitude: number;
}
export interface ILocationResult{
  address_components:Array<object>;
  formatted_address: string;
  geometry:object;
  place_id:string;
  plus_code: object;
  types:Array<string>;
}
