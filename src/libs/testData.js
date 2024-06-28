const upcoming = [
  {
    id: 1,
    title: "Data Science Bootcamp 2024",
    description:
      "Join industry experts and enthusiasts for a comprehensive bootcamp on data science. Learn about the latest tools, techniques, and trends in data analysis, machine learning, and AI. Perfect for both beginners and experienced professionals looking to enhance their skills.",
    location: {
      venue: "Harbourfront",
      city: "Toronto",
      state: "Ontario",
      country: "Canada",
    },
    date: {
      year: 2024,
      month: "July",
      date: "15",
    },
    time: "09:00",
    link: "https://example.com/datascience-bootcamp",
    price: "Free",
    reward: "Networking",
    organizer: "DataPros Toronto",
    industry: "Data Science",
  },
  {
    id: 2,
    image: upEvent2,
    title: "AI & Robotics Summit 2024",
    description:
      "The AI & Robotics Summit brings together the brightest minds in artificial intelligence and robotics. Attendees will explore cutting-edge advancements, engage in thought-provoking discussions, and network with leaders in the field. Don’t miss out on the opportunity to see the future of AI and robotics in action.",
    location: {
      venue: "Downtown",
      city: "Toronto",
      state: "Ontario",
      country: "Canada",
    },
    date: {
      year: 2024,
      month: "August",
      date: "22",
    },
    time: "11:00",
    link: "https://example.com/ai-robotics-summit",
    price: "Free",
    reward: "Innovative Technologies",
    organizer: "AI Innovators Toronto",
    industry: "Artificial Intelligence",
  },
  {
    id: 3,
    image: upEvent3,
    title: "FinTech Expo 2024",
    description:
      "Discover the latest innovations in financial technology at the FinTech Expo. This event features keynote presentations, panel discussions, and exhibitions from leading companies and startups in the fintech industry. It's a must-attend for professionals seeking to stay ahead in the fast-evolving world of finance.",
    location: {
      venue: "Financial District",
      city: "Toronto",
      state: "Ontario",
      country: "Canada",
    },
    date: {
      year: 2024,
      month: "September",
      date: "5",
    },
    time: "10:00",
    link: "https://example.com/fintech-expo",
    price: "Free",
    reward: "Financial Technologies",
    organizer: "FinTech Canada",
    industry: "Finance Technology",
  },
];

