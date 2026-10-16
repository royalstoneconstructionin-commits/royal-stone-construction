// Plot details follow the labels on the supplied Royal Stone concept images.
export const floorPlans = [
  { image: "map", title: "20 × 30 House Floor Plan", width: 20, length: 30, category: "Residential", layout: "2 bedrooms" },
  { image: "map1", title: "25 × 50 House Floor Plan", width: 25, length: 50, category: "Residential", layout: "3 bedrooms" },
  { image: "map2", title: "20 × 40 House Floor Plan", width: 20, length: 40, category: "Residential", layout: "3 bedrooms" },
  { image: "map3", title: "20 × 40 House Floor Plan — II", width: 20, length: 40, category: "Residential", layout: "3 bedrooms" },
  { image: "map4", title: "30 × 40 Duplex Floor Plan", width: 30, length: 40, category: "Duplex", layout: "Ground + first floor" },
  { image: "map5", title: "30 × 50 Modern House Plan", width: 30, length: 50, category: "Residential", layout: "4 bedrooms" },
  { image: "map6", title: "20 × 40 House Plan", width: 20, length: 40, category: "Residential", layout: "3 bedrooms" },
  { image: "map7", title: "35 × 50 Family House Plan", width: 35, length: 50, category: "Residential", layout: "3 bedrooms" },
  { image: "map8", title: "35 × 60 Luxury House Plan", width: 35, length: 60, category: "Residential", layout: "4 bedrooms" },
  { image: "map9", title: "40 × 50 Apartment Design", width: 40, length: 50, category: "Apartment", layout: "3 bedrooms" },
  { image: "map10", title: "40 × 60 Apartment Plan", width: 40, length: 60, category: "Apartment", layout: "Typical floor" },
  { image: "map11", title: "50 × 60 Duplex Design", width: 50, length: 60, category: "Duplex", layout: "Ground + first floor" },
];

export type FloorPlan = (typeof floorPlans)[number];
