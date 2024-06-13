const mockdoctors = [
  {
    id: 1,
    name: 'Graves Parsons',
    clinic_name: 'POWERNET',
    isActive: true,
    expertIn: 'incididunt',
    email: 'gravesparsons@powernet.com',
    phone: '+91 (960) 458-3650',
    address: '922 Wallabout Street, Conestoga, Indiana, 556',
    location: {
      latitude: 3.519882,
      longitude: -136.803752,
    },
    speciality: 'Veterinary Surgeon',
    clinic_location: '123 Pet St, Petville',
    pet_categories: [
      {
        id: 1,
        name: 'Dogs',
      },
      {
        id: 2,
        name: 'Cats',
      },
    ],
  },
  {
    id: 2,
    name: 'Dr. John Smith',
    clinic_name: 'PetCare Clinic',
    isActive: true,
    expertIn: 'surgery',
    email: 'johnsmith@petcare.com',
    phone: '+91 (960) 123-4567',
    address: '123 Pet St, Petville, Indiana, 556',
    location: {
      latitude: 3.519882,
      longitude: -136.803752,
    },
    speciality: 'Veterinary Surgeon',
    clinic_location: '123 Pet St, Petville',
    pet_categories: [
      {
        id: 1,
        name: 'Dogs',
      },
      {
        id: 2,
        name: 'Cats',
      },
    ],
  },
  {
    id: 3,
    name: 'Dr. Emily Johnson',
    clinic_name: 'Animal Dermatology Clinic',
    isActive: true,
    expertIn: 'dermatology',
    email: 'emilyjohnson@animaldermatology.com',
    phone: '+91 (960) 123-4568',
    address: '456 Animal Ave, Petville, Indiana, 556',
    location: {
      latitude: 3.519883,
      longitude: -136.803753,
    },
    speciality: 'Veterinary Dermatologist',
    clinic_location: '456 Animal Ave, Petville',
    pet_categories: [
      {
        id: 1,
        name: 'Dogs',
      },
      {
        id: 3,
        name: 'Birds',
      },
    ],
  },
  {
    id: 4,
    name: 'Dr. Michael Brown',
    clinic_name: 'Ophthalmology for Pets',
    isActive: true,
    expertIn: 'ophthalmology',
    email: 'michaelbrown@ophthalmologyforpets.com',
    phone: '+91 (960) 123-4569',
    address: '789 Creature Ct, Petville, Indiana, 556',
    location: {
      latitude: 3.519884,
      longitude: -136.803754,
    },
    speciality: 'Veterinary Ophthalmologist',
    clinic_location: '789 Creature Ct, Petville',
    pet_categories: [
      {
        id: 2,
        name: 'Cats',
      },
      {
        id: 4,
        name: 'Reptiles',
      },
    ],
  },
  {
    id: 5,
    name: 'Dr. Sarah Wilson',
    clinic_name: 'Nutrition and Wellness Clinic',
    isActive: true,
    expertIn: 'nutrition',
    email: 'sarahwilson@nutritionwellness.com',
    phone: '+91 (960) 123-4570',
    address: '101 Petcare Blvd, Petville, Indiana, 556',
    location: {
      latitude: 3.519885,
      longitude: -136.803755,
    },
    speciality: 'Veterinary Nutritionist',
    clinic_location: '101 Petcare Blvd, Petville',
    pet_categories: [
      {
        id: 1,
        name: 'Dogs',
      },
      {
        id: 5,
        name: 'Small Mammals',
      },
    ],
  },
  {
    id: 6,
    name: 'Dr. William Taylor',
    clinic_name: 'Cardiology for Pets',
    isActive: true,
    expertIn: 'cardiology',
    email: 'williamtaylor@cardiologyforpets.com',
    phone: '+91 (960) 123-4571',
    address: '202 Animal Way, Petville, Indiana, 556',
    location: {
      latitude: 3.519886,
      longitude: -136.803756,
    },
    speciality: 'Veterinary Cardiologist',
    clinic_location: '202 Animal Way, Petville',
    pet_categories: [
      {
        id: 2,
        name: 'Cats',
      },
      {
        id: 6,
        name: 'Fish',
      },
    ],
  },
  {
    id: 7,
    name: 'Dr. Laura Anderson',
    clinic_name: 'Oncology for Pets',
    isActive: true,
    expertIn: 'oncology',
    email: 'lauraanderson@oncologyforpets.com',
    phone: '+91 (960) 123-4572',
    address: '303 Critter Ln, Petville, Indiana, 556',
    location: {
      latitude: 3.519887,
      longitude: -136.803757,
    },
    speciality: 'Veterinary Oncologist',
    clinic_location: '303 Critter Ln, Petville',
    pet_categories: [
      {
        id: 1,
        name: 'Dogs',
      },
      {
        id: 4,
        name: 'Reptiles',
      },
    ],
  },
  {
    id: 8,
    name: 'Dr. James Davis',
    clinic_name: 'Behavioral Pet Clinic',
    isActive: true,
    expertIn: 'behavior',
    email: 'jamesdavis@behavioralpetclinic.com',
    phone: '+91 (960) 123-4573',
    address: '404 Companion St, Petville, Indiana, 556',
    location: {
      latitude: 3.519888,
      longitude: -136.803758,
    },
    speciality: 'Veterinary Behaviorist',
    clinic_location: '404 Companion St, Petville',
    pet_categories: [
      {
        id: 1,
        name: 'Dogs',
      },
      {
        id: 7,
        name: 'Exotic Pets',
      },
    ],
  },
  {
    id: 9,
    name: 'Dr. Megan Martinez',
    clinic_name: 'Dental Care for Pets',
    isActive: true,
    expertIn: 'dentistry',
    email: 'meganmartinez@dentalcareforpets.com',
    phone: '+91 (960) 123-4574',
    address: '505 Petcare Dr, Petville, Indiana, 556',
    location: {
      latitude: 3.519889,
      longitude: -136.803759,
    },
    speciality: 'Veterinary Dentist',
    clinic_location: '505 Petcare Dr, Petville',
    pet_categories: [
      {
        id: 2,
        name: 'Cats',
      },
      {
        id: 5,
        name: 'Small Mammals',
      },
    ],
  },
  {
    id: 10,
    name: 'Dr. David Garcia',
    clinic_name: 'Radiology for Pets',
    isActive: true,
    expertIn: 'radiology',
    email: 'davidgarcia@radiologyforpets.com',
    phone: '+91 (960) 123-4575',
    address: '606 Animal Pl, Petville, Indiana, 556',
    location: {
      latitude: 3.51989,
      longitude: -136.80376,
    },
    speciality: 'Veterinary Radiologist',
    clinic_location: '606 Animal Pl, Petville',
    pet_categories: [
      {
        id: 3,
        name: 'Birds',
      },
      {
        id: 6,
        name: 'Fish',
      },
    ],
  },
];

export default mockdoctors;