const events = [
  // {
  //   id: 1,
  //
  //   title: "Tech Innovators Conference",
  //   location: {
  //     venue: "Metro Toronto Convention Centre",
  //     city: "Toronto",
  //     state: "Ontario",
  //     country: "Canada",
  //   },
  //   date: {
  //     year: 2024,
  //     month: "June",
  //     date: "10",
  //   },
  //   time: "09:00",
  //   link: "https://example.com/tech-innovators",
  //   price: "Paid",
  //   reward: "Innovation Awards",
  //   organizer: "TechCon Inc.",
  //   industry: "Technology",
  // },
  // {
  //   id: 2,
  //
  //   title: "AI and Machine Learning Summit",
  //   location: {
  //     venue: "Beanfield Centre",
  //     city: "Toronto",
  //     state: "Ontario",
  //     country: "Canada",
  //   },
  //   date: {
  //     year: 2024,
  //     month: "July",
  //     date: "12",
  //   },
  //   time: "10:00",
  //   link: "https://example.com/ai-ml-summit",
  //   price: "Paid",
  //   reward: "Innovation Showcase",
  //   organizer: "AI Toronto",
  //   industry: "Artificial Intelligence",
  // },
  // {
  //   id: 3,
  //
  //   title: "Blockchain Revolution Conference",
  //   location: {
  //     venue: "Toronto Congress Centre",
  //     city: "Toronto",
  //     state: "Ontario",
  //     country: "Canada",
  //   },
  //   date: {
  //     year: 2024,
  //     month: "August",
  //     date: "18",
  //   },
  //   time: "11:00",
  //   link: "https://example.com/blockchain-conference",
  //   price: "Paid",
  //   reward: "Networking Opportunities",
  //   organizer: "Blockchain Canada",
  //   industry: "Blockchain",
  // },
  // {
  //   id: 4,
  //
  //   title: "HealthTech Symposium",
  //   location: {
  //     venue: "MaRS Discovery District",
  //     city: "Toronto",
  //     state: "Ontario",
  //     country: "Canada",
  //   },
  //   date: {
  //     year: 2024,
  //     month: "September",
  //     date: "5",
  //   },
  //   time: "09:30",
  //   link: "https://example.com/healthtech-symposium",
  //   price: "Free",
  //   reward: "Research Insights",
  //   organizer: "HealthTech Toronto",
  //   industry: "Healthcare Technology",
  // },
  // {
  //   id: 5,
  //
  //   title: "Digital Marketing Expo",
  //   location: {
  //     venue: "Enercare Centre",
  //     city: "Toronto",
  //     state: "Ontario",
  //     country: "Canada",
  //   },
  //   date: {
  //     year: 2024,
  //     month: "October",
  //     date: "20",
  //   },
  //   time: "12:00",
  //   link: "https://example.com/digital-marketing-expo",
  //   price: "Paid",
  //   reward: "Marketing Strategies",
  //   organizer: "Digital Marketers Association",
  //   industry: "Marketing",
  // },
  // {
  //   id: 6,
  //
  //   title: "Sustainable Future Forum",
  //   location: {
  //     venue: "The Globe and Mail Centre",
  //     city: "Toronto",
  //     state: "Ontario",
  //     country: "Canada",
  //   },
  //   date: {
  //     year: 2024,
  //     month: "November",
  //     date: "8",
  //   },
  //   time: "10:30",
  //   link: "https://example.com/sustainable-future",
  //   price: "Free",
  //   reward: "Green Innovations",
  //   organizer: "Sustainable Toronto",
  //   industry: "Sustainability",
  // },
  // {
  //   id: 7,
  //
  //   title: "FinTech Connect",
  //   location: {
  //     venue: "Toronto Reference Library",
  //     city: "Toronto",
  //     state: "Ontario",
  //     country: "Canada",
  //   },
  //   date: {
  //     year: 2024,
  //     month: "December",
  //     date: "15",
  //   },
  //   time: "09:00",
  //   link: "https://example.com/fintech-connect",
  //   price: "Paid",
  //   reward: "Investment Opportunities",
  //   organizer: "FinTech Canada",
  //   industry: "Finance",
  // },
  // {
  //   id: 8,
  //
  //   title: "Virtual Reality Experience",
  //   location: {
  //     venue: "Sony Centre for the Performing Arts",
  //     city: "Toronto",
  //     state: "Ontario",
  //     country: "Canada",
  //   },
  //   date: {
  //     year: 2025,
  //     month: "January",
  //     date: "18",
  //   },
  //   time: "11:00",
  //   link: "https://example.com/vr-experience",
  //   price: "Free",
  //   reward: "Immersive Technologies",
  //   organizer: "VR World",
  //   industry: "Virtual Reality",
  // },
  // {
  //   id: 9,
  //
  //   title: "E-commerce Strategies Conference",
  //   location: {
  //     venue: "Toronto Eaton Centre",
  //     city: "Toronto",
  //     state: "Ontario",
  //     country: "Canada",
  //   },
  //   date: {
  //     year: 2025,
  //     month: "February",
  //     date: "20",
  //   },
  //   time: "09:30",
  //   link: "https://example.com/ecommerce-strategies",
  //   price: "Paid",
  //   reward: "Retail Trends",
  //   organizer: "E-commerce Canada",
  //   industry: "E-commerce",
  // },
  // {
  //   id: 10,
  //
  //   title: "IoT Innovations Summit",
  //   location: {
  //     venue: "Toronto Convention Centre",
  //     city: "Toronto",
  //     state: "Ontario",
  //     country: "Canada",
  //   },
  //   date: {
  //     year: 2025,
  //     month: "March",
  //     date: "15",
  //   },
  //   time: "10:00",
  //   link: "https://example.com/iot-innovations",
  //   price: "Free",
  //   reward: "Smart Technologies",
  //   organizer: "IoT Toronto",
  //   industry: "Internet of Things",
  // },
  // {
  //   id: 11,
  //
  //   title: "Renewable Energy Expo",
  //   location: {
  //     venue: "Metro Toronto Convention Centre",
  //     city: "Toronto",
  //     state: "Ontario",
  //     country: "Canada",
  //   },
  //   date: {
  //     year: 2025,
  //     month: "April",
  //     date: "10",
  //   },
  //   time: "11:00",
  //   link: "https://example.com/renewable-energy",
  //   price: "Free",
  //   reward: "Green Energy Solutions",
  //   organizer: "Renewable Energy Association",
  //   industry: "Energy",
  // },
  // {
  //   id: 12,
  //
  //   title: "Robotics and Automation Forum",
  //   location: {
  //     venue: "Enercare Centre",
  //     city: "Toronto",
  //     state: "Ontario",
  //     country: "Canada",
  //   },
  //   date: {
  //     year: 2025,
  //     month: "May",
  //     date: "5",
  //   },
  //   time: "09:00",
  //   link: "https://example.com/robotics-forum",
  //   price: "Paid",
  //   reward: "Automation Trends",
  //   organizer: "Robotics Canada",
  //   industry: "Robotics",
  // },
  // {
  //   id: 13,
  //
  //   title: "Big Data Analytics Summit",
  //   location: {
  //     venue: "Beanfield Centre",
  //     city: "Toronto",
  //     state: "Ontario",
  //     country: "Canada",
  //   },
  //   date: {
  //     year: 2025,
  //     month: "June",
  //     date: "8",
  //   },
  //   time: "10:00",
  //   link: "https://example.com/big-data-analytics",
  //   price: "Paid",
  //   reward: "Data Insights",
  //   organizer: "Data Toronto",
  //   industry: "Data Analytics",
  // },
  // {
  //   id: 14,
  //
  //   title: "EdTech Conference",
  //   location: {
  //     venue: "Toronto Reference Library",
  //     city: "Toronto",
  //     state: "Ontario",
  //     country: "Canada",
  //   },
  //   date: {
  //     year: 2025,
  //     month: "July",
  //     date: "10",
  //   },
  //   time: "09:30",
  //   link: "https://example.com/edtech-conference",
  //   price: "Free",
  //   reward: "Education Innovation",
  //   organizer: "EdTech Canada",
  //   industry: "Education Technology",
  // },
  // {
  //   id: 15,
  //
  //   title: "Gaming Expo",
  //   location: {
  //     venue: "Toronto Congress Centre",
  //     city: "Toronto",
  //     state: "Ontario",
  //     country: "Canada",
  //   },
  //   date: {
  //     year: 2025,
  //     month: "August",
  //     date: "22",
  //   },
  //   time: "11:00",
  //   link: "https://example.com/gaming-expo",
  //   price: "Paid",
  //   reward: "Game Demos",
  //   organizer: "Gaming Toronto",
  //   industry: "Gaming",
  // },
  // {
  //   id: 16,
  //
  //   title: "Cybersecurity Workshop",
  //   location: {
  //     venue: "MaRS Discovery District",
  //     city: "Toronto",
  //     state: "Ontario",
  //     country: "Canada",
  //   },
  //   date: {
  //     year: 2025,
  //     month: "September",
  //     date: "14",
  //   },
  //   time: "09:00",
  //   link: "https://example.com/cybersecurity-workshop",
  //   price: "Free",
  //   reward: "Security Best Practices",
  //   organizer: "CyberSafe Toronto",
  //   industry: "Cybersecurity",
  // },
];

const article = [
  {
    id: "1",
    title: "hello world",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi ipsa amet assumenda repellat quam incidunt corrupti, fugiat autem iure ut eum corporis expedita sed blanditiis magniaccusantium voluptatum sunt cupiditate!",
    writer: "Jonathan Meyer",
    link: "https://monkeytype.com/",
  },
  {
    id: "2",
    title: "hello world",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi ipsa amet assumenda repellat quam incidunt corrupti, fugiat autem iure ut eum corporis expedita sed blanditiis magniaccusantium voluptatum sunt cupiditate!",
    writer: "Jonathan Meyer",
    link: "https://monkeytype.com/",
  },
  {
    id: "3",
    title: "hello world",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi ipsa amet assumenda repellat quam incidunt corrupti, fugiat autem iure ut eum corporis expedita sed blanditiis magniaccusantium voluptatum sunt cupiditate!",
    writer: "Jonathan Meyer",
    link: "https://monkeytype.com/",
  },
];

export { upcoming, events, article };
