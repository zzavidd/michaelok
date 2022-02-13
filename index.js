let commissions = [
  {
    id: 1,
    name: 'Irene Okori',
    email: '',
    price: 0,
    isFinished: false,
    isEmailVerified: true
  },
  {
    id: 2,
    name: 'Desiree Cassidy',
    email: '',
    price: 100,
    isFinished: false,
    isEmailVerified: true
  },
  {
    id: 3,
    name: 'Debbie Falowa',
    email: '',
    price: 25,
    isFinished: false,
    isEmailVerified: true
  },
];

(() => {
  const commission = {
    name: 'David Egbue',
    email: 'd.master700@gmail.com',
    price: 342.68,
  };
  addCommission(commission);
  sortCommissions();

  console.log(commissions);
})();

function addCommission({ name, email, price }) {
  const commission = {
    name: name,
    email: email,
    price: price,
    isFinished: false,
    isEmailVerified: false
  };

  commissions.push(commission);
}

function sortCommissions() {
  commissions = commissions.sort((a, b) => {
    if (a.price < b.price) {
      return 1;
    }
    if (a.price > b.price) {
      return -1;
    }
    return 0;
  });
}

function markCommission(id, isFinished) {
  const foundCommission = commissions.find((commission) => {
    return commission.id === id;
  });

  foundCommission.isFinished = isFinished;
  // Change to true.
}
