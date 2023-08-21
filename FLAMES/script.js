let container=document.getElementsByClassName("container")[0];
let button=document.getElementsByClassName("generate")[0];
let firstname=document.getElementById("Firstname");
let secondname=document.getElementById("Secondname");

button.addEventListener('click',()=>{
    
    let fname= firstname.value;
    let sname= secondname.value;
    if(fname.length==0 || sname.length==0)
    {
        alert("please enter correctly");
    
    }
    else{
    container.classList.add("background-img");
    let i=0;
    let j=0;
    let count=fname.length+sname.length;
    let arr={};
    for(i=0;i<fname.length;i++)
    {
        if(arr[fname]===undefined)
            arr[fname[i]]=1;
        else{
        arr[fname[i]]++;
        }
    }
    for (let value of sname){
        if(arr[value]!=undefined)
        {
            arr[value]--;
            count-=2;
            if(arr[value]==0)
                arr[value]=undefined;
        }
    }
    setTimeout(()=>{
        let h=document.createElement("h3");
        h.innerHTML="Waiting your flame is generated....";
        h.style.textAlign="center";
        document.body.append(h);
    },1000);
    setTimeout(()=>{
        let h=document.createElement("h3");
        h.innerHTML="your flame is generated....";
        h.style.textAlign="center";
        document.body.append(h);
    },3000);
    setTimeout(() => {
        let temp=0;
    let newarr=[false,false,false,false,false,false];
    let leftover=6;
    while(leftover!=1)
    {
    for(j=0;j<6;j++)
    {
        if(newarr[j]==false)
            temp++;
        if(temp==count)
        {
            newarr[j]=true;
            leftover--;
            temp=0;
            break;
        }
    }
}
let h=document.createElement("h3");
for(let x in newarr)
{
    if(newarr[x]==false && x==0)
    {
        h.innerHTML="hey you both are friends"
        break;
    }
    else if(newarr[x]==false && x==1)
    {
        h.innerHTML="hey you both love each other"
        break;
    }
    else if(newarr[x]==false && x==2)
    {
        h.innerHTML="hey you both have attraction"
        break;
    }
    else if(newarr[x]==false && x==3)
    {
        h.innerHTML="hey you both will get marry "
        break;
    }
    else if(newarr[x]==false && x==4)
    {
        h.innerHTML="hoo.you both are enemies";
        break;
    }
    else if(newarr[x]==false && x==5)
    {
        h.innerHTML="Hey you both are siblings";
        break;
    }
}
h.style.textAlign="center";
document.body.append(h);    
    }, 5000);
    
}
  
})