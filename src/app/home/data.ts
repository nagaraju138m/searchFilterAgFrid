export function getData(): any[] {
  const rowData = [
    {
      name: 'Michael Phelps',
      person: {
        age: 23,
        country: 'United States',
      },
      medals: {
        gold: 8,
        silver: 0,
        bronze: 0,
      },
    },
    {
      name: 'Michael Phelps',
      person: {
        age: 19,
        country: 'United States',
      },
      medals: {
        gold: 6,
        silver: 0,
        bronze: 2,
      },
    },
    {
    
    name: 'Michael Phelps',
    person: {
      age: 27,
      country: 'United States',
    },
    medals: {
      gold: 4,
      silver: 2,
      bronze: 0,
    },
  },
  {
    name: 'Natalie Coughlin',
    person: {
      age: 25,
      country: 'United States',
    },
    medals: {
      gold: 1,
      silver: 2,
      bronze: 3,
    },
  },
  {
    name: 'Aleksey Nemov',
    person: {
      age: 24,
      country: 'Russia',
    },
    medals: {
      gold: 2,
      silver: 1,
      bronze: 3,
    },
  },
  {
    name: 'Alicia Coutts',
    person: {
      age: 24,
      country: 'Australia',
    },
    medals: {
      gold: 1,
      silver: 3,
      bronze: 1,
    },
  },
  {
    name: 'Missy Franklin',
    person: {
      age: 17,
      country: 'United States',
    },
    medals: {
      gold: 4,
      silver: 0,
      bronze: 1,
    },
  },
  {
    name: 'Ryan Lochte',
    person: {
      age: 27,
      country: 'United States',
    },
    medals: {
      gold: 2,
      silver: 2,
      bronze: 1,
    },
  },
  {
    name: 'Allison Schmitt',
    person: {
      age: 22,
      country: 'United States',
    },
    medals: {
      gold: 3,
      silver: 1,
      bronze: 1,
    },
  },
  {
    name: 'Natalie Coughlin',
    person: {
      age: 21,
      country: 'United States',
    },
    medals: {
      gold: 2,
      silver: 2,
      bronze: 1,
    },
  },
  {
    name: 'Ian Thorpe',
    person: {
      age: 17,
      country: 'Australia',
    },
    medals: {
      gold: 3,
      silver: 2,
      bronze: 0,
    },
  },
  {
    name: 'Dara Torres',
    person: {
      age: 33,
      country: 'United States',
    },
    medals: {
      gold: 2,
      silver: 0,
      bronze: 3,
    },
  },
  {
    name: 'Cindy Klassen',
    person: {
      age: 26,
      country: 'Canada',
    },
    medals: {
      gold: 1,
      silver: 2,
      bronze: 2,
    },
  },
  {
    name: 'Nastia Liukin',
    person: {
      age: 18,
      country: 'United States',
    },
    medals: {
      gold: 1,
      silver: 3,
      bronze: 1,
    },
  },
  {
    name: 'Marit Bjørgen',
    person: {
      age: 29,
      country: 'Norway',
    },
    medals: {
      gold: 3,
      silver: 1,
      bronze: 1,
    },
  },
  {
    name: 'Sun Yang',
    person: {
      age: 20,
      country: 'China',
    },
    medals: {
      gold: 2,
      silver: 1,
      bronze: 1,
    },
  },
  {
    name: 'Kirsty Coventry',
    person: {
      age: 24,
      country: 'Zimbabwe',
    },
    medals: {
      gold: 1,
      silver: 3,
      bronze: 0,
    },
  },
  {
    name: 'Libby Lenton-Trickett',
    person: {
      age: 23,
      country: 'Australia',
    },
    medals: {
      gold: 2,
      silver: 1,
      bronze: 1,
    },
  },
  {
    name: 'Ryan Lochte',
    person: {
      age: 24,
      country: 'United States',
    },
    medals: {
      gold: 2,
      silver: 0,
      bronze: 2,
    },
  },
  {
    name: 'Inge de Bruijn',
    person: {
      age: 30,
      country: 'Netherlands',
    },
    medals: {
      gold: 1,
      silver: 1,
      bronze: 2,
    },
  },
  {
    name: 'Petria Thomas',
    person: {
      age: 28,
      country: 'Australia',
    },
    medals: {
      gold: 3,
      silver: 1,
      bronze: 0,
    },
  },
  {
    name: 'Ian Thorpe',
    person: {
      age: 21,
      country: 'Australia',
    },
    medals: {
      gold: 2,
      silver: 1,
      bronze: 1,
    },
  },
  {
    name: 'Inge de Bruijn',
    person: {
      age: 27,
      country: 'Netherlands',
    },
    medals: {
      gold: 3,
      silver: 1,
      bronze: 0,
    },
  },
  {
    name: 'Gary Hall Jr.',
    person: {
      age: 25,
      country: 'United States',
    },
    medals: {
      gold: 2,
      silver: 1,
      bronze: 1,
    },
  },
  {
    name: 'Michael Klim',
    person: {
      age: 23,
      country: 'Australia',
    },
    medals: {
      gold: 2,
      silver: 2,
      bronze: 0,
    },
  },
  {
    name: "Susie O'Neill",
    person: {
      age: 27,
      country: 'Australia',
    },
    medals: {
      gold: 1,
      silver: 3,
      bronze: 0,
    },
  },
  {
    name: 'Jenny Thompson',
    person: {
      age: 27,
      country: 'United States',
    },
    medals: {
      gold: 3,
      silver: 0,
      bronze: 1,
    },
  },
  {
    name: 'Pieter van den Hoogenband',
    person: {
      age: 22,
      country: 'Netherlands',
    },
    medals: {
      gold: 2,
      silver: 0,
      bronze: 2,
    },
  },
  {
    name: 'An Hyeon-Su',
    person: {
      age: 20,
      country: 'South Korea',
    },
    medals: {
      gold: 3,
      silver: 0,
      bronze: 1,
    },
  },
  {
    name: 'Aliya Mustafina',
    person: {
      age: 17,
      country: 'Russia',
    },
    medals: {
      gold: 1,
      silver: 1,
      bronze: 2,
    },
  },
  {
    name: 'Shawn Johnson',
    person: {
      age: 16,
      country: 'United States',
    },
    medals: {
      gold: 1,
      silver: 3,
      bronze: 0,
    },
  },
  {
    name: 'Dmitry Sautin',
    person: {
      age: 26,
      country: 'Russia',
    },
    medals: {
      gold: 1,
      silver: 1,
      bronze: 2,
    },
  },
  {
    name: 'Leontien Zijlaard-van Moorsel',
    person: {
      age: 30,
      country: 'Netherlands',
    },
    medals: {
      gold: 3,
      silver: 1,
      bronze: 0,
    },
  },
  {
    name: 'Petter Northug Jr.',
    person: {
      age: 24,
      country: 'Norway',
    },
    medals: {
      gold: 2,
      silver: 1,
      bronze: 1,
    },
  },
  {
    name: 'Ole Einar Bjørndalen',
    person: {
      age: 28,
      country: 'Norway',
    },
    medals: {
      gold: 4,
      silver: 0,
      bronze: 0,
    },
  },
  {
    name: 'Janica Kostelic',
    person: {
      age: 20,
      country: 'Croatia',
    },
    medals: {
      gold: 3,
      silver: 1,
      bronze: 0,
    },
  },
  {
    name: 'Nathan Adrian',
    person: {
      age: 23,
      country: 'United States',
    },
    medals: {
      gold: 2,
      silver: 1,
      bronze: 0,
    },
  },
  {
    name: 'Yannick Agnel',
    person: {
      age: 20,
      country: 'France',
    },
    medals: {
      gold: 2,
      silver: 1,
      bronze: 0,
    },
  },
  {
    name: 'Brittany Elmslie',
    person: {
      age: 18,
      country: 'Australia',
    },
    medals: {
      gold: 1,
      silver: 2,
      bronze: 0,
    },
  },
  {
    name: 'Matt Grevers',
    person: {
      age: 27,
      country: 'United States',
    },
    medals: {
      gold: 2,
      silver: 1,
      bronze: 0,
    },
  },
  {
    name: 'Ryosuke Irie',
    person: {
      age: 22,
      country: 'Japan',
    },
    medals: {
      gold: 0,
      silver: 2,
      bronze: 1,
    },
  },
  {
    name: 'Cullen Jones',
    person: {
      age: 28,
      country: 'United States',
    },
    medals: {
      gold: 1,
      silver: 2,
      bronze: 0,
    },
  },
  {
    name: 'Ranomi Kromowidjojo',
    person: {
      age: 21,
      country: 'Netherlands',
    },
    medals: {
      gold: 2,
      silver: 1,
      bronze: 0,
    },
  },
  {
    name: 'Camille Muffat',
    person: {
      age: 22,
      country: 'France',
    },
    medals: {
      gold: 1,
      silver: 1,
      bronze: 1,
    },
  },
  {
    name: 'Mel Schlanger',
    person: {
      age: 25,
      country: 'Australia',
    },
    medals: {
      gold: 1,
      silver: 2,
      bronze: 0,
    },
  },
  {
    name: 'Emily Seebohm',
    person: {
      age: 20,
      country: 'Australia',
    },
    medals: {
      gold: 1,
      silver: 2,
      bronze: 0,
    },
  },
  {
    name: 'Rebecca Soni',
    person: {
      age: 25,
      country: 'United States',
    },
    medals: {
      gold: 2,
      silver: 1,
      bronze: 0,
    },
  },
  {
    name: 'Satomi Suzuki',
    person: {
      age: 21,
      country: 'Japan',
    },
    medals: {
      gold: 0,
      silver: 1,
      bronze: 2,
    },
  },
  {
    name: 'Dana Vollmer',
    person: {
      age: 24,
      country: 'United States',
    },
    medals: {
      gold: 3,
      silver: 0,
      bronze: 0,
    },
  },
  {
    name: 'Alain Bernard',
    person: {
      age: 25,
      country: 'France',
    },
    medals: {
      gold: 1,
      silver: 1,
      bronze: 1,
    },
  },
  {
    name: 'László Cseh Jr.',
    person: {
      age: 22,
      country: 'Hungary',
    },
    medals: {
      gold: 0,
      silver: 3,
      bronze: 0,
    },
  },
  {
    name: 'Matt Grevers',
    person: {
      age: 23,
      country: 'United States',
    },
    medals: {
      gold: 2,
      silver: 1,
      bronze: 0,
    },
  },
  {
    name: 'Margaret Hoelzer',
    person: {
      age: 25,
      country: 'United States',
    },
    medals: {
      gold: 0,
      silver: 2,
      bronze: 1,
    },
  },
  {
    name: 'Katie Hoff',
    person: {
      age: 19,
      country: 'United States',
    },
    medals: {
      gold: 0,
      silver: 1,
      bronze: 2,
    },
  },
  {
    name: 'Leisel Jones',
    person: {
      age: 22,
      country: 'Australia',
    },
    medals: {
      gold: 2,
      silver: 1,
      bronze: 0,
    },
  },
  {
    name: 'Kosuke Kitajima',
    person: {
      age: 25,
      country: 'Japan',
    },
    medals: {
      gold: 2,
      silver: 0,
      bronze: 1,
    },
  },
  {
    name: 'Andrew Lauterstein',
    person: {
      age: 21,
      country: 'Australia',
    },
    medals: {
      gold: 0,
      silver: 1,
      bronze: 2,
    },
  },
  {
    name: 'Jason Lezak',
    person: {
      age: 32,
      country: 'United States',
    },
    medals: {
      gold: 2,
      silver: 0,
      bronze: 1,
    },
  },
  {
    name: 'Pang Jiaying',
    person: {
      age: 23,
      country: 'China',
    },
    medals: {
      gold: 0,
      silver: 1,
      bronze: 2,
    },
  },
  {
    name: 'Aaron Peirsol',
    person: {
      age: 25,
      country: 'United States',
    },
    medals: {
      gold: 2,
      silver: 1,
      bronze: 0,
    },
  },
  {
    name: 'Steph Rice',
    person: {
      age: 20,
      country: 'Australia',
    },
    medals: {
      gold: 3,
      silver: 0,
      bronze: 0,
    },
  },
  {
    name: 'Jess Schipper',
    person: {
      age: 21,
      country: 'Australia',
    },
    medals: {
      gold: 1,
      silver: 0,
      bronze: 2,
    },
  },
  {
    name: 'Rebecca Soni',
    person: {
      age: 21,
      country: 'United States',
    },
    medals: {
      gold: 1,
      silver: 2,
      bronze: 0,
    },
  },
  {
    name: 'Eamon Sullivan',
    person: {
      age: 22,
      country: 'Australia',
    },
    medals: {
      gold: 0,
      silver: 2,
      bronze: 1,
    },
  },
  {
    name: 'Dara Torres',
    person: {
      age: 41,
      country: 'United States',
    },
    medals: {
      gold: 0,
      silver: 3,
      bronze: 0,
    },
  },
  {
    name: 'Amanda Beard',
    person: {
      age: 22,
      country: 'United States',
    },
    medals: {
      gold: 1,
      silver: 2,
      bronze: 0,
    },
  },
  {
    name: 'Antje Buschschulte',
    person: {
      age: 25,
      country: 'Germany',
    },
    medals: {
      gold: 0,
      silver: 0,
      bronze: 3,
    },
  },
  {
    name: 'Kirsty Coventry',
    person: {
      age: 20,
      country: 'Zimbabwe',
    },
    medals: {
      gold: 1,
      silver: 1,
      bronze: 1,
    },
  },
  {
    name: 'Ian Crocker',
    person: {
      age: 21,
      country: 'United States',
    },
    medals: {
      gold: 1,
      silver: 1,
      bronze: 1,
    },
  },
  {
    name: 'Grant Hackett',
    person: {
      age: 24,
      country: 'Australia',
    },
    medals: {
      gold: 1,
      silver: 2,
      bronze: 0,
    },
  },
  {
    name: 'Brendan Hansen',
    person: {
      age: 22,
      country: 'United States',
    },
    medals: {
      gold: 1,
      silver: 1,
      bronze: 1,
    },
  },
  {
    name: 'Jodie Henry',
    person: {
      age: 20,
      country: 'Australia',
    },
    medals: {
      gold: 3,
      silver: 0,
      bronze: 0,
    },
  },
  {
    name: 'Otylia Jedrzejczak',
    person: {
      age: 20,
      country: 'Poland',
    },
    medals: {
      gold: 1,
      silver: 2,
      bronze: 0,
    },
  },
  {
    name: 'Leisel Jones',
    person: {
      age: 18,
      country: 'Australia',
    },
    medals: {
      gold: 1,
      silver: 1,
      bronze: 1,
    },
  },
  {
    name: 'Kosuke Kitajima',
    person: {
      age: 21,
      country: 'Japan',
    },
    medals: {
      gold: 2,
      silver: 0,
      bronze: 1,
    },
  },
  {
    name: 'Laure Manaudou',
    person: {
      age: 17,
      country: 'France',
    },
    medals: {
      gold: 1,
      silver: 1,
      bronze: 1,
    },
  },
  {
    name: 'Aaron Peirsol',
    person: {
      age: 21,
      country: 'United States',
    },
    medals: {
      gold: 3,
      silver: 0,
      bronze: 0,
    },
  },
  {
    name: 'Kaitlin Sandeno',
    person: {
      age: 21,
      country: 'United States',
    },
    medals: {
      gold: 1,
      silver: 1,
      bronze: 1,
    },
  },
  {
    name: 'Roland Schoeman',
    person: {
      age: 24,
      country: 'South Africa',
    },
    medals: {
      gold: 1,
      silver: 1,
      bronze: 1,
    },
  },
  {
    name: 'Pieter van den Hoogenband',
    person: {
      age: 26,
      country: 'Netherlands',
    },
    medals: {
      gold: 1,
      silver: 2,
      bronze: 0,
    },
  },
  {
    name: 'Therese Alshammar',
    person: {
      age: 23,
      country: 'Sweden',
    },
    medals: {
      gold: 0,
      silver: 2,
      bronze: 1,
    },
  },
  {
    name: 'Yana Klochkova',
    person: {
      age: 18,
      country: 'Ukraine',
    },
    medals: {
      gold: 2,
      silver: 1,
      bronze: 0,
    },
  },
  {
    name: 'Lenny Krayzelburg',
    person: {
      age: 24,
      country: 'United States',
    },
    medals: {
      gold: 3,
      silver: 0,
      bronze: 0,
    },
  },
  {
    name: 'Massimiliano Rosolino',
    person: {
      age: 22,
      country: 'Italy',
    },
    medals: {
      gold: 1,
      silver: 1,
      bronze: 1,
    },
  },
  {
    name: 'Petria Thomas',
    person: {
      age: 25,
      country: 'Australia',
    },
    medals: {
      gold: 0,
      silver: 2,
      bronze: 1,
    },
  },
  {
    name: 'Matt Welsh',
    person: {
      age: 23,
      country: 'Australia',
    },
    medals: {
      gold: 0,
      silver: 2,
      bronze: 1,
    },
  },
  {
    name: 'Lee Jeong-Su',
    person: {
      age: 20,
      country: 'South Korea',
    },
    medals: {
      gold: 2,
      silver: 1,
      bronze: 0,
    },
  },
  {
    name: 'Apolo Anton Ohno',
    person: {
      age: 27,
      country: 'United States',
    },
    medals: {
      gold: 0,
      silver: 1,
      bronze: 2,
    },
  },
  {
    name: 'Wang Meng',
    person: {
      age: 24,
      country: 'China',
    },
    medals: {
      gold: 3,
      silver: 0,
      bronze: 0,
    },
  },
  {
    name: 'Jin Seon-Yu',
    person: {
      age: 17,
      country: 'South Korea',
    },
    medals: {
      gold: 3,
      silver: 0,
      bronze: 0,
    },
  },
  {
    name: 'Lee Ho-Seok',
    person: {
      age: 19,
      country: 'South Korea',
    },
    medals: {
      gold: 1,
      silver: 2,
      bronze: 0,
    },
  },
  {
    name: 'Apolo Anton Ohno',
    person: {
      age: 23,
      country: 'United States',
    },
    medals: {
      gold: 1,
      silver: 0,
      bronze: 2,
    },
  },
  {
    name: 'Wang Meng',
    person: {
      age: 20,
      country: 'China',
    },
    medals: {
      gold: 1,
      silver: 1,
      bronze: 1,
    },
  },
  {
    name: 'Marc Gagnon',
    person: {
      age: 26,
      country: 'Canada',
    },
    medals: {
      gold: 2,
      silver: 0,
      bronze: 1,
    },
  },
  {
    name: 'Yang Yang (A)',
    person: {
      age: 25,
      country: 'China',
    },
    medals: {
      gold: 2,
      silver: 1,
      bronze: 0,
    },
  },
  {
    name: 'Stephanie Beckert',
    person: {
      age: 21,
      country: 'Germany',
    },
    medals: {
      gold: 1,
      silver: 2,
      bronze: 0,
    },
  },
  {
    name: 'Martina Sáblíková',
    person: {
      age: 22,
      country: 'Czech Republic',
    },
    medals: {
      gold: 2,
      silver: 0,
      bronze: 1,
    },
  },
  {
    name: 'Enrico Fabris',
    person: {
      age: 24,
      country: 'Italy',
    },
    medals: {
      gold: 2,
      silver: 0,
      bronze: 1,
    },
  },
  {
    name: 'Chad Hedrick',
    person: {
      age: 28,
      country: 'United States',
    },
    medals: {
      gold: 1,
      silver: 1,
      bronze: 1,
    },
  },
  {
    name: 'Jochem Uytdehaage',
    person: {
      age: 25,
      country: 'Netherlands',
    },
    medals: {
      gold: 2,
      silver: 1,
      bronze: 0,
    },
  },
  {
    name: 'Sabine Völker',
    person: {
      age: 28,
      country: 'Germany',
    },
    medals: {
      gold: 0,
      silver: 2,
      bronze: 1,
    },
  },
  {
    name: 'Gregor Schlierenzauer',
    person: {
      age: 20,
      country: 'Austria',
    },
    medals: {
      gold: 1,
      silver: 0,
      bronze: 2,
    },
  },
  {
    name: 'Lars Bystøl',
    person: {
      age: 27,
      country: 'Norway',
    },
    medals: {
      gold: 1,
      silver: 0,
      bronze: 2,
    },
  },
  {
    name: 'Johnny Spillane',
    person: {
      age: 29,
      country: 'United States',
    },
    medals: {
      gold: 0,
      silver: 3,
      bronze: 0,
    },
  },
  {
    name: 'Felix Gottwald',
    person: {
      age: 30,
      country: 'Austria',
    },
    medals: {
      gold: 2,
      silver: 1,
      bronze: 0,
    },
  },
  {
    name: 'Georg Hettich',
    person: {
      age: 27,
      country: 'Germany',
    },
    medals: {
      gold: 1,
      silver: 1,
      bronze: 1,
    },
  },
  {
    name: 'Felix Gottwald',
    person: {
      age: 26,
      country: 'Austria',
    },
    medals: {
      gold: 0,
      silver: 0,
      bronze: 3,
    },
  },
  {
    name: 'Samppa Lajunen',
    person: {
      age: 22,
      country: 'Finland',
    },
    medals: {
      gold: 3,
      silver: 0,
      bronze: 0,
    },
  },
  {
    name: 'Aly Raisman',
    person: {
      age: 18,
      country: 'United States',
    },
    medals: {
      gold: 2,
      silver: 0,
      bronze: 1,
    },
  },
  {
    name: 'Kohei Uchimura',
    person: {
      age: 23,
      country: 'Japan',
    },
    medals: {
      gold: 1,
      silver: 2,
      bronze: 0,
    },
  },
  {
    name: 'Zou Kai',
    person: {
      age: 24,
      country: 'China',
    },
    medals: {
      gold: 2,
      silver: 0,
      bronze: 1,
    },
  },
  {
    name: 'Cheng Fei',
    person: {
      age: 20,
      country: 'China',
    },
    medals: {
      gold: 1,
      silver: 0,
      bronze: 2,
    },
  },
  {
    name: 'Yang Wei',
    person: {
      age: 28,
      country: 'China',
    },
    medals: {
      gold: 2,
      silver: 1,
      bronze: 0,
    },
  },
  {
    name: 'Yang Yilin',
    person: {
      age: 15,
      country: 'China',
    },
    medals: {
      gold: 1,
      silver: 0,
      bronze: 2,
    },
  },
  {
    name: 'Zou Kai',
    person: {
      age: 20,
      country: 'China',
    },
    medals: {
      gold: 3,
      silver: 0,
      bronze: 0,
    },
  },
  {
    name: 'Marian Dragulescu',
    person: {
      age: 23,
      country: 'Romania',
    },
    medals: {
      gold: 0,
      silver: 1,
      bronze: 2,
    },
  },
  {
    name: 'Paul Hamm',
    person: {
      age: 21,
      country: 'United States',
    },
    medals: {
      gold: 1,
      silver: 2,
      bronze: 0,
    },
  },
  {
    name: 'Carly Patterson',
    person: {
      age: 16,
      country: 'United States',
    },
    medals: {
      gold: 1,
      silver: 2,
      bronze: 0,
    },
  },
  {
    name: 'Catalina Ponor',
    person: {
      age: 16,
      country: 'Romania',
    },
    medals: {
      gold: 3,
      silver: 0,
      bronze: 0,
    },
  },
  {
    name: 'Simona Amânar',
    person: {
      age: 20,
      country: 'Romania',
    },
    medals: {
      gold: 2,
      silver: 0,
      bronze: 1,
    },
  },
  {
    name: 'Svetlana Khorkina',
    person: {
      age: 21,
      country: 'Russia',
    },
    medals: {
      gold: 1,
      silver: 2,
      bronze: 0,
    },
  },
  {
    name: 'Yekaterina Lobaznyuk',
    person: {
      age: 17,
      country: 'Russia',
    },
    medals: {
      gold: 0,
      silver: 2,
      bronze: 1,
    },
  },
  {
    name: 'Yelena Zamolodchikova',
    person: {
      age: 17,
      country: 'Russia',
    },
    medals: {
      gold: 2,
      silver: 1,
      bronze: 0,
    },
  },
  {
    name: 'Guo Shuang',
    person: {
      age: 26,
      country: 'China',
    },
    medals: {
      gold: 0,
      silver: 2,
      bronze: 1,
    },
  },
  {
    name: 'Chris Hoy',
    person: {
      age: 32,
      country: 'Great Britain',
    },
    medals: {
      gold: 3,
      silver: 0,
      bronze: 0,
    },
  },
  {
    name: 'Bradley Wiggins',
    person: {
      age: 24,
      country: 'Great Britain',
    },
    medals: {
      gold: 1,
      silver: 1,
      bronze: 1,
    },
  },
  {
    name: 'Florian Rousseau',
    person: {
      age: 26,
      country: 'France',
    },
    medals: {
      gold: 2,
      silver: 1,
      bronze: 0,
    },
  },
  {
    name: 'Justyna Kowalczyk',
    person: {
      age: 27,
      country: 'Poland',
    },
    medals: {
      gold: 1,
      silver: 1,
      bronze: 1,
    },
  }
  ];
  return rowData
}