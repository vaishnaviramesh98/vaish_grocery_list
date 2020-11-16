// function ajax(){

    //creating an Xhr oject
    var xhttp =new XMLHttpRequest();
    // event listener
    xhttp.onreadystatechange=function(){
        // condition
        if(this.readyState==4&&this.status==200){
        
            var response=JSON.parse(this.responseText);
           var Jpeople=response.grocery;
            var output="";
            output+= "<th>"+ "Sl.no  " +"</th>";
            output += "<th>"+ "Name  " +"</th>";
            output += "<th>"+ "Quantity  " +"</th>";
            output += "<th>"+ "Unit  " +"</th>";
            output += "<th>"+ "Department  " +"</th>";
            output += "<th>"+ "Notes   " +"</th>";
            output+="</tr>";
            
            for(var i=0;i<Jpeople.length;i++){
               
                output+="<tr>";
                
                output += "<td>"+ Jpeople[i].slno +"</td>";
                output += "<td>"+ Jpeople[i].name +"</td>";
                output += "<td>"+ Jpeople[i].quantity +"</td>";
                output += "<td>"+ Jpeople[i].unit +"</td>";
                output += "<td>"+ Jpeople[i].department +"</td>";
                output += "<td>"+ Jpeople[i].notes +"</td>\n";
                output+="</tr>";
                
            }
        
            document.getElementById("demo").innerHTML=output;
        }
    }
    xhttp.open("GET","grocery.json",true);
    xhttp.send();
        
    // }
    