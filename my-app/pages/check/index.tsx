import axios from "axios";
import { useState } from "react";

export interface GeometryProps {
  location: {
    lat: number;
    lng: number;
  };
}
export interface AddressDeliveryProp {
  formatted_address: string;
  hasData: boolean;
}

export interface AddressDeliveryProp {
  formatted_address: string;
  hasData: boolean;
}
export interface DataGeograph {
  data: {
    result: [];
  };
}
const initAddressDeliveryProps: AddressDeliveryProp = {
  formatted_address: "",
  hasData: false,
};
export default function DeliveryContainer() {
  const callGeocodingToGetAddress = async (postalCode: string) => {
    let urlgetgeographic =
      "https://maps.googleapis.com/maps/api/geocode/json?&components=postal_code:310144|country:SG&key=AIzaSyAhgSNni858fzcgZ6ipBvnsfm8izTf2HxI";

    //get geographic coordinates
    await axios
      .get(
        `${urlgetgeographic}
       `
      )
      .then((response) => {
        console.log(response, "response");
      })
      .catch((error) => {});
  };

  return (
    <button onClick={() => callGeocodingToGetAddress("571150")}>onclick</button>
  );
}
