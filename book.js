    var count,totalcost,cost;
    document.querySelector(".plus").addEventListener("click",function(){
        count = document.getElementById("quantity").value;
        count++;
        document.getElementById("quantity").value = count;
        function calcPrice(){
            document.getElementById("cost").innerHTML = `${200*count}/-`;
        }
        calcPrice()
    })
    document.querySelector(".minus").addEventListener("click",function(){
        count = document.getElementById("quantity").value;
        count--;
        if(count>0){
            document.getElementById("quantity").value = count;
            function calcPrice(){
                document.getElementById("cost").innerHTML = `${200*count}/-`;
            }
            calcPrice()
        }
        else{
            alert("Count cannot be less than 1");
        }
    })



