// http://www.city-data.com/locations/RiteAid/Delaware-County-PA-2.html
/* eslint-disable no-unused-vars */
const delcoStoreList = [
  {
    id: 11112,
    address: '3120 CHICHESTER AVE',
    zip: 19061,
  },
  {
    id: 1567,
    address: '2901 SPRINGFIELD RD',
    zip: 19008,
  },
  // {
  //   id: 2548,
  //   address: '1600 EDGMONT AVE',
  //   zip: 19013,
  // },
  {
    id: 2264,
    address: '2722 WEST 9TH ST',
    zip: 19013,
  },
  {
    id: 1274,
    address: '4400 PENNELL ROAD',
    zip: 19014,
  },
  {
    id: 1758,
    address: '113 EAST BALTIMORE AVE',
    zip: 19018,
  },
  {
    id: 1081,
    address: '710 BURMONT ROAD',
    zip: 19026,
  },
  {
    id: 11105,
    address: '832 NORTH LANSDOWNE',
    zip: 19026,
  },
  // {
  //   id: 11107,
  //   address: '1838 DELMAR DRIVE',
  //   zip: 19032,
  // },
  // {
  //   id: 134,
  //   addreess: '199 KEDRON AVENUE',
  //   zip: 19033,
  // },
  {
    id: 1566,
    address: '327 NORTH CHESTER PIKE',
    zip: 19036,
  },
  // {
  //   id: 2298,
  //   address: '62 E. BALTIMORE AVE',
  //   zip: 19050,
  // },
  // {
  //   id: 11102,
  //   address: '5110 PENNELL ROAD',
  //   zip: 19063,
  // },
  {
    id: 11113,
    address: '510 EAST BALTIMORE PIKE',
    zip: 19063,
  },
  {
    id: 679,
    address: '123 SOUTH 69TH ST',
    zip: 19082,
  },
  {
    id: 11117,
    address: '1500 GARRETT ROAD',
    zip: 19082,
  },
  {
    id: 856,
    address: '762 CHESTER PIKE',
    zip: 19076,
  },
  {
    id: 995,
    address: '127 WEST LANCASTER AVE',
    zip: 19087,
  },
  {
    id: 11119,
    address: '644 WEST LANCASTER AVE',
    zip: 19087,
  },
  {
    id: 2631,
    address: '170 SAXER AVE',
    zip: 19064,
  },
  // {
  //   id: 180,
  //   address: '1300 WEST MACDADE',
  //   zip: 19094,
  // },
  {
    id: 2442,
    address: '950 EAST BALTIMORE PIKE',
    zip: 19050,
  },
];

const phillyStoreList = [
  {
    id: 3325,
    address: '1443 South 7th Street',
    zip: 19147,
  },
  {
    id: 3783,
    address: '810 S Broad Street',
    zip: 19146,
  },
  {
    id: 242,
    address: '730-32 Market Street',
    zip: 19106,
  },
  {
    id: 1365,
    address: '215 South Broad Street',
    zip: 19107,
  },
  {
    id: 3770,
    address: '1000-1008 Market Street',
    zip: 19107,
  },
  {
    id: 174,
    address: '1628-36 Chestnut Street',
    zip: 19103,
  },
  {
    id: 6777,
    address: '1900 Arch Street',
    zip: 19103,
  },
  {
    id: 3959,
    address: '2301 Walnut Street',
    zip: 19103,
  },
  {
    id: 2698,
    address: '339 Spring Garden Street',
    zip: 19123,
  },
  {
    id: 3876,
    address: '1500 W. Moyamensing Avenue',
    zip: 19145,
  },
  {
    id: 3227,
    address: '3000-02 Reed Street',
    zip: 19146,
  },
  {
    id: 1766,
    address: '10 Snyder Avenue',
    zip: 19148,
  },
  {
    id: 1936,
    address: '2017-2023 South Broad St',
    zip: 19148,
  },
  {
    id: 3825,
    address: '801 South 9th Street',
    zip: 19147,
  },
  {
    id: 3801,
    address: '704-20 East Passyunk Avenue',
    zip: 19147,
  },
];

/* eslint-enable no-unused-vars */

const storeList = phillyStoreList;

const storeMap = storeList.reduce(
  (acc, val) => {
    acc[val.id] = val;
    return acc;
  },
  {},
);

export {
  storeList,
  storeMap,
};
