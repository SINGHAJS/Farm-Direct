const PRODUCTS = [
  {
    id: '1',
    farmId: '1',
    name: 'Apples',
    price: '$0.99/kg',
    imageSrc:
      'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGVzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    farmName: 'Green Valley Farm',
    farmLocation: 'Eugene, Oregon',
    openingDay: 'Monday to Saturday',
    openingTime: '9:00 AM to 6:00 PM',
  },
  {
    id: '2',
    farmId: '1',
    name: 'Cucumber',
    price: '$0.99 each',
    imageSrc:
      'https://images.unsplash.com/photo-1462536738427-0725f3eb98f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGN1Y3VtYmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60',
    farmName: 'Sunny Meadows Farm',
    farmLocation: 'Tulsa, Oklahoma',
    openingDay: 'Tuesday to Sunday',
    openingTime: '10:00 AM to 7:00 PM',
  },
  {
    id: '3',
    farmId: '1',
    name: 'Lemons',
    price: '$5.99/kg',
    imageSrc:
      'https://images.unsplash.com/photo-1605185189315-fc269c231e41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGVtb25zfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    farmName: 'Windy Hill Farm',
    farmLocation: 'Lexington, Kentucky',
    openingDay: 'Wednesday to Sunday',
    openingTime: '11:00 AM to 8:00 PM',
  },
  {
    id: '4',
    farmId: '2',
    name: 'Peaches',
    price: '$2.99/kg',
    imageSrc:
      'https://images.unsplash.com/photo-1438274754346-45322cac87e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVhY2hlc3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    farmName: 'Golden Harvest Farm',
    farmLocation: 'Atlanta, Georgia',
    openingDay: 'Monday to Friday',
    openingTime: '8:00 AM to 5:00 PM',
  },
  {
    id: '5',
    farmId: '3',
    name: 'Grapes',
    price: '$3.99/kg',
    imageSrc:
      'https://images.unsplash.com/photo-1537640538966-79f369143f8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGVzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    farmName: 'Happy Trails Farm',
    farmLocation: 'Austin, Texas',
    openingDay: 'Thursday to Sunday',
    openingTime: '9:00 AM to 4:00 PM',
  },
  {
    id: '6',
    farmId: '4',
    name: 'Carrots',
    price: '$2.99/kg',
    imageSrc:
      'https://images.unsplash.com/photo-1633380110125-f6e685676160?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2Fycm90fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    farmName: 'Mountain Top Farm',
    farmLocation: 'Boulder, Colorado',
    openingDay: 'Friday to Sunday',
    openingTime: '10:00 AM to 4:00 PM',
  },
  {
    id: '7',
    farmId: '5',
    name: 'Tomatoes',
    price: '$1.99/kg',
    imageSrc:
      'https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRvbWF0b2VzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    farmName: 'Harvest Moon Farm',
    farmLocation: 'Gettysburg, Pennsylvania',
    openingDay: 'Monday to Saturday',
    openingTime: '9:00 AM to 6:00 PM',
  },
  {
    id: '8',
    farmId: '6',
    name: 'Blueberries',
    price: '$4.99/kg',
    imageSrc:
      'https://images.unsplash.com/photo-1595812344149-a5a84e1c3964?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ymx1ZWJlcnJpZXN8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=800&q=60',
    farmName: 'Blue Sky Farm',
    farmLocation: 'Portland, Oregon',
    openingDay: 'Saturday to Sunday',
    openingTime: '8:00 AM to 3:00 PM',
  },
  {
    id: '9',
    farmId: '7',
    name: 'Organic Eggs',
    price: '$4.99/dozen',
    imageSrc:
      'https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWdnc3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    farmName: 'Saddleback Farm',
    farmLocation: 'Charlotte, North Carolina',
    openingDay: 'Monday to Friday',
    openingTime: '9:00 AM to 5:00 PM',
  },
  {
    id: '9',
    farmId: '8',
    name: 'Kiwi Fruits',
    price: '$2.99/kg',
    imageSrc:
      'https://images.unsplash.com/photo-1563147592-6767f86ba8da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2l3aSUyMGZydWl0cyUyMHRyZWV8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=800&q=60',
    farmName: 'Blue Sky Farm',
    farmLocation: 'Portland, Oregon',
    openingDay: 'Monday to Friday',
    openingTime: '9:00 AM to 5:00 PM',
  },
];

export default PRODUCTS;
