const data = [
  {
    name: "Virat Kohli",
    country: "India",
    img_url: "https://static.iplt20.com/players/210/164.png",
    skills: {
      "Role": "Batsman",
      "Batting Style": "Right-handed",
      "Bowling Style": "Medium Seam",
    },
    stats: {
      matches: 11,
      runs: 332,
      wickets: 0,
    },
    info: {
      DOB: "05 November 1988",
      "IPL Debut": 2008,
    },
  },
  {
    name: "Mohammed Siraj",
    country: "India",
    img_url: "https://static.iplt20.com/players/210/3840.png",
    skills: {
      "Role": "Bowler",
      "Batting Style": "Right-handed",
      "Bowling Style": "Medium Seam",
    },
    stats: {
      matches: 11,
      runs: 20,
      wickets: 7,
    },
    info: {
      DOB: "13 March 1994",
      "IPL Debut": 2017,
    },
  },
  {
    name: "Wanindu Hasaranga",
    country: "Sri Lanka",
    img_url: "https://static.iplt20.com/players/210/3082.png",
    skills: {
      "Role": "All-rounder",
      "Batting Style": "Right-handed",
      "Bowling Style": "Leg Spin",
    },
    stats: {
      matches: 2,
      runs: 1,
      wickets: 0,
    },
    info: {
      DOB: "29 July 1997",
      "IPL Debut": "",
    },
  },
  {
    name: "Finn Allen",
    country: "New Zealand",
    img_url: "https://static.iplt20.com/players/210/3020.png",
    skills: {
      "Role": "Batsman",
      "Batting Style": "Right-handed",
      "Bowling Style": "N/A",
    },
    stats: {
      matches: 0,
      runs: 0,
      wickets: 0,
    },
    info: {
      DOB: "22 April 1999",
      "IPL Debut": "",
    },
  },
  {
    name: "Kyle Jamieson",
    country: "New Zealand",
    img_url: "https://static.iplt20.com/players/210/1616.png",
    skills: {
      "Role": "All-rounder",
      "Batting Style": "Right-handed",
      "Bowling Style": "Medium Seam",
    },
    stats: {
      matches: 9,
      runs: 65,
      wickets: 9,
    },
    info: {
      DOB: "30 December 1994",
      "IPL Debut": "",
    },
  },
  {
    name: "Akash Deep",
    country: "India",
    img_url: "https://static.iplt20.com/players/210/14800.png",
    skills: {
      "Role": "Bowler",
      "Batting Style": "Right-handed",
      "Bowling Style": "Fast Seam",
    },
    stats: {
      matches: 0,
      runs: 0,
      wickets: 0,
    },
    info: {
      DOB: "15 December 1996",
      "IPL Debut": "",
    },
  },
  {
    name: "Glenn Maxwell",
    country: "Australia",
    img_url: "https://static.iplt20.com/players/210/282.png",
    skills: {
      "Role": "All-rounder",
      "Batting Style": "Right-handed",
      "Bowling Style": "Off Spin",
    },
    stats: {
      matches: 11,
      runs: 350,
      wickets: 3,
    },
    info: {
      DOB: "14 October 1988",
      "IPL Debut": 2012,
    },
  },
  {
    name: "Suyash Prabhudessai",
    country: "India",
    img_url: "https://static.iplt20.com/players/210/7002.png",
    skills: {
      "Role": "Batsman",
      "Batting Style": "Right-handed",
      "Bowling Style": "Fast Seam",
    },
    stats: {
      matches: 0,
      runs: 0,
      wickets: 0,
    },
    info: {
      DOB: "14 October 1988",
      "IPL Debut": 2012,
    },
  },
  {
    name: "Sachin Baby",
    country: "India",
    img_url: "https://static.iplt20.com/players/210/1115.png",
    skills: {
      "Role": "Batsman",
      "Batting Style": "Left-handed",
      "Bowling Style": "N/A",
    },
    stats: {
      matches: 1,
      runs: 7,
      wickets: 0,
    },
    info: {
      DOB: "18 December 1988",
      "IPL Debut": 2013,
    },
  },
  {
    name: "Pavan Deshpande",
    country: "India",
    img_url: "https://static.iplt20.com/players/210/4957.png",
    skills: {
      "Role": "Batsman",
      "Batting Style": "Left-handed",
      "Bowling Style": "Off Spin",
    },
    stats: {
      matches: 1,
      runs: 7,
      wickets: 0,
    },
    info: {
      DOB: "16 September 1989",
      "IPL Debut": "",
    },
  },
  {
    name: "Washington Sundar",
    country: "India",
    img_url: "https://static.iplt20.com/players/210/2973.png",
    skills: {
      "Role": "All-rounder",
      "Batting Style": "Left-handed",
      "Bowling Style": "Off Spin",
    },
    stats: {
      matches: 6,
      runs: 31,
      wickets: 3,
    },
    info: {
      DOB: "05 October 1999",
      "IPL Debut": 2017,
    },
  },
  {
    name: "Harshal Patel",
    country: "India",
    img_url: "https://static.iplt20.com/players/210/157.png",
    skills: {
      "Role": "Bowler",
      "Batting Style": "Right-handed",
      "Bowling Style": "Medium Seam",
    },
    stats: {
      matches: 11,
      runs: 50,
      wickets: 26,
    },
    info: {
      DOB: "23 November 1990",
      "IPL Debut": 2012,
    },
  },
  {
    name: "Kane Richardson",
    country: "Australia",
    img_url: "https://static.iplt20.com/players/210/798.png",
    skills: {
      "Role": "Bowler",
      "Batting Style": "Right-handed",
      "Bowling Style": "Fast Seam",
    },
    stats: {
      matches: 1,
      runs: 0,
      wickets: 1,
    },
    info: {
      DOB: "12 February 1991",
      "IPL Debut": 2013,
    },
  },
  {
    name: "Rajat Patidar",
    country: "India",
    img_url: "https://static.iplt20.com/players/210/5471.png",
    skills: {
      "Role": "	Batsman",
      "Batting Style": "Right-handed",
      "Bowling Style": "Off Spin",
    },
    stats: {
      matches: 4,
      runs: 71,
      wickets: 0,
    },
    info: {
      DOB: "01 June 1993",
      "IPL Debut": "",
    },
  },
  {
    name: "AB de Villiers",
    country: "South Africa",
    img_url: "https://static.iplt20.com/players/210/233.png",
    skills: {
      "Role": "Wicketkeeper batsman",
      "Batting Style": "Right-handed",
      "Bowling Style": "Medium Seam",
    },
    stats: {
      matches: 11,
      runs: 234,
      wickets: 0,
    },
    info: {
      DOB: "17 February 1984",
      "IPL Debut": 2008,
    },
  },
  {
    name: "Daniel Sams",
    country: "Australia",
    img_url: "https://static.iplt20.com/players/210/4649.png",
    skills: {
      "Role": "All-rounder",
      "Batting Style": "Right-handed",
      "Bowling Style": "Fast Seam",
    },
    stats: {
      matches: 2,
      runs: 6,
      wickets: 1,
    },
    info: {
      DOB: "27 October 1992",
      "IPL Debut": "",
    },
  },
  {
    name: "Shahbaz Ahmed",
    country: "Indian",
    img_url: "https://static.iplt20.com/players/210/13803.png",
    skills: {
      "Role": "Bowler",
      "Batting Style": "Left-handed",
      "Bowling Style": "Orthodox",
    },
    stats: {
      matches: 7,
      runs: 24,
      wickets: 6,
    },
    info: {
      DOB: "11 December 1994",
      "IPL Debut": "",
    },
  },
  {
    name: "Tim David",
    country: "Singapore",
    img_url: "https://static.iplt20.com/players/210/4524.png",
    skills: {
      "Role": "All-rounder",
      "Batting Style": "Right-handed",
      "Bowling Style": "Off Spin",
    },
    stats: {
      matches: 1,
      runs: 1,
      wickets: 0,
    },
    info: {
      DOB: "16 March 1996",
      "IPL Debut": "",
    },
  },
  {
    name: "Yuzvendra Chahal",
    country: "India",
    img_url: "https://static.iplt20.com/players/210/111.png",
    skills: {
      "Role": "Bowler",
      "Batting Style": "Right-handed",
      "Bowling Style": "Leg Spin",
    },
    stats: {
      matches: 11,
      runs: 10,
      wickets: 11,
    },
    info: {
      DOB: "23 July 1990",
      "IPL Debut": 2013,
    },
  },
  {
    name: "Navdeep Saini",
    country: "India",
    img_url: "https://static.iplt20.com/players/210/3824.png",
    skills: {
      "Role": "Bowler",
      "Batting Style": "Right-handed",
      "Bowling Style": "Fast Seam",
    },
    stats: {
      matches: 2,
      runs: 2,
      wickets: 0,
    },
    info: {
      DOB: "23 November 1992",
      "IPL Debut": 2019,
    },
  },
  {
    name: "Dushmantha Chameera",
    country: "Sri Lanka",
    img_url: "https://static.iplt20.com/players/210/3824.png",
    skills: {
      "Role": "Batsman",
      "Batting Style": "Right-handed",
      "Bowling Style": "N/A",
    },
    stats: {
      matches: 0,
      runs: 0,
      wickets: 0,
    },
    info: {
      DOB: "11 January 1992",
      "IPL Debut": "",
    },
  },
  {
    name: "Dan Christian",
    country: "Australia",
    img_url: "https://static.iplt20.com/players/210/181.png",
    skills: {
      "Role": "	All-rounder",
      "Batting Style": "Right-handed",
      "Bowling Style": "Medium Seam",
    },
    stats: {
      matches: 5,
      runs: 4,
      wickets: 1,
    },
    info: {
      DOB: "04 May 1983",
      "IPL Debut": 2011,
    },
  },
  {
    name: "Devdutt Padikkal",
    country: "India",
    img_url: "https://static.iplt20.com/players/210/5430.png",
    skills: {
      "Role": "Batsman",
      "Batting Style": "Left-handed",
      "Bowling Style": "Off Spin",
    },
    stats: {
      matches: 10,
      runs: 309,
      wickets: 1,
    },
    info: {
      DOB: "07 July 2000",
      "IPL Debut": "",
    },
  },
  {
    name: "Adam Zampa",
    country: "Australia",
    img_url: "https://static.iplt20.com/players/210/958.png",
    skills: {
      "Role": "Bowler",
      "Batting Style": "Right-handed",
      "Bowling Style": "Leg Spin",
    },
    stats: {
      matches: 0,
      runs: 0,
      wickets: 0,
    },
    info: {
      DOB: "31 March 1992",
      "IPL Debut": 2016,
    },
  },
];

export default data;
