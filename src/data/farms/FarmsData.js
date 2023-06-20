const FARMS_DATA = [
  {
    id: '1',
    imageSrc:
      'https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2048&q=80',
    farmName: 'Green Valley Farm',
    farmDescription:
      'Green Valley Farm is an organic farm that specializes in growing heirloom vegetables and fruits. Our farm is located in the heart of the Willamette Valley, where the rich soil and moderate climate provide perfect conditions for growing the most delicious and nutritious produce.',
    farmLocation: 'Eugene, Oregon',
    openingDay: 'Monday to Saturday',
    openingTime: '9:00 AM to 6:00 PM',
  },
  {
    id: '2',
    imageSrc:
      'https://images.unsplash.com/photo-1486754735734-325b5831c3ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGQlMjBmYXJtJTIwaWFtZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60',
    farmName: 'Sunny Meadows Farm',
    farmDescription:
      'Sunny Meadows Farm is a family-owned farm that has been in operation for over 50 years. We specialize in growing sunflowers and pumpkins, and our fields are a sight to behold when they are in full bloom. We also have a petting zoo for the kids, where they can interact with our friendly farm animals.',
    farmLocation: 'Tulsa, Oklahoma',
    openingDay: 'Tuesday to Sunday',
    openingTime: '10:00 AM to 7:00 PM',
  },
  {
    id: '3',
    imageSrc:
      'https://images.unsplash.com/photo-1497122123454-d63853ca2d39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    farmName: 'Windy Hill Farm',
    farmDescription:
      'Windy Hill Farm is a sustainable farm that raises grass-fed cattle and free-range chickens. Our animals are raised in a stress-free environment and are never given antibiotics or growth hormones. We also have a farm-to-table restaurant where you can enjoy a delicious meal made from our fresh, organic ingredients.',
    farmLocation: 'Lexington, Kentucky',
    openingDay: 'Wednesday to Sunday',
    openingTime: '11:00 AM to 8:00 PM',
  },
  {
    id: '4',
    imageSrc:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80',
    farmName: 'Golden Harvest Farm',
    farmDescription:
      "Golden Harvest Farm is a family-run business that grows the most succulent peaches and nectarines you'll ever taste. Our orchards are located in the scenic hills of Georgia, where the warm weather and gentle slopes create the perfect growing conditions for our fruit.",
    farmLocation: 'Atlanta, Georgia',
    openingDay: 'Monday to Friday',
    openingTime: '8:00 AM to 5:00 PM',
  },
  {
    id: '5',
    imageSrc:
      'https://images.unsplash.com/photo-1507662228758-08d030c4820b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80',
    farmName: 'Happy Trails Farm',
    farmDescription:
      "Happy Trails Farm is a small but mighty farm that specializes in raising heritage breeds of pigs and chickens. Our animals live happy lives and are fed a natural diet, resulting in the most delicious and flavorful meat you've ever tasted. We also offer farm tours and cooking classes.",
    farmLocation: 'Austin, Texas',
    openingDay: 'Thursday to Sunday',
    openingTime: '9:00 AM to 4:00 PM',
  },
  {
    id: '6',
    imageSrc:
      'https://images.unsplash.com/photo-1464036388609-747537735eab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    farmName: 'Mountain Top Farm',
    farmDescription:
      'Mountain Top Farm is located in the beautiful Rocky Mountains and is the perfect place to escape the hustle and bustle of city life. We specialize in growing organic vegetables and raising grass-fed beef and lamb. Our farm also offers hiking trails and scenic views of the surrounding mountains.',
    farmLocation: 'Boulder, Colorado',
    openingDay: 'Friday to Sunday',
    openingTime: '10:00 AM to 4:00 PM',
  },
  {
    id: '7',
    imageSrc:
      'https://images.unsplash.com/photo-1464638681273-0962e9b53566?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    farmName: 'Harvest Moon Farm',
    farmDescription:
      'Harvest Moon Farm is a family-owned farm that has been in operation for over 100 years. We grow a wide variety of fruits and vegetables, including apples, peaches, corn, and tomatoes. Our farm also has a country store where you can purchase fresh produce, baked goods, and handmade crafts.',
    farmLocation: 'Gettysburg, Pennsylvania',
    openingDay: 'Monday to Saturday',
    openingTime: '9:00 AM to 6:00 PM',
  },
  {
    id: '8',
    imageSrc:
      'https://images.unsplash.com/photo-1467740100611-36858db27485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
    farmName: 'Blue Sky Farm',
    farmDescription:
      'Blue Sky Farm is a small but thriving farm that specializes in growing blueberries and strawberries. Our berries are hand-picked and sold fresh or frozen, and are perfect for making jams, pies, and other desserts. We also offer berry-picking events and farm tours.',
    farmLocation: 'Portland, Oregon',
    openingDay: 'Saturday to Sunday',
    openingTime: '8:00 AM to 3:00 PM',
  },
  {
    id: '9',
    imageSrc:
      'https://images.unsplash.com/photo-1542914119-d4f8166d86b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    farmName: 'Saddleback Farm',
    farmDescription:
      'Saddleback Farm is a horse farm that offers riding lessons, horse boarding, and equine therapy sessions. Our farm is located on a scenic property with trails that wind through fields and forests. We also have a petting zoo with miniature horses, goats, and other animals.',
    farmLocation: 'Charlotte, North Carolina',
    openingDay: 'Monday to Friday',
    openingTime: '9:00 AM to 5:00 PM',
  },
];

export default FARMS_DATA;
