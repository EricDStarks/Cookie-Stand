//random function between max and min input
function getRandom(max, min) {
    let random = Math.random() * (max - min) + min;

    return random;
    
}
// Objects with the min, max, and avg as properties for each city
const seattle = {
    min: 23,
    max: 65,
    avg: 6.3,
    location: 'Seattle',
    hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
    customersPerHour: function() {
        console.log(this.max);
        console.log(this.min);
        return getRandom(this.max, this.min);
    },
    cookiesPerHour:[],
    getCookies: function() {
        for(let i = 0; i < this.hoursOfOperation.length; i++) {
        //console.log('this.avg', this.avg)
        //console.log('this.customerperhour()', this.customersPerHour());
            this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
        }
        return this.cookiesPerHour;
    }
    
}

// calls each function so array of cookies is put into an array. If the function isn't called it'll be undefined.
seattle.getCookies();

//object definition for each location
    
    
  const tokyo = {
        min: 3,
        max: 24,
        avg: 1.2,
        hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
        customersPerHour: function() {
            return getRandom(this.max, this.min);
        },
        cookiesPerHour: [],
        getCookies: function() {
            for(let i = 0; i < this.hoursOfOperation.length; i++) {
                console.log('this.avg', this.avg)
                console.log('this.customersperhour()', this.customersPerHour());
                let cookies = Math.ceil(this.avg * this.customersPerHour())
            }
            return this.cookiesPerHour;
        }
        
    }

    // call tokyo function
    tokyo.getCookies();

    const dubai = {
        min:11,
        max:38,
        avg:3.7,
        hoursOfOperation:["6am","7am","8am","9am","10am","11am","12am","1pm","2pm","3pm","4pm","5pm","6pm","7pm"],
        customersPerHour: function() {
            return getRandom(this.max, this.min)
        },
        cookiesPerHour:[],
        getCookies: function() {
            for (i = 0; i < this.hoursOfOperation.length; i++) {
            console.log("this.avg", this.avg)
            console.log("this.customersperhour()", this.customersPerHour())
            let cookies = Math.ceil(this.avg * this.customersPerHour())
            this.cookiesPerHour.push(cookies)
            }
             return this.cookiesPerHour
        }
    }
    // call for dubai function
    dubai.getCookies();

    const paris = {
        min:20,
        max:38,
        avg:2.3,
        hoursOfOperation:["6am","7am","8am","9am","10am","11am","12am","1pm","2pm","3pm","4pm","5pm","6pm","7pm"],
        customersPerHour: function() {
            return getRandom(this.max, this.min)
        },
        cookiesPerHour:[],
        getCookies: function() {
            for (i = 0; i < this.hoursOfOperation.length; i++) {
            console.log("this.avg", this.avg)
            console.log("this.customersperhour()", this.customersPerHour())
            let cookies = Math.ceil(this.avg * this.customersPerHour())
            this.cookiesPerHour.push(cookies)
            }
             return this.cookiesPerHour
        }
    }
    // call for paris function
    paris.getCookies();

    const lima = {
        min:2,
        max:16,
        avg:4.6,
        hoursOfOperation:["6am","7am","8am","9am","10am","11am","12am","1pm","2pm","3pm","4pm","5pm","6pm","7pm"],
        customersPerHour: function() {
            return getRandom(this.max, this.min)
        },
        cookiesPerHour:[],
        getCookies: function() {
            for (i = 0; i < this.hoursOfOperation.length; i++) {
            console.log("this.avg", this.avg)
            console.log("this.customersperhour()", this.customersPerHour())
            let cookies = Math.ceil(this.avg * this.customersPerHour())
            this.cookiesPerHour.push(cookies)
            }
             return this.cookiesPerHour
        }
    }
    // call for lima function
    lima.getCookies();

    let hoursArray = document.querySelector('.ouptut')
    for (let i = 0; i < seattle.hoursOfOperation.length; i++){
        let variable = document.createElement("li");
        variable.innerHTML = `${seattle.hoursOfOperation[i]}: ${seattle.cookiesperhour[i]}: cookies`;
        hoursArray.append(variable);
    }