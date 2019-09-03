$( document ).ready( readyNow );

// The application should have an input form that collects _employee first name, last name, ID number, job title, annual salary_.

// A 'Submit' button should collect the form information, store the information to calculate monthly costs, 
//append information to the DOM and clear the input fields. Using the stored information, calculate monthly 
//costs and append this to the to DOM. If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.

// Create a delete button that removes an employee from the DOM. For Base mode, it does **not** need to remove 
//that Employee's salary from the reported total.
const yearlyBudget = 240000;
const monthlyBudget =  20000;
let employees = [];
const totalYear = 0;
const totalMonth = 0;

function addEmployee() {
  console.log('in addPurchase');
  let firstNameValue = $('#employeeNameIn').val();
    let lastNameValue = $('#lastName').val();
    let employeeIdValue = $('#employeeId').val();
    let titleValue = $('#title').val();
    let annaulSalaryValue = $('#yearlySalaryIn').val();
    if(firstNameValue === ''){
        $('#employeeNameIn').addClass('error');
        alert("Please fill out the first name input");
    } else if(lastNameValue === ''){
        $('#lastName').addClass('error');
        alert("Please fill out the last name input");
    } else if(employeeIdValue === ''){
        $('#employeeId').addClass('error');
        alert("Please fill out the ID input"); 
    } else if(titleValue === ''){
        $('#title').addClass('error');
        alert("Please fill out the title input");
    } else if(annaulSalaryValue === ''){
        $('#yearlySalaryIn').addClass('error');
        alert("Please fill out the salary input");
    } else {
        // get rid of the border
        $("#employeeNameIn").removeClass('error');
        $("#lastName").removeClass('error');
        $("#employeeId").removeClass('error');
        $("#title").removeClass('error');
        $("#yearlySalaryIn").removeClass('error');
        
        let newObject = {
            employeeNameIn: firstNameValue,
            lastName: lastNameValue,
            employeeId: employeeIdValue,
            title: titleValue,
            yearlySalaryIn: annaulSalaryValue
        }

        employees.push(newObject);
  calculateRemainingYearlyBudget();
  // employeeOut();
  employeeOut2();

  $('#employeeNameIn').val('');
  $('#lastName').val('');
  $('#employeeId').val('');
  $('#title').val('');
  $('#yearlySalaryIn').val('');
      }



}//end addPurchase

function calculateRemainingYearlyBudget(){
  console.log('in calculateRemainingYearlyBudget');
  // loop through purchases Array
  let totalYearlySalary = 0;
  for( let i = 0; i< employees.length; i++){
    // for each purchase, add up total of all prices
    // subtract totalYearlySalary from budget for REMAININGBUDGET
    totalYearlySalary += Number( employees[i].yearlySalaryIn );
  }
  console.log( 'totalYearlySalary:', totalYearlySalary );
  // display REMAININGBUDGET
  const remainingYearlyBudget = yearlyBudget - totalYearlySalary;
  console.log('remaining yearly:',remainingYearlyBudget);
  let el = $('#remainingYearlyBudgetOut');
  let fi = $('#remainingMonthlyBudgetOut');
  let ts = $('#totalYearlySalaryOut');
  let tm = $('#totalMonthlySalary');
  el.empty();
  el.append( remainingYearlyBudget );  
  const remainingMonthlyBudget = remainingYearlyBudget/12;
  fi.empty();
  fi.append(remainingMonthlyBudget);
  console.log('in RemainingMonthlyBudget', remainingMonthlyBudget);  
  ts.empty();
  ts.append(totalYearlySalary);
  const totalMonthlySalary = totalYearlySalary/12;
  tm.empty();
  tm.append(totalMonthlySalary);
  if (totalMonthlySalary > monthlyBudget ){
    $('#totalMonthlySalary').addClass('errors');
  }else{
    return console.log('no');
  } 
}

// function employeeOut(){
//   $('#employeeOut').empty();
//   for(employee of employees){
//       let $li = $(
//           `<ul data-cohort="Porta">
//               ${employee.employeeNameIn}
//               ${employee.lastName}
//               ${employee.employeeId}
//               ${employee.title}
//               ${employee.yearlySalaryIn}
//               <button class="getLastName">${employee.lastName}</button>
//           </ul>
//       `)

//       $li.data('employeeId', employee.employeeId);

//       $('#employeeOut').append($li);
//   };
//   $(".getLastName").on('click', handleClick);
// }

function employeeOut2(){
  $('#employeeOut2').empty();
  for(employee of employees){
    

      let $li = $(
          `<div id="tablez"><table><tbody><td id="FN">${employee.employeeNameIn}</td>
          <td id="LN">${employee.lastName}</td><td id="ID">${employee.employeeId}</td><td id="T">${employee.title}</td><td id="YS">${employee.yearlySalaryIn}</td>
              <td id="DB"><button class="getLastName">Delete</button></td></tbody></table></div>
          
      `)

      $li.data('employeeId', employee.employeeId);

      $('#employeeOut2').append($li);
  };
  $(".getLastName").on('click', handleClick);
}










function readyNow(){
  //display budget
  //target budgetOut by id
  let el = $('#remainingYearlyBudgetOut');
  el.empty();
  el.append(yearlyBudget);
  //handle click event
  $( '#addEmployeeButton').on( 'click', addEmployee);
  calculateRemainingYearlyBudget();
}//end readyNow

function handleClick(){

  $("#tablez").remove();
}











