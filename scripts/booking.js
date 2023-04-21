/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

const week_day = document.querySelectorAll('.day');
const calculated_cost = document.getElementById("calculated-cost");
let total = 0;

week_day.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('clicked');
    total = calculate_total_cost();
    calculated_cost.innerHTML = total;
  });
});

function getSelectedDays() {
    let days = 0;
    for (let i = 0; i < week_day.length; i++) {
      if (week_day[i].classList.contains('clicked')) {
        days++;
      }
    }
    return days;
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

const clear_days = document.getElementById("clear-button");
clear_days.addEventListener('click', () => {
    calculated_cost.innerHTML = 0;
    week_day.forEach(item => {
        item.classList.remove("clicked");
      });
});



/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

const halfSpan = document.getElementById('half');

halfSpan.addEventListener('click', () => {
    halfSpan.classList.add('clicked');
    fullSpan.classList.remove('clicked');
    total = calculate_total_cost();
    calculated_cost.innerHTML = total;
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

const fullSpan = document.getElementById('full');

fullSpan.addEventListener('click', () => {
    fullSpan.classList.add('clicked');
    halfSpan.classList.remove('clicked');
    total = calculate_total_cost();
    calculated_cost.innerHTML = total;
});

function getSelectedTime() {
    if (fullSpan.classList.contains("clicked")) {
      return "full";
    } else if (halfSpan.classList.contains("clicked")) {
      return "half";
    }
  }

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate_total_cost(){
    let total_cost = 0;
    let days = getSelectedDays();
    if(getSelectedTime() == "full") {
        total_cost = days * 35;
    } else {
        total_cost = days * 20;
    } 
    return total_cost;
  }