// Thermometer Object
const thermometer = {
    _celsius: 0,
  
    get temperature() {
      return (this._celsius * 9/5) + 32;
    },
  
    set temperature(celsius) {
      if (typeof celsius === 'number') {
        this._celsius = celsius;
      }
    }
  };
  
  // Student Grade Object
  const studentGrade = {
    _score: 0,
  
    get grade() {
      if (this._score >= 90) return 'A';
      if (this._score >= 80) return 'B';
      if (this._score >= 70) return 'C';
      if (this._score >= 60) return 'D';
      return 'F';
    },
  
    set score(value) {
      if (value >= 0 && value <= 100) {
        this._score = value;
      }
    }
  };
  
  // Password Object
  const password = {
    _password: '',
  
    get value() {
      return '*****';
    },
  
    set value(newPassword) {
      this._password = newPassword.split('').reverse().join('');
    }
  };
  