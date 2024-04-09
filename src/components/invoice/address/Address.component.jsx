import React from "react";

const AddressComponent = ({ marginTop }) => {
  return (
    <ul id="address" className={`hidden ${marginTop} flex-col gap-5 px-10 `}>
      <li className="flex gap-10  text-[12px]">
        <p>Bangkok</p>
        <p>
          Supamongkol Ville Village, House No. 9/17, Hathai Rat Road 72, Beng
          Kham Phroi Subdistrict, Lam Luk Ka District, Pathum Thani Province
          12150. +666 3234 1228
        </p>
      </li>
      <li className="flex gap-10 text-[12px]">
        <p>Yangon</p>
        <p>
          No. (61/B), Thuta(2)Street, (4) Quarter, south Okkalapa Township,
          Yangon. +959 5075 834
        </p>
      </li>
    </ul>
  );
};

export default AddressComponent;
