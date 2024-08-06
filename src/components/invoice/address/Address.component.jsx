import React from "react";

const AddressComponent = ({ marginTop }) => {
  return (
    <ul id="address" className={`hidden ${marginTop} flex-col gap-2 px-10`}>
      <li className={`flex gap-5 text-[10px]`}>
        <p className="w-1/6">Bangkok</p>
        <p className="w-5/6">
          Supamongkol Ville Village, House No. 9/17, Hathai Rat Road 72, Beng
          Kham Phroi Subdistrict, Lam Luk Ka District, Pathum Thani Province
          12150. +666 3234 1228
        </p>
      </li>
      <li className={`flex gap-5 text-[10px]`}>
        <p className="w-1/6 text-nowrap">Chaing Mai</p>
        <p className="w-5/6">
          No. (257 / 180) , Soi Mu Ban Wiang Thong (3), Chang Khlan
          Sub-district, Mueang Chiang Mai District, Chiang Mai 50100. +668 150
          190 41
        </p>
      </li>
      <li className="flex gap-5 text-[10px]">
        <p className="w-1/6">Yangon</p>
        <p className="w-5/5">
          No. (61/B), Thuta(2)Street, (4) Quarter, south Okkalapa Township,
          Yangon. +959 5075 834
        </p>
      </li>
    </ul>
  );
};

export default AddressComponent;
