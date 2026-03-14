export interface Offer {
    code: string;
    description: string;
    discount: string;
    applied: string;
    status: 'Active' | 'Inactive';
}

export const offers: Offer[] = [
    {
        code: 'SAVE10',
        description: 'Enjoy 10% off your next purchase.',
        discount: '10% Off',
        applied: '1.2k Times',
        status: 'Active',
    },
    {
        code: 'WELCOME15',
        description: 'Get 15% off your first order.',
        discount: '15% Off',
        applied: '20.5k Times',
        status: 'Active',
    },
    {
        code: 'SUMMER20',
        description: 'Save 20% on summer essentials.',
        discount: '20% Off',
        applied: '4.2k Times',
        status: 'Active',
    },
    {
        code: 'FREESHIP',
        description: 'Enjoy free delivery on your order.',
        discount: '25% Off',
        applied: '3.2k Times',
        status: 'Active',
    },
    {
        code: 'BUNDLE25',
        description: 'Get 25% off when you buy two or more items.',
        discount: '25% Off',
        applied: '2.8k Times',
        status: 'Inactive',
    },
    {
        code: 'FLASH30',
        description: 'Limited time 30% discount storewide.',
        discount: '+30% Off',
        applied: '11.2k Times',
        status: 'Active',
    },
    {
        code: 'HOLIDAY15',
        description: 'Celebrate with 15% off all products.',
        discount: '15% Off',
        applied: '10.2k Times',
        status: 'Active',
    },
    {
        code: 'LOYALTY20',
        description: 'Exclusive 20% off for returning customers.',
        discount: '20% Off',
        applied: '8.2k Times',
        status: 'Active',
    },
    {
        code: 'CLEARANCE40',
        description: 'Take 40% off clearance items.',
        discount: '40% Off',
        applied: '256 Times',
        status: 'Inactive',
    },
    {
        code: 'GIFT10',
        description: 'Enjoy $10 off your next purchase over $50.',
        discount: '10% Off',
        applied: '256 Times',
        status: 'Inactive',
    },
];
