//random function between max and min input
function getRandom(max, min) {
    let random = Math.random() * (max - min) + min;

//    return random;
    
} 
//function getCookies() {

//}
// Objects with the min, max, and avg as properties for each city
//const seattle = {
  //  min: 23,
  //  max: 65,
  //  avg: 6.3,
  //  location: 'Seattle',
  //  hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
  //  customersPerHour: function() {
  //      console.log(this.max);
  //      console.log(this.min);
  //      return getRandom(this.max, this.min);
  //  },
  //  cookiesPerHour:[],
   // getCookies: function() {
      //  for(let i = 0; i < this.hoursOfOperation.length; i++) {
        //console.log('this.avg', this.avg)
        //console.log('this.customerperhour()', this.customersPerHour());
      //  let cookies = Math.ceil(this.avg * this.customersPerHour())
      //  this.cookiesPerHour.push(cookies)
       // }
       // return this.cookiesPerHour;
   // }
    
//}

// calls each function so array of cookies is put into an array. If the function isn't called it'll be undefined.
seattle.getCookies();

function cookieStandLocation(min, max, avg, location, hours) {
    let stand = {};
    stand.min = min;
    stand.max = max;
    stand.avg = avg;
    stand.location = location;
    stand.cookiesPerHour = [];
    
    stand.hoursOfOperation = hours;

    stand.getCookies = function getCookies() {
        for(let i = 0; i < this.hoursOfOperation.length; i++) {
            //console.log('this.avg', this.avg)
            //console.log('this.customerperhour()', this.customersPerHour());
            let cookies = Math.ceil(this.avg * this.customersPerHour())
            this.cookiesPerHour.push(cookies)
            }
            return this.cookiesPerHour;
        return getCookies();
    };
    stand.getCustomers = function() {
      //  console.log(`Stand Max: ${stand.max} || this Max: ${this.max}`);
        return getRandom(this.max, this.min);
    } 
    
    stand.render = function() {
       // let tblDemo = document.createElement('table');
       // let trArr = [];
        let trDemo = document.createElement('tr');
        let localeTD = document.createElement('td');
        localeTD.innerHTML = this.location;
        trDemo.append(localeTD);

        for (let i = 0; i < this.hoursOfOperation.length; i++) {
            let tdDemo = document.createElement('td');
            tdDemo.innerHTML = this.cookiesPerHour[i]
            tdDemo.append(tdDemo);
        } 
        document.getElementById('jsTbl').append(trDemo);  
    }

    return stand;
}

const seattle = cookieStandLocation(23, 65, 6.3, 'Seattle', hoursOfOperation);
seattle.getCustomers();
seattle.getCookies();
const tokyo = cookieStandLocation(3, 24, 1.2, 'Tokyo', hoursOfOperation);
tokyo.getCustomers();
tokyo.getCookies();
const dubai = cookieStandLocation(11, 38, 3.7, 'Dubai', hoursOfOperation);
dubai.getCustomers();
dubai.getCookies();
const paris = cookieStandLocation(20, 38, 2.3, 'Paris', hoursOfOperation);
paris.getCustomers();
paris.getCookies();
const lima = cookieStandLocation(2, 16, 4.6, 'Lima', hoursOfOperation);
lima.getCustomers();
lima.getCookies();

//object definition for each location
    
    
//    const tokyo = {
//        min: 3,
//        max: 24,
//        avg: 1.2,
//        location: `Tokyo`,
//        hoursOfOperation: ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm", "6pm","7pm"],
//        customersPerHour: function() {
//            return getRandom(this.max, this.min)
//        },
//        cookiesPerHour:[],
//        getCookies: function() {
//            for (let i = 0; i < this.hoursOfOperation.length; i++) {
//               // console.log('this.avg', this.avg)
//               // console.log('this.customersperhour()', this.customersPerHour());
//               let cookies = Math.ceil(this.avg * this.customersPerHour())
//               this.cookiesPerHour.push(cookies)
//            }
//            return this.cookiesPerHour;
//        }
        
//    }

    // call tokyo function
//    tokyo.getCookies();

//    const dubai = {
//        min:11,
//        max:38,
//        avg:3.7,
//        hoursOfOperation:["6am","7am","8am","9am","10am","11am","12am","1pm","2pm","3pm","4pm","5pm","6pm","7pm"],
//        customersPerHour: function() {
//            return getRandom(this.max, this.min)
//        },
//        cookiesPerHour:[],
//        getCookies: function() {
//            for (let i = 0; i < this.hoursOfOperation.length; i++) {
//           // console.log("this.avg", this.avg)
//           // console.log("this.customersperhour()", this.customersPerHour())
//            let cookies = Math.ceil(this.avg * this.customersPerHour())
//            this.cookiesPerHour.push(cookies)
//            }
//             return this.cookiesPerHour
//        }
//    }
    // call for dubai function
