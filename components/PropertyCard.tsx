import React from "react";
import type { PropertyProps } from "../interfaces";

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="h-48 w-full relative">
        <img
          src={property.image}
          alt={property.name}
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg">{property.name}</h3>
          <div className="text-sm text-yellow-600">
            ⭐ {property.rating.toFixed(2)}
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-1">
          {property.address.city}, {property.address.country}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            {property.offers.bed} bd · {property.offers.shower} sh
          </div>
          <div className="text-lg font-bold">${property.price}</div>
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;
