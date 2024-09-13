import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
};

const addressDataSlice = createSlice({
  name: "addressData",
  initialState,
  reducers: {},
});

export const { reducer: addressDataReducer } = addressDataSlice;