//    dubai.getCookies();

//    const paris = {
//        min:20,
//        max:38,
//        avg:2.3,
//        hoursOfOperation:["6am","7am","8am","9am","10am","11am","12am","1pm","2pm","3pm","4pm","5pm","6pm","7pm"],
//        customersPerHour: function() {
//            return getRandom(this.max, this.min)
//        },
//        cookiesPerHour:[],
//        getCookies: function() {
//            for (let i = 0; i < this.hoursOfOperation.length; i++) {
//            console.log("this.avg", this.avg)
//            console.log("this.customersperhour()", this.customersPerHour())
//            let cookies = Math.ceil(this.avg * this.customersPerHour())
//            this.cookiesPerHour.push(cookies)
//            }
//             return this.cookiesPerHour
//        }
//    }
    // call for paris function
//    paris.getCookies();

//    const lima = {
//        min:2,
//        max:16,
//        avg:4.6,
//        hoursOfOperation:["6am","7am","8am","9am","10am","11am","12am","1pm","2pm","3pm","4pm","5pm","6pm","7pm"],
//        customersPerHour: function() {
//            return getRandom(this.max, this.min)
//        },
//        cookiesPerHour:[],
//        getCookies: function() {
//            for (let i = 0; i < this.hoursOfOperation.length; i++) {
//            console.log("this.avg", this.avg)
//            console.log("this.customersperhour()", this.customersPerHour())
//            let cookies = Math.ceil(this.avg * this.customersPerHour())
//            this.cookiesPerHour.push(cookies)
//            }
//             return this.cookiesPerHour
//        }
//    }
    // call for lima function
//    lima.getCookies();

    //let hoursArray = document.querySelector('.output')
    //for (let i = 0; i < seattle.hoursOfOperation.length; i++){
      //  let variable = document.createElement("li");
        //variable.innerHTML = `${seattle.hoursOfOperation[i]}: ${seattle.getCookies()[i]} cookies | ${tokyo.hoursOfOperation[i]}: ${tokyo.getCookies()[i]} cookies | ${dubai.hoursOfOperation[i]}: ${dubai.getCookies()[i]} cookies | ${paris.hoursOfOperation[i]}: ${paris.getCookies()[i]} cookies | ${lima.hoursOfOperation[i]}: ${lima.getCookies()[i]} cookies`;
       // hoursArray.append(variable);
    //}
    let tblDemo = document.createElement('table');
    let trArr = [];
    let trDemo = document.createElement('tr');
    for (let i = 0; i < hoursDemo.length; i++) {

    } 

//    function cookieStandLocation(min, max, avg, location, hours) {
//        let stand = {};
//        stand.min = min;
//        stand.max = max;
//        stand.avg = avg;
//        stand.location = location;
//        stand.cookiesPerHour = [];
//
//        stand.hoursOfOperation = hours;
//
//        stand.getCookies = function getCookies() {
//            for(let i = 0; i < this.hoursOfOperation.length; i++) {
//                //console.log('this.avg', this.avg)
                //console.log('this.customerperhour()', this.customersPerHour());
//                let cookies = Math.ceil(this.avg * this.customersPerHour())
//                this.cookiesPerHour.push(cookies)
//                }
//                return this.cookiesPerHour;
//            return getCookies();
//        };
//        stand.getCustomers = function() {
//          //  console.log(`Stand Max: ${stand.max} || this Max: ${this.max}`);
//            return getRandom(this.max, this.min);
//        } 
//        
//        stand.render = function() {
//           // let tblDemo = document.createElement('table');
//           // let trArr = [];
//            let trDemo = document.createElement('tr');
//            let localeTD = document.createElement('td');
//            localeTD.innerHTML = this.location;
//            trDemo.append(localeTD);
//
//            for (let i = 0; i < this.hoursOfOperation.length; i++) {
//                let tdDemo = document.createElement('td');
//                tdDemo.innerHTML = this.cookiesPerHour[i]
//                tdDemo.append(tdDemo);
//            } 
//            document.getElementById('jsTbl').append(trDemo);  
//        }
//
//        return stand;
//    }