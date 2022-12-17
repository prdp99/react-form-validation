const options = [
  {
    value: "manufacturing",
    label: "Manufacturing",
    enum: [
      {
        value: "food and beverage",
        label: "Food and Beverage",
        enum: [
          {
            value: "Bakery & confectionery products",
            label: "Bakery & confectionery products",
          },
          {
            value: "Beverages",
            label: "Beverages",
          },
          {
            value: "fish & producst",
            label: "Fish & Products",
          },
          {
            value: "meat & meat products",
            label: "Meat & meat products",
          },
          {
            value: "milk & dairy products",
            label: "Milk & dairy products",
          },
          {
            value: "sweets & snack food",
            label: "Sweets & snack food",
          },
          {
            value: "other",
            label: "other",
          },
        ],
      },
    ],
  },
  {
    value: "service",
    label: "Service",
    enum: [
      {
        value: "business services",
        label: "Business Services",
      },
      {
        value: "engineering",
        label: "Engineering",
      },
      {
        value: "information technology and telecommunications",
        label: "Information Technology and Tlecommunications",
        enum: [
          {
            value: "data processing web porttals e-marketing",
            label: "Data processing, Web portals, E-marketing",
          },
          {
            value: "software hardware",
            label: "Software, Hardware",
          },
          {
            value: "telecommunications",
            label: "Telecommunications",
          },
          {
            value: "programming consultancy",
            label: "Programming ,Consultancy",
          },
        ],
      },
    ],
  },
  {
    value: "other",
    label: "Other",
    enum: [
      {
        value: "creative industries",
        label: "Creative industries",
      },
      {
        value: "Energy technology",
        label: "Energy technology",
      },
      {
        value: "Enviroment",
        label: "Enviroment",
      },
    ],
  },
];
export default options;
