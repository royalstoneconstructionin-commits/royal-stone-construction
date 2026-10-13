export const packageData = {
  Patna: [
    {
      name: "Silver Package",
      price: "₹6/sqft",
      popular: false,
      features: [
        "Floor Plan",
        "Plumbing Design",
        "Electric Design",
        "3D Front Elevation",
      ],
    },
    {
      name: "Gold Package",
      price: "₹8/sqft",
      popular: true,
      features: [
        "Floor Plan",
        "Plumbing Design",
        "Electric Design",
        "3D Front Elevation",
        "Column Layout Design",
        "Pile/Footing Layout Design",
        "Tie Beam Detail Design",
        "Slab Beam Detail Design",
        "Slab Reinforcement Details Design",
        "Staircase Section Details",
        "Septic Tank & Borewell Position",
      ],
    },
    {
      name: "Platinum Package",
      price: "₹30/sqft",
      popular: false,
      features: [
        "Floor Plan",
        "Plumbing Design",
        "Electric Design",
        "3D Front Elevation",
        "Column Layout Design",
        "Pile/Footing Layout Design",
        "Tie Beam Detail Design",
        "Slab Beam Detail Design",
        "Slab Reinforcement Details Design",
        "Staircase Section Details",
        "Septic Tank & Borewell Position",
        "3D Interior Design",
      ],
    },
  ],

  Noida: [
    {
      name: "Silver Package",
      price: "₹10/sqft",
      popular: false,
      features: [
        "Floor Plan",
        "Plumbing Design",
        "Electric Design",
        "3D Front Elevation",
      ],
    },
    {
      name: "Gold Package",
      price: "₹15/sqft",
      popular: true,
      features: [
        "Floor Plan",
        "Plumbing Design",
        "Electric Design",
        "3D Front Elevation",
        "Column Layout Design",
        "Pile/Footing Layout Design",
        "Tie Beam Detail Design",
        "Slab Beam Detail Design",
        "Slab Reinforcement Details Design",
        "Staircase Section Details",
        "Septic Tank & Borewell Position",
      ],
    },
    {
      name: "Platinum Package",
      price: "₹40/sqft",
      popular: false,
      features: [
        "Floor Plan",
        "Plumbing Design",
        "Electric Design",
        "3D Front Elevation",
        "Column Layout Design",
        "Pile/Footing Layout Design",
        "Tie Beam Detail Design",
        "Slab Beam Detail Design",
        "Slab Reinforcement Details Design",
        "Staircase Section Details",
        "Septic Tank & Borewell Position",
        "3D Interior Design",
      ],
    },
  ],
};

export type PackageCity = keyof typeof packageData;

export function packageEnquiryHref(city: PackageCity, name: string) {
  return `/get-quote?${new URLSearchParams({ city, package: name, purpose: "Architecture" })}`;
}