let input=document.querySelectorAll("input"),
            result= document.querySelector(".result"),
            alertt=document.querySelector(".alert"),
            button=document.querySelector("button");

            button.addEventListener("click",ok);

            function ok(){
                alertt.innerHTML="";
                var html="<table class='table'>";
                for(var a=1; a <= input[0].value;a++){
                    html +="<tr>";
                        for(j=1;j<=input[1].value; j++){
                                    html +=`<td>${a*j}</td>`;
                            }
                        html +="</tr>";
                        }
                        html +="</table>";
                        result.innerHTML=html;
                }
                