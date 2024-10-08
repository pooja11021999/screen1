export default Data = {
  FieldData: [
    {
      label: "Company Name",
      fieldname: "companyName",
      placeholder: "Enter Company Name",
      required: true,
    },
    {
      label: "Email",
      fieldname: "email",
      placeholder: "Enter Email",
      required: true,
    },
    {
      label: "Industry Type",
      fieldname: "industryType",
      placeholder: "Enter Industry Type",
    },
    {
      label: "Assigned To",
      fieldname: "assignedTo",
      placeholder: "Enter Assigned To",
    },
    {
      label: "Website",
      fieldname: "website",
      placeholder: "Enter Website",
    },
    {
      label: "Address Line",
      fieldname: "address",
      placeholder: "Enter Address",
      location: true,
    },
    {
      label: "Country",
      fieldname: "country",
      isSelect: true,
      placeholder: "Select Country",
    },
    {
      label: "State",
      fieldname: "state",
      isSelect: true,
      placeholder: "Select State",
    },
    {
      label: "City",
      fieldname: "city",
      isSelect: true,
      placeholder: "Select City",
    },
    {
      label: "PIN Code",
      fieldname: "pinCode",
      placeholder: "Enter PIN Code",
    },
    {
      label: "Company Type",
      fieldname: "companyType",
      placeholder: "Enter Company Type",
    },
    {
      label: "Last Contacted On",
      fieldname: "lastContacted",
      placeholder: "Select Last Contacted Date",
      isDate: true,
    },
  ],
  locationData: [
    {
      country: "India",
      states: [
        {
          state: "Maharashtra",
          cities: ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik"],
        },
        {
          state: "Karnataka",
          cities: ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum"],
        },
        {
          state: "Tamil Nadu",
          cities: [
            "Chennai",
            "Coimbatore",
            "Madurai",
            "Salem",
            "Tiruchirappalli",
          ],
        },
        {
          state: "Uttar Pradesh",
          cities: ["Lucknow", "Kanpur", "Ghaziabad", "Agra", "Varanasi"],
        },
        {
          state: "Gujarat",
          cities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar"],
        },
        {
          state: "West Bengal",
          cities: ["Kolkata", "Asansol", "Durgapur", "Siliguri", "Howrah"],
        },
        {
          state: "Rajasthan",
          cities: ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer"],
        },
        {
          state: "Madhya Pradesh",
          cities: ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain"],
        },
        {
          state: "Bihar",
          cities: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia"],
        },
        {
          state: "Kerala",
          cities: [
            "Kochi",
            "Thiruvananthapuram",
            "Kozhikode",
            "Thrissur",
            "Kollam",
          ],
        },
      ],
    },
    {
      country: "United States",
      states: [
        {
          state: "California",
          cities: [
            "Los Angeles",
            "San Francisco",
            "San Diego",
            "Sacramento",
            "San Jose",
          ],
        },
        {
          state: "Texas",
          cities: ["Houston", "Dallas", "Austin", "San Antonio", "Fort Worth"],
        },
        {
          state: "Florida",
          cities: ["Miami", "Orlando", "Tampa", "Jacksonville", "Tallahassee"],
        },
        {
          state: "New York",
          cities: [
            "New York City",
            "Buffalo",
            "Rochester",
            "Albany",
            "Syracuse",
          ],
        },
        {
          state: "Illinois",
          cities: ["Chicago", "Springfield", "Aurora", "Naperville", "Peoria"],
        },
        {
          state: "Georgia",
          cities: ["Atlanta", "Savannah", "Augusta", "Columbus", "Macon"],
        },
        {
          state: "Ohio",
          cities: ["Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron"],
        },
        {
          state: "Pennsylvania",
          cities: [
            "Philadelphia",
            "Pittsburgh",
            "Allentown",
            "Erie",
            "Reading",
          ],
        },
        {
          state: "Michigan",
          cities: ["Detroit", "Grand Rapids", "Ann Arbor", "Lansing", "Flint"],
        },
        {
          state: "Arizona",
          cities: ["Phoenix", "Tucson", "Mesa", "Scottsdale", "Chandler"],
        },
      ],
    },
    {
      country: "Australia",
      states: [
        {
          state: "New South Wales",
          cities: [
            "Sydney",
            "Newcastle",
            "Wollongong",
            "Coffs Harbour",
            "Tamworth",
          ],
        },
        {
          state: "Victoria",
          cities: ["Melbourne", "Geelong", "Ballarat", "Bendigo", "Shepparton"],
        },
        {
          state: "Queensland",
          cities: [
            "Brisbane",
            "Gold Coast",
            "Cairns",
            "Townsville",
            "Toowoomba",
          ],
        },
        {
          state: "Western Australia",
          cities: ["Perth", "Fremantle", "Bunbury", "Albany", "Geraldton"],
        },
        {
          state: "South Australia",
          cities: [
            "Adelaide",
            "Mount Gambier",
            "Whyalla",
            "Murray Bridge",
            "Port Pirie",
          ],
        },
        {
          state: "Tasmania",
          cities: ["Hobart", "Launceston", "Devonport", "Burnie", "Ulverstone"],
        },
        {
          state: "Northern Territory",
          cities: [
            "Darwin",
            "Alice Springs",
            "Palmerston",
            "Katherine",
            "Tennant Creek",
          ],
        },
        {
          state: "Australian Capital Territory",
          cities: [
            "Canberra",
            "Queanbeyan",
            "Gungahlin",
            "Tuggeranong",
            "Belconnen",
          ],
        },
        {
          state: "New Zealand",
          cities: [
            "Auckland",
            "Wellington",
            "Christchurch",
            "Hamilton",
            "Tauranga",
          ],
        },
        {
          state: "Fiji",
          cities: ["Suva", "Nadi", "Lautoka", "Labasa", "Ba"],
        },
      ],
    },
  ],
  initialCompanyData: {
    companies: [
      {
        id: 100,
        companyName: "Tech Solutions",
        email: "contact@techsolutions.com",
        industryType: "Software",
        assignedTo: "John Doe",
        website: "www.techsolutions.com",
        address: "123 Tech Park, Mumbai",
        country: "India",
        state: "Maharashtra",
        city: "Mumbai",
        pinCode: "400001",
        companyType: "Private",
        lastContacted: "2023-09-01",
        status: "Active",
        ratingPer: 4,
      },
      {
        id: 101,
        companyName: "Alpha Industries",
        email: "info@alphaind.com",
        industryType: "Manufacturing",
        assignedTo: "Jane Smith",
        website: "www.alphaind.com",
        address: "45 Industrial Zone, Pune",
        country: "India",
        state: "Maharashtra",
        city: "Pune",
        pinCode: "411001",
        companyType: "Public",
        lastContacted: "2023-08-22",
        status: "Active",
        ratingPer: 5,
      },
      {
        id: 102,
        companyName: "Global Tech",
        email: "sales@globaltech.com",
        industryType: "IT Services",
        assignedTo: "Michael Brown",
        website: "www.globaltech.com",
        address: "12 Business Bay, Bangalore",
        country: "India",
        state: "Karnataka",
        city: "Bangalore",
        pinCode: "560001",
        companyType: "Private",
        lastContacted: "2023-07-15",
        status: "Active",
        ratingPer: 3,
      },
      {
        id: 103,
        companyName: "NextGen Solutions",
        email: "contact@nextgensol.com",
        industryType: "Consulting",
        assignedTo: "Emily Davis",
        website: "www.nextgensol.com",
        address: "78 Tech Valley, Hyderabad",
        country: "India",
        state: "Telangana",
        city: "Hyderabad",
        pinCode: "500001",
        companyType: "Private",
        lastContacted: "2023-06-11",
        status: "Active",
        ratingPer: 4,
      },
      {
        id: 104,
        companyName: "HealthWorks Ltd",
        email: "support@healthworks.com",
        industryType: "Healthcare",
        assignedTo: "Robert Taylor",
        website: "www.healthworks.com",
        address: "56 Wellness Center, Chennai",
        country: "India",
        state: "Tamil Nadu",
        city: "Chennai",
        pinCode: "600001",
        companyType: "Public",
        lastContacted: "2023-05-29",
        status: "Active",
        ratingPer: 4,
      },
      {
        id: 105,
        companyName: "InfyTech Solutions",
        email: "info@infytech.com",
        industryType: "Software",
        assignedTo: "Sophia Johnson",
        website: "www.infytech.com",
        address: "34 Tech City, Gurgaon",
        country: "India",
        state: "Haryana",
        city: "Gurgaon",
        pinCode: "122001",
        companyType: "Private",
        lastContacted: "2023-05-15",
        status: "Active",
        ratingPer: 5,
      },
      {
        id: 106,
        companyName: "Zenith Corp",
        email: "contact@zenithcorp.com",
        industryType: "Finance",
        assignedTo: "Daniel Wilson",
        website: "www.zenithcorp.com",
        address: "90 Corporate Park, Noida",
        country: "India",
        state: "Uttar Pradesh",
        city: "Noida",
        pinCode: "201301",
        companyType: "Public",
        lastContacted: "2023-04-22",
        status: "Active",
        ratingPer: 3,
      },
      {
        id: 107,
        companyName: "Oceanic Traders",
        email: "sales@oceanictraders.com",
        industryType: "Trading",
        assignedTo: "Olivia Martinez",
        website: "www.oceanictraders.com",
        address: "76 Ocean Avenue, Kochi",
        country: "India",
        state: "Kerala",
        city: "Kochi",
        pinCode: "682001",
        companyType: "Private",
        lastContacted: "2023-04-05",
        status: "Active",
        ratingPer: 5,
      },
      {
        id: 108,
        companyName: "Skyline Solutions",
        email: "info@skylinesolutions.com",
        industryType: "Construction",
        assignedTo: "Lucas Anderson",
        website: "www.skylinesolutions.com",
        address: "33 Skyline Tower, Ahmedabad",
        country: "India",
        state: "Gujarat",
        city: "Ahmedabad",
        pinCode: "380001",
        companyType: "Private",
        lastContacted: "2023-03-17",
        status: "Active",
      },
      {
        id: 109,
        companyName: "Eco Green Energy",
        email: "info@ecogreen.com",
        industryType: "Energy",
        assignedTo: "Mason White",
        website: "www.ecogreen.com",
        address: "28 Energy Park, Jaipur",
        country: "India",
        state: "Rajasthan",
        city: "Jaipur",
        pinCode: "302001",
        companyType: "Public",
        lastContacted: "2023-02-28",
        status: "Active",
        ratingPer: 5,
      },
      {
        id: 110,
        companyName: "Vortex Solutions",
        email: "info@vortex.com",
        industryType: "Software",
        assignedTo: "Isabella Harris",
        website: "www.vortex.com",
        address: "44 Vortex Tower, Surat",
        country: "India",
        state: "Gujarat",
        city: "Surat",
        pinCode: "395003",
        companyType: "Private",
        lastContacted: "2023-01-30",
        status: "Inactive",
        ratingPer: 3,
      },
      {
        id: 111,
        companyName: "Prime Manufacturing",
        email: "contact@primemfg.com",
        industryType: "Manufacturing",
        assignedTo: "Liam Clark",
        website: "www.primemfg.com",
        address: "25 Prime Zone, Indore",
        country: "India",
        state: "Madhya Pradesh",
        city: "Indore",
        pinCode: "452001",
        companyType: "Public",
        lastContacted: "2022-12-19",
        status: "Inactive",
        ratingPer: 3,
      },
      {
        id: 112,
        companyName: "FusionTech",
        email: "info@fusiontech.com",
        industryType: "Technology",
        assignedTo: "Ava Lewis",
        website: "www.fusiontech.com",
        address: "92 Innovation Park, Bhopal",
        country: "India",
        state: "Madhya Pradesh",
        city: "Bhopal",
        pinCode: "462001",
        companyType: "Private",
        lastContacted: "2022-12-05",
        status: "Active",
        ratingPer: 5,
      },
      {
        id: 113,
        companyName: "GlobalCom",
        email: "contact@globalcom.com",
        industryType: "Telecom",
        assignedTo: "Charlotte Walker",
        website: "www.globalcom.com",
        address: "11 Telecom Zone, Lucknow",
        country: "India",
        state: "Uttar Pradesh",
        city: "Lucknow",
        pinCode: "226001",
        companyType: "Public",
        lastContacted: "2022-11-18",
        status: "Inactive",
        ratingPer: 5,
      },
      {
        id: 114,
        companyName: "Delta Services",
        email: "support@deltaservices.com",
        industryType: "Consulting",
        assignedTo: "Henry Lee",
        website: "www.deltaservices.com",
        address: "62 Service Avenue, Patna",
        country: "India",
        state: "Bihar",
        city: "Patna",
        pinCode: "800001",
        companyType: "Private",
        lastContacted: "2022-10-25",
        status: "Active",
        ratingPer: 5,
      },
      {
        id: 115,
        companyName: "Rapid Transport",
        email: "info@rapidtransport.com",
        industryType: "Logistics",
        assignedTo: "Amelia Hall",
        website: "www.rapidtransport.com",
        address: "55 Cargo Park, Delhi",
        country: "India",
        state: "Delhi",
        city: "Delhi",
        pinCode: "110001",
        companyType: "Public",
        lastContacted: "2022-09-20",
        status: "Inactive",
        ratingPer: 5,
      },
      {
        id: 116,
        companyName: "Foodies Inc",
        email: "contact@foodiesinc.com",
        industryType: "Food & Beverage",
        assignedTo: "James Allen",
        website: "www.foodiesinc.com",
        address: "87 Culinary Street, Kolkata",
        country: "India",
        state: "West Bengal",
        city: "Kolkata",
        pinCode: "700001",
        companyType: "Private",
        lastContacted: "2022-08-12",
        status: "Active",
        ratingPer: 4,
      },
      {
        id: 117,
        companyName: "Wave Technologies",
        email: "info@wavetech.com",
        industryType: "Technology",
        assignedTo: "Ella Young",
        website: "www.wavetech.com",
        address: "50 Wave Park, Bengaluru",
        country: "India",
        state: "Karnataka",
        city: "Bengaluru",
        pinCode: "560002",
        companyType: "Private",
        lastContacted: "2022-07-18",
        status: "New",
        ratingPer: 5,
      },
    ],
  },
};
