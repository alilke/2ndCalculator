$(document).ready(onReady);

console.log('test');

const listOfEmployees = [
    {
        firstName: "Angela",
        lastName: "Lilke",
        employeeId: "5637",
        title: "Project",
        annaulSalary: 50000
    }
];


function onReady(){
    listOutEmployees();
    $('#submitBtn').on('click', handleSubmit);
}

function handleSubmit(){

    console.log('hello from submit');
    let firstNameValue = $('#firstName').val();
    let lastNameValue = $('#lastName').val();
    let employeeIdValue = $('#employeeId').val();
    let titleValue = $('#title').val();
    let annaulSalaryValue = $('#annaulSalary').val();
    if(firstNameValue === ''){
        $('#firstName').addClass('error');
        alert("Please fill out the name input");
    } else if(lastNameValue === ''){
        $('#lastName').addClass('error');
        alert("Please fill out the food input");
    } else if(employeeIdValue === ''){
        $('#employeeId').addClass('error');
        alert("Please fill out the meal input"); 
    } else if(titleValue === ''){
        $('#title').addClass('error');
        alert("Please fill out the food input");
    } else if(annaulSalaryValue === ''){
        $('#annualSalary').addClass('error');
        alert("Please fill out the meal input");
    } else {
        // get rid of the border
        $("#firstName").removeClass('error');
        $("#lastName").removeClass('error');
        $("#employeeId").removeClass('error');
        $("#title").removeClass('error');
        $("#annualSalary").removeClass('error');
        
        let newObject = {
            firstName: firstNameValue,
            lastName: lastNameValue,
            employeeId: employeeIdValue,
            title: titleValue,
            annaulSalary: annaulSalaryValue
        }

        listOfEmployees.push(newObject);

        listOutEmployees();

        $('#firstName').val('');
        $('#lastName').val('');
        $('#employeeId').val('');
        $('#title').val('');
        $('#annaulSalary').val('');
    }
}


function listOutEmployees(){
    $('#listEmployees').empty();
    for(person of listOfEmployees){
        let $li = $(
            `<li data-cohort="Porta">
                ${person.firstName}
                ${person.lastName}
                ${person.employeeId}
                ${person.title}
                ${person.annaulSalary}
                <button class="getLastName">${person.lastName}</button>
            </li>
        `)

        $li.data('employeeId', person.employeeId);

        $('#listEmployees').append($li);
    };
    $(".getLastName").on('click', handleClick);
}

function handleClick(){
    let favFood = $(this).parent().data();
    console.log('this is a secret favorite food: ',  favFood);
    $(this).toggleClass('yellow');
}

