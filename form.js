    //Empty array to store objects
    var emp_array = [];
    //creating object
    var emp_properties = ["name", "age", "salary", "mnumber", "dname"];
    function Employee(name,age,salary,mnumber,dname){
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.mnumber = mnumber;
        this.dname = dname;
        
    }

    $("form").submit(function(e) {
        e.preventDefault();
    }); 


    $(document).ready(function(){
      
        $("#submit").click(function(){
            var isValid = validateForm();
            if(isValid){
         
                var name = $("#name").val();
                var age = $("#age").val();
                var salary = $("#salary").val();
                var mnumber = $("#mnumber").val();
                var dname = $("#dname").val();
              
                var emp = new Employee(name,age,salary,mnumber,dname);
                emp_array.push(emp);
                console.log(emp);
                viewData();
                $('#myForm').get(0).reset();

            }
            
        });

        function validateForm() {
            var isValid = true;
            var name = $("#name").val();
            var age = $("#age").val();
            var salary = $("#salary").val();
            var mnumber = $("#mnumber").val();
           
            var dname = $("#dname").val();
           
            if ( name ==""|| name == null ||  age ==""|| age == null ||  salary ==""|| salary == null ||  mnumber ==""|| mnumber == null ||  dname ==""|| dname == null ){
                alert("Please fill all the required fields")
                isValid= false;
            }
            
                else {
                
            }
            return isValid;
        } 



        function viewData() { 
        var table = $("<table />");
            var columnCount = emp_properties.length;
            var keys= emp_properties;
            var row = $(table[0].insertRow(-1));
            for (var index = 0; index < columnCount; index++) {
                var headerCell = $("<th />");
                headerCell.html(emp_properties[index]);
                row.append(headerCell);
            }
          
            for (var index = 0; index < emp_array.length; index++) {
                row = $(table[0].insertRow(-1));
                for (var j = 0; j < columnCount; j++) {
                    var cell = $("<td />");
                    cell.html(emp_array[index][keys[j]]);
                    row.append(cell);  
                }
              
            }
            var dvTable = $("#dvTable");
            dvTable.html("");
            dvTable.append(table);
           
        }

    
       
       
    });
