// LAB7.4
class Account {
    // 1) Public fields
    locale = navigator.language;
  
    // 2) Private fields
    #movements = [];
    #pin;
  
    // Constructor
    constructor(owner, currency, pin) {
      this.owner = owner;
      this.currency = currency;
      this.#pin = pin;
      console.log(`Thanks for opening an account, ${owner}`);
    }
  
    // 3) Public methods
    getMovements() {
      return this.#movements;
    }
  
    deposit(val) {
      this.#movements.push(val);
      return this;
    }
  
    withdraw(val) {
      this.deposit(-val);
      return this;
    }
  
    requestLoan(val) {
      if (this._approveLoan(val)) {
        this.deposit(val);
        console.log(`Loan approved`);
        return this;
      }
    }
  
    // 4) Private methods
    _approveLoan(val) {
      return true;
    }
  
    // Static method
    static helper() {
      console.log('Helper');
    }
  }
  
  // Create an account
  const acc1 = new Account('Jonas', 'EUR', 1111);
  acc1.deposit(250);
  acc1.withdraw(140);
  acc1.requestLoan(1000);
  console.log(acc1.getMovements());
  console.log(acc1);
  