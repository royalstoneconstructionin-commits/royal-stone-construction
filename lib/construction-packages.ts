type ConstructionCategory = {
  name: string;
  note?: string;
  rows: { feature: string; specifications: [string, string, string] }[];
};

export const constructionPackages = [
  { name: "Silver", rate: "₹1,800 / sq.ft" },
  { name: "Gold", rate: "₹2,000 / sq.ft" },
  { name: "Platinum", rate: "₹2,300 / sq.ft" },
] as const;

export const constructionCategories: ConstructionCategory[] = [
  {
    "name": "DESIGN & PLANNING",
    "rows": [
      {
        "feature": "Design & Consultation",
        "specifications": [
          "Free",
          "Free",
          "Free"
        ]
      },
      {
        "feature": "Drawings",
        "specifications": [
          "2D Floor Plan & 3D Elevation",
          "2D Floor Plan & 3D Elevation",
          "2D Floor Plan & 3D Elevation"
        ]
      },
      {
        "feature": "Structural Design",
        "specifications": [
          "Not specified",
          "Not specified",
          "Not specified"
        ]
      }
    ]
  },
  {
    "name": "STRUCTURE",
    "rows": [
      {
        "feature": "Steel",
        "specifications": [
          "Kamdhenu / SAIL",
          "Jindal / JSW",
          "TATA Tiscon / Jindal"
        ]
      },
      {
        "feature": "Cement",
        "specifications": [
          "Ultratech",
          "ACC / Ultratech",
          "ACC / Ultratech / Concreto"
        ]
      },
      {
        "feature": "20mm Aggregate",
        "specifications": [
          "Gaya / Koderma",
          "Gaya / Koderma",
          "Gaya / Koderma"
        ]
      },
      {
        "feature": "Bricks",
        "specifications": [
          "A1 Quality",
          "A1 Quality",
          "A1 Quality"
        ]
      },
      {
        "feature": "RCC Mix",
        "specifications": [
          "M20",
          "M20",
          "M20"
        ]
      },
      {
        "feature": "Ceiling Height",
        "specifications": [
          "Not specified",
          "Not specified",
          "Not specified"
        ]
      }
    ]
  },
  {
    "name": "KITCHEN",
    "rows": [
      {
        "feature": "Ceramic Wall Dado",
        "specifications": [
          "Up to ₹40 / sq.ft",
          "Up to ₹60 / sq.ft",
          "Up to ₹80 / sq.ft"
        ]
      },
      {
        "feature": "Sink",
        "specifications": [
          "Up to ₹3,000 (Futura, Carysil)",
          "Up to ₹6,000 (Futura, Carysil)",
          "Up to ₹6,000 (Futura, Carysil)"
        ]
      },
      {
        "feature": "Sink Faucet",
        "specifications": [
          "Up to ₹1,000",
          "Up to ₹2,000",
          "Up to ₹2,000"
        ]
      },
      {
        "feature": "Sink Accessories",
        "specifications": [
          "Parryware",
          "Parryware / Hindware",
          "Parryware / Hindware / Jaquar"
        ]
      }
    ],
    "note": "All fittings can be customised at additional cost."
  },
  {
    "name": "BATHROOM",
    "rows": [
      {
        "feature": "Ceramic Wall Dado",
        "specifications": [
          "Up to ₹30 / sq.ft",
          "Up to ₹40 / sq.ft",
          "Up to ₹50 / sq.ft"
        ]
      },
      {
        "feature": "Sanitary & CP Fittings",
        "specifications": [
          "₹30,000 / 1,000 sq.ft (Parryware)",
          "₹40,000 / 1,000 sq.ft (Parryware / Hindware)",
          "₹50,000 / 1,000 sq.ft (Parryware / Hindware / Jaquar)"
        ]
      },
      {
        "feature": "CPVC Pipe",
        "specifications": [
          "Prince",
          "Supreme",
          "Supreme / Ashirvad"
        ]
      },
      {
        "feature": "Bathroom Doors",
        "specifications": [
          "Aluminium",
          "UPVC / WPC",
          "UPVC / WPC"
        ]
      }
    ],
    "note": "All fittings can be customised at additional cost."
  },
  {
    "name": "DOORS & WINDOWS",
    "rows": [
      {
        "feature": "Main Door",
        "specifications": [
          "Iron; up to ₹30,000 incl. accessories",
          "Stainless steel; up to ₹40,000 incl. accessories",
          "Stainless steel / Teak wood; ₹50,000 incl. accessories"
        ]
      },
      {
        "feature": "Internal Doors",
        "specifications": [
          "MR waterproof ply + laminate; ₹10,000",
          "Century waterproof ply + laminate; ₹11,000",
          "Green/Century waterproof ply + laminate; ₹13,000"
        ]
      },
      {
        "feature": "Puja Room Door",
        "specifications": [
          "WPC + frame; ₹4,000 per room",
          "WPC + frame; ₹5,000 per room",
          "WPC + frame; ₹6,000 per room"
        ]
      },
      {
        "feature": "Windows",
        "specifications": [
          "Aluminium; ₹300 / sq.ft",
          "UPVC; ₹400 / sq.ft",
          "UPVC; ₹500 / sq.ft"
        ]
      },
      {
        "feature": "Window Grills",
        "specifications": [
          "No",
          "Yes",
          "Yes"
        ]
      }
    ]
  },
  {
    "name": "PAINTING",
    "rows": [
      {
        "feature": "Interior Painting",
        "specifications": [
          "Tractor Shyne Emulsion",
          "Tractor Shyne Emulsion",
          "Royale Luxury Emulsion"
        ]
      },
      {
        "feature": "Exterior Painting",
        "specifications": [
          "Apex Exterior Emulsion",
          "Apex Exterior Emulsion",
          "Apex Ultima Exterior Emulsion"
        ]
      }
    ],
    "note": "Asian Paints; JK putty + primer + emulsion."
  },
  {
    "name": "FLOORING",
    "rows": [
      {
        "feature": "Living & Dining",
        "specifications": [
          "Varmora / Kajaria; ₹60 / sq.ft",
          "Kajaria / Johnson; ₹80 / sq.ft",
          "Kajaria / Johnson / Somany; ₹100 / sq.ft"
        ]
      },
      {
        "feature": "Rooms & Kitchen",
        "specifications": [
          "Varmora / Kajaria; ₹60 / sq.ft",
          "Kajaria / Johnson; ₹80 / sq.ft",
          "Kajaria / Johnson / Somany; ₹100 / sq.ft"
        ]
      },
      {
        "feature": "Balcony & Open Area",
        "specifications": [
          "Varmora / Kajaria; ₹60 / sq.ft",
          "Kajaria / Johnson; ₹80 / sq.ft",
          "Kajaria / Johnson / Somany; ₹100 / sq.ft"
        ]
      },
      {
        "feature": "Staircase Flooring",
        "specifications": [
          "Up to ₹60 / sq.ft",
          "Up to ₹70 / sq.ft",
          "Up to ₹80 / sq.ft"
        ]
      },
      {
        "feature": "Parking Tiles",
        "specifications": [
          "Up to ₹40 / sq.ft",
          "Up to ₹70 / sq.ft",
          "Up to ₹70 / sq.ft"
        ]
      }
    ],
    "note": "Marble, tile and granite laying charges may vary."
  },
  {
    "name": "ELECTRICAL / WIRING",
    "rows": [
      {
        "feature": "Fireproof Wiring",
        "specifications": [
          "Anchor",
          "Anchor / Polycab",
          "Anchor / Polycab / Havells"
        ]
      },
      {
        "feature": "Switches",
        "specifications": [
          "Anchor",
          "Anchor / Polycab",
          "Anchor / Polycab / Havells"
        ]
      },
      {
        "feature": "Sockets",
        "specifications": [
          "Anchor",
          "Anchor / Polycab",
          "Anchor / Polycab / Havells"
        ]
      },
      {
        "feature": "UPS Wiring Provision",
        "specifications": [
          "Malhotra",
          "Malhotra / Anchor",
          "Anchor / Polycab"
        ]
      }
    ]
  },
  {
    "name": "OTHERS",
    "rows": [
      {
        "feature": "Water Tank (borewell line)",
        "specifications": [
          "1,500 L Apollo / equivalent",
          "2,000 L Sintex / equivalent",
          "2,000 L Sintex / equivalent"
        ]
      },
      {
        "feature": "Septic Tank",
        "specifications": [
          "800 L",
          "1,000 L",
          "12,000 L"
        ]
      },
      {
        "feature": "Staircase Railing",
        "specifications": [
          "MS railing",
          "SS 304 grade railing",
          "SS 304 grade with glass"
        ]
      },
      {
        "feature": "Mumty",
        "specifications": [
          "₹1,200 / sq.ft",
          "₹1,200 / sq.ft",
          "₹1,200 / sq.ft"
        ]
      },
      {
        "feature": "Brick Parapet Wall (4 in.)",
        "specifications": [
          "₹240 / sq.ft, material + labour",
          "₹240 / sq.ft, material + labour",
          "₹240 / sq.ft, material + labour"
        ]
      },
      {
        "feature": "Basement / Raft Foundation",
        "specifications": [
          "6 in. RCC; ₹400 / sq.ft",
          "8 in. RCC; ₹500 / sq.ft",
          "10 in. RCC; ₹640 / sq.ft"
        ]
      }
    ]
  }
];

export const constructionSpecificationNote = "Specifications and listed price caps are as provided. Structural design and ceiling height are not specified; confirm before quotation.";

export function constructionEnquiryHref(name: typeof constructionPackages[number]["name"]) {
  return `/get-quote?${new URLSearchParams({ package: name, purpose: "Construction with Material" })}#lead-form`;
}
