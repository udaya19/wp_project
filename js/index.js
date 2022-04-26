const btn = document.querySelector(".btn-read-more");
let text = document.querySelector(".moreText");
btn.addEventListener('click',()=>{
    if(btn.innerText == 'Read More'){
        btn.innerText = 'Read Less';
        text.style.visibility="visible";
    }
    else{
        btn.innerText = 'Read More';
        text.style.visibility="hidden";
    }
})

function toggle(){
    let blur  = document.querySelector(".blur");
    blur.classList.toggle('active');
    let popup = document.querySelector(".popup");
    popup.classList.toggle('active');
}

function toggle1(){
    // let blur = document.getElementById("blur");
    // blur.classList.toggle('active');
    // let popup = document.getElementById("popup");
    // popup.classList.toggle('active');

    let blur  = document.querySelector(".blur");
    blur.classList.toggle('active');
    let popup1 = document.querySelector(".popup1");
    popup1.classList.toggle('active');
}


/*Cost calculation*/
var count,totalcost,cost;
    document.querySelector(".plus").addEventListener("click",function(){
        count = document.getElementById("quantity").value;
        count++;
        document.getElementById("quantity").value = count;
        // function calcPrice(){
        //     document.getElementById("cost").textContent = `${200*count}/-`;
        // }
        // calcPrice()
        document.getElementById("cost").textContent = `${200*count}/-`;
    })
    document.querySelector(".minus").addEventListener("click",function(){
        count = document.getElementById("quantity").value;
        count--;
        if(count>0){
            document.getElementById("quantity").value = count;
            // function calcPrice(){
            //     document.getElementById("cost").textContent = `${200*count}/-`;
            // }
            // calcPrice()
            document.getElementById("cost").textContent = `${200*count}/-`;
        }
        else{
            alert("Count cannot be less than 1");
        }
    })

