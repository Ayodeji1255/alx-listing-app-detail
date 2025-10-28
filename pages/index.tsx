import React, { useMemo, useState } from "react";
import { PROPERTYLISTINGSAMPLE, HERO_IMAGE } from "@/constants";
import PropertyCard from "@/components/PropertyCard";
import Pill from "@/components/Pill";

const FILTERS = [
  "Top Villa",
  "Self Checkin",
  "Beachfront",
  "Pet Friendly",
  "Infinity Pool",
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!activeFilter) return PROPERTYLISTINGSAMPLE;
    return PROPERTYLISTINGSAMPLE.filter((p) =>
      p.category.join("|").toLowerCase().includes(activeFilter.toLowerCase())
    );
  }, [activeFilter]);

  return (
    <div>
      <section
        className="flex justify-center items-center h-64 md:h-96 bg-cover bg-center rounded-2xl w-[80%] m-auto overflow-hidden"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        <div className="absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 text-white">
          <h1 className="text-3xl md:text-5xl font-bold text-center">
            Find your favorite place here!
          </h1>
          <p className="mt-2 text-sm md:text-lg text-center">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6 flex flex-wrap gap-3">
          {FILTERS.map((f) => (
            <Pill
              key={f}
              label={f}
              active={activeFilter === f}
              onClick={() => setActiveFilter(activeFilter === f ? null : f)}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <PropertyCard key={i} property={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
