export interface SubCategory {
  id: number;
  name: string;
}

export interface Category {
  id: number;
  name: string;
  subCategories: SubCategory[];
}

export interface ServiceType {
  id: number;
  icon: string;
  name: string;
  categories: Category[];
}

export const SERVICE_TYPES: ServiceType[] = [
  {
    id: 1,
    icon: '🧹',
    name: 'Cleaning',
    categories: [
      {
        id: 101,
        name: 'Full Home Cleaning',
        subCategories: [
          { id: 1001, name: 'Furnished Apartment' },
          { id: 1002, name: 'Unfurnished Apartment' },
          { id: 1003, name: 'Occupied Independent Apartment' },
          { id: 1004, name: 'Vacant Independent Apartment' },
        ]
      },
      {
        id: 102,
        name: 'Bathroom & Kitchen Cleaning',
        subCategories: [
          { id: 1005, name: '1 Bathroom' },
          { id: 1006, name: '2 Bathrooms' },
          { id: 1007, name: '3 Bathrooms' },
          { id: 1008, name: 'Kitchen Only' },
        ]
      },
      {
        id: 103,
        name: 'Sofa & Carpet Cleaning',
        subCategories: [
          { id: 1009, name: '2 Seater Sofa' },
          { id: 1010, name: '3 Seater Sofa' },
          { id: 1011, name: 'L-Shape Sofa' },
          { id: 1012, name: 'Carpet per sq ft' },
        ]
      },
      {
        id: 104,
        name: 'Window & Glass Cleaning',
        subCategories: [
          { id: 1013, name: 'Up to 5 Windows' },
          { id: 1014, name: '6 to 10 Windows' },
          { id: 1015, name: 'Full Building Glass' },
        ]
      },
      {
        id: 105,
        name: 'Floor Cleaning & Polishing',
        subCategories: [
          { id: 1016, name: 'Marble Polishing' },
          { id: 1017, name: 'Tile Cleaning' },
          { id: 1018, name: 'Wooden Floor Cleaning' },
        ]
      },
      {
        id: 106,
        name: 'Mattress Cleaning',
        subCategories: [
          { id: 1019, name: 'Single Mattress' },
          { id: 1020, name: 'Double Mattress' },
          { id: 1021, name: 'King Size Mattress' },
        ]
      },
    ]
  },
  {
    id: 2,
    icon: '💆‍♀️',
    name: "Women's Salon & Spa",
    categories: [
      {
        id: 201,
        name: 'Hair Services',
        subCategories: [
          { id: 2001, name: 'Haircut & Styling' },
          { id: 2002, name: 'Hair Coloring' },
          { id: 2003, name: 'Keratin Treatment' },
          { id: 2004, name: 'Hair Spa' },
        ]
      },
      {
        id: 202,
        name: 'Facial & Skin Care',
        subCategories: [
          { id: 2005, name: 'Basic Facial' },
          { id: 2006, name: 'Gold Facial' },
          { id: 2007, name: 'Anti-Aging Facial' },
          { id: 2008, name: 'Cleanup' },
        ]
      },
      {
        id: 203,
        name: 'Waxing & Threading',
        subCategories: [
          { id: 2009, name: 'Full Body Waxing' },
          { id: 2010, name: 'Half Legs Waxing' },
          { id: 2011, name: 'Eyebrow Threading' },
          { id: 2012, name: 'Upper Lip Threading' },
        ]
      },
      {
        id: 204,
        name: 'Massage & Spa',
        subCategories: [
          { id: 2013, name: 'Swedish Massage' },
          { id: 2014, name: 'Deep Tissue Massage' },
          { id: 2015, name: 'Aromatherapy' },
          { id: 2016, name: 'Head Massage' },
        ]
      },
    ]
  },
  {
    id: 3,
    icon: '💈',
    name: "Men's Salon & Massage",
    categories: [
      {
        id: 301,
        name: 'Haircut & Styling',
        subCategories: [
          { id: 3001, name: 'Regular Haircut' },
          { id: 3002, name: 'Fade Haircut' },
          { id: 3003, name: 'Hair Coloring' },
          { id: 3004, name: 'Hair Spa' },
        ]
      },
      {
        id: 302,
        name: 'Beard & Shaving',
        subCategories: [
          { id: 3005, name: 'Beard Trim' },
          { id: 3006, name: 'Clean Shave' },
          { id: 3007, name: 'Beard Coloring' },
          { id: 3008, name: 'Beard Styling' },
        ]
      },
      {
        id: 303,
        name: 'Massage',
        subCategories: [
          { id: 3009, name: 'Full Body Massage' },
          { id: 3010, name: 'Back Massage' },
          { id: 3011, name: 'Head & Shoulder Massage' },
          { id: 3012, name: 'Foot Massage' },
        ]
      },
      {
        id: 304,
        name: 'Facial & Skin Care',
        subCategories: [
          { id: 3013, name: 'Basic Facial' },
          { id: 3014, name: 'Tan Removal' },
          { id: 3015, name: 'Anti-Acne Treatment' },
        ]
      },
    ]
  },
  {
    id: 4,
    icon: '🖥️',
    name: 'Ac & Appliance Repair',
    categories: [
      {
        id: 401,
        name: 'AC Services',
        subCategories: [
          { id: 4001, name: 'AC Installation' },
          { id: 4002, name: 'AC Gas Refill' },
          { id: 4003, name: 'AC Deep Cleaning' },
          { id: 4004, name: 'AC PCB Repair' },
        ]
      },
      {
        id: 402,
        name: 'Washing Machine',
        subCategories: [
          { id: 4005, name: 'Front Load Repair' },
          { id: 4006, name: 'Top Load Repair' },
          { id: 4007, name: 'Drum Cleaning' },
        ]
      },
      {
        id: 403,
        name: 'Refrigerator',
        subCategories: [
          { id: 4008, name: 'Cooling Issue' },
          { id: 4009, name: 'Gas Refilling' },
          { id: 4010, name: 'Compressor Repair' },
        ]
      },
      {
        id: 404,
        name: 'Microwave & Oven',
        subCategories: [
          { id: 4011, name: 'Microwave Repair' },
          { id: 4012, name: 'OTG Repair' },
          { id: 4013, name: 'Chimney Cleaning' },
        ]
      },
    ]
  },
  {
    id: 5,
    icon: '🖌️',
    name: 'Painting & Water Proofing',
    categories: [
      {
        id: 501,
        name: 'Interior Painting',
        subCategories: [
          { id: 5001, name: 'Full Home Painting' },
          { id: 5002, name: 'Single Room Painting' },
          { id: 5003, name: 'Texture Painting' },
          { id: 5004, name: 'Wall Putty' },
        ]
      },
      {
        id: 502,
        name: 'Exterior Painting',
        subCategories: [
          { id: 5005, name: 'Building Exterior' },
          { id: 5006, name: 'Gate & Grill Painting' },
          { id: 5007, name: 'Terrace Painting' },
        ]
      },
      {
        id: 503,
        name: 'Water Proofing',
        subCategories: [
          { id: 5008, name: 'Terrace Waterproofing' },
          { id: 5009, name: 'Bathroom Waterproofing' },
          { id: 5010, name: 'Wall Crack Filling' },
        ]
      },
    ]
  },
  {
    id: 6,
    icon: '🌱',
    name: 'Gardening & Lawn Care',
    categories: [
      {
        id: 601,
        name: 'Lawn Maintenance',
        subCategories: [
          { id: 6001, name: 'Lawn Mowing' },
          { id: 6002, name: 'Grass Trimming' },
          { id: 6003, name: 'Weed Removal' },
        ]
      },
      {
        id: 602,
        name: 'Plant Care',
        subCategories: [
          { id: 6004, name: 'Pruning & Trimming' },
          { id: 6005, name: 'Fertilization' },
          { id: 6006, name: 'Pest Control for Plants' },
        ]
      },
      {
        id: 603,
        name: 'Garden Setup',
        subCategories: [
          { id: 6007, name: 'New Garden Design' },
          { id: 6008, name: 'Soil Preparation' },
          { id: 6009, name: 'Plant Plantation' },
        ]
      },
    ]
  },
  {
    id: 7,
    icon: '🏠',
    name: 'Home Decoration',
    categories: [
      {
        id: 701,
        name: 'Festival Decoration',
        subCategories: [
          { id: 7001, name: 'Diwali Decoration' },
          { id: 7002, name: 'Christmas Decoration' },
          { id: 7003, name: 'New Year Decoration' },
        ]
      },
      {
        id: 702,
        name: 'Event Decoration',
        subCategories: [
          { id: 7004, name: 'Birthday Decoration' },
          { id: 7005, name: 'Anniversary Decoration' },
          { id: 7006, name: 'Baby Shower Decoration' },
        ]
      },
      {
        id: 703,
        name: 'Interior Styling',
        subCategories: [
          { id: 7007, name: 'Living Room Styling' },
          { id: 7008, name: 'Bedroom Styling' },
          { id: 7009, name: 'Balcony Decoration' },
        ]
      },
    ]
  },
  {
    id: 8,
    icon: '🐾',
    name: 'Pet Grooming',
    categories: [
      {
        id: 801,
        name: 'Dog Grooming',
        subCategories: [
          { id: 8001, name: 'Bath & Blow Dry' },
          { id: 8002, name: 'Haircut & Styling' },
          { id: 8003, name: 'Nail Trimming' },
          { id: 8004, name: 'Ear Cleaning' },
        ]
      },
      {
        id: 802,
        name: 'Cat Grooming',
        subCategories: [
          { id: 8005, name: 'Bath & Dry' },
          { id: 8006, name: 'Fur Trimming' },
          { id: 8007, name: 'Nail Clipping' },
        ]
      },
      {
        id: 803,
        name: 'Veterinary Visit',
        subCategories: [
          { id: 8008, name: 'Routine Checkup' },
          { id: 8009, name: 'Vaccination' },
          { id: 8010, name: 'Deworming' },
        ]
      },
    ]
  },
  {
    id: 9,
    icon: '🧘',
    name: 'Yoga Instructors',
    categories: [
      {
        id: 901,
        name: 'Personal Yoga',
        subCategories: [
          { id: 9001, name: 'Beginner Session' },
          { id: 9002, name: 'Intermediate Session' },
          { id: 9003, name: 'Advanced Session' },
        ]
      },
      {
        id: 902,
        name: 'Group Yoga',
        subCategories: [
          { id: 9004, name: 'Morning Batch' },
          { id: 9005, name: 'Evening Batch' },
          { id: 9006, name: 'Weekend Batch' },
        ]
      },
      {
        id: 903,
        name: 'Specialised Yoga',
        subCategories: [
          { id: 9007, name: 'Prenatal Yoga' },
          { id: 9008, name: 'Kids Yoga' },
          { id: 9009, name: 'Meditation & Breathing' },
        ]
      },
    ]
  },
  {
    id: 10,
    icon: '🛋️',
    name: 'Interior Design Consultation',
    categories: [
      {
        id: 1001,
        name: 'Residential Design',
        subCategories: [
          { id: 10001, name: '1 BHK Design' },
          { id: 10002, name: '2 BHK Design' },
          { id: 10003, name: '3 BHK Design' },
          { id: 10004, name: 'Villa Design' },
        ]
      },
      {
        id: 1002,
        name: 'Commercial Design',
        subCategories: [
          { id: 10005, name: 'Office Design' },
          { id: 10006, name: 'Retail Store Design' },
          { id: 10007, name: 'Restaurant Design' },
        ]
      },
      {
        id: 1003,
        name: 'Modular Solutions',
        subCategories: [
          { id: 10008, name: 'Modular Kitchen' },
          { id: 10009, name: 'Modular Wardrobe' },
          { id: 10010, name: 'TV Unit Design' },
        ]
      },
    ]
  },
];