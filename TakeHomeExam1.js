// Link to js.do:       https://js.do/Dnoel26/js_take_home_exam_1

// Edit your script here

//Employee Data Variables---

let employee_number, employee_first_name, employee_last_name, employee_full_name, hours_worked, employee_type_code, employee_type;

//Lecturer Only Variables---

let lecturer_qualification_code, lecturer_hourly_rate, lecturer_monthly_allowance; 

//Regular Workers---

let fixed_monthly_salary, prorated_monthly_salary, regular_worker_hourly_rate, monthly_overtime;

//Payslip Variables---

let income_tax, health_surcharge, gross_monthly_salary, deductions, net_monthly_salary, payslip;

employee_number = prompt("Please enter a valid employee number");

employee_first_name = prompt("Please enter employee's first name");

employee_last_name = prompt("Please enter employee's surname");

employee_full_name = employee_first_name + employee_last_name;

employee_type_code = prompt("Please enter a valid employee type code \n L for Lecturer \n R for Regular worker");

if(employee_type_code == "L" || employee_type_code == "R" || employee_type_code == "l" || employee_type_code == "r")
{
	hours_worked = parseInt(prompt(`Please enter the number of hours worked this month for ${employee_full_name}`));

	if(employee_type_code == "L" || employee_type_code == "l")
    {
    	lecturer_qualification_code = prompt(`Please enter a valid lecturer qualification code for ${employee_full_name} \n B for Bachelor's Degree \n M for Master's Degree`);  
       
       	employee_type = "Lecturer";
       
        if(lecturer_qualification_code == "M" || lecturer_qualification_code == "m")
        {
        	lecturer_hourly_rate = 575;
            
            lecturer_monthly_allowance = 2500;
            
            gross_monthly_salary = (hours_worked * lecturer_hourly_rate) + lecturer_monthly_allowance;
            
            if(gross_monthly_salary > 499.99)
            {
               	health_surcharge = 33.00;
            }
                
          	if(gross_monthly_salary > 0 && gross_monthly_salary <= 499.99)
            {
           		health_surcharge = 19.20; 	
           	}
            
            if(gross_monthly_salary > 5000)
            {
            	income_tax = (25 / 100) * (gross_monthly_salary - 5000);
            }
            
            if(gross_monthly_salary <= 5000)
            {
            	income_tax = 0;
            }
            
            deductions = health_surcharge + income_tax;
            
            net_monthly_salary = gross_monthly_salary - deductions;
            
            confirm(`Press OK to print pay slip with the following information: \n Employee number: ${employee_number} \n Employee name: ${employee_full_name} \n Employee type: ${employee_type} \n Employee Gross Salary: ${gross_monthly_salary} \n Employee Deductions: ${deductions} \n Employee Net Salary: ${net_monthly_salary}`);
        }
        
        else if(lecturer_qualification_code == "B" || lecturer_qualification_code == "b")
        {
        	lecturer_hourly_rate = 325;
            
            lecturer_monthly_allowance = 1250;
            
            gross_monthly_salary = (hours_worked * lecturer_hourly_rate) + lecturer_monthly_allowance;
            
            if(gross_monthly_salary > 499.99)
            {
               	health_surcharge = 33.00;
            }
                
          	if(gross_monthly_salary > 0 && gross_monthly_salary <= 499.99)
            {
           		health_surcharge = 19.20; 	
           	}
            
            if(gross_monthly_salary > 5000)
            {
            	income_tax = (25 / 100) * (gross_monthly_salary - 5000);
            }
            
            if(gross_monthly_salary <= 5000)
            {
            	income_tax = 0;
            }
            
            deductions = health_surcharge + income_tax;
            
            net_monthly_salary = gross_monthly_salary - deductions;
            
            confirm(`Press OK to print pay slip with the following information: \n Employee number: ${employee_number} \n Employee name: ${employee_full_name} \n Employee type: ${employee_type} \n Employee Gross Salary: ${gross_monthly_salary} \n Employee Deductions: ${deductions} \n Employee Net Salary: ${net_monthly_salary}`);
        }
        
        else
        {
        	alert(`Sorry, ${lecturer_qualification_code} is not a valid qualification code`);
        }
    }
    
    if(employee_type_code == "R" || employee_type_code == "r")
    {
    	fixed_monthly_salary = parseFloat(prompt(`Please enter the fixed monthly salary at 160 work hours for ${employee_full_name}`)).toFixed(2);
        
        employee_type = "Regular Worker";
        
        regular_worker_hourly_rate = fixed_monthly_salary / 160;
        
        if(hours_worked >= 0 && hours_worked < 160)
        {
        	prorated_monthly_salary = regular_worker_hourly_rate * hours_worked;
            
            gross_monthly_salary = prorated_monthly_salary;
        }
        
        else if(hours_worked >= 160)
        {           
            overtime = (hours_worked - 160) * (regular_worker_hourly_rate) * 2;
            
            gross_monthly_salary = (hours_worked * regular_worker_hourly_rate) + overtime;
        }
                                
        if(gross_monthly_salary > 499.99)
        {
         	health_surcharge = 33.00;
        }
                
        if(gross_monthly_salary > 0 && gross_monthly_salary < 500)
        {
          	health_surcharge = 19.20; 	
        }
            
        if(gross_monthly_salary > 5000)
        {
            income_tax = (25 / 100) * (gross_monthly_salary - 5000);
        }
            
        if(gross_monthly_salary <= 5000)
        {
         	income_tax = 0;
        }
            
        deductions = health_surcharge + income_tax;
            
        net_monthly_salary = gross_monthly_salary - deductions;
            
        confirm(`Press OK to print pay slip with the following information: \n Employee number: ${employee_number} \n Employee name: ${employee_full_name} \n Employee type: ${employee_type} \n Employee Gross Salary: ${gross_monthly_salary} \n Employee Deductions: ${deductions} \n Employee Net Salary: ${net_monthly_salary}`);
  	}
}

else

alert(`Sorry, employee type code ${employee_type_code} is invalid. Program terminated.`);







