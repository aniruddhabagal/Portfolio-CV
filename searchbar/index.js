
const searchBox=document.getElementById('search-input');
const searchBtn=document.getElementById('btnSearch');

searchBox.addEventListener('keyup',()=>{
    console.log(searchBox.value);
    let data={
        value:searchBox.value
    }
    if(data.value!==''){
        let xhr=new XMLHttpRequest();
    xhr.open('POST','/search',true);
    xhr.setRequestHeader('Content-Type','application/json;charset=utf-8');
    xhr.send(JSON.stringify(data))


    let xhr1=new XMLHttpRequest();
    xhr1.open('GET','/search',true);
    xhr1.onload=function(){
        console.log(JSON.parse(this.response));
        let data=JSON.parse(this.response);
        if(typeof data!=='undefined'){
            if(data.length===0){
                let searchRes=document.getElementById('searchRes');
                    searchRes.innerHTML=""
                 let noRes=document.createElement('input');
        noRes.setAttribute('disabled','true');
        noRes.value='Not her, Try Google';
        
        searchRes.appendChild(noRes);
            }
        }
        data.forEach(row => {
            let searchRes=document.getElementById('searchRes');
            searchRes.innerHTML="";
            let noRes=document.createElement('input');
            noRes.setAttribute('disabled','true');
            
            
            data.forEach(row => {
                noRes.value=row.name;
                searchRes.appendChild(noRes);
            });
        });
    }
    xhr1.send();
    

    }else{
        let searchRes=document.getElementById('searchRes');
        searchRes.innerHTML=""
        let noRes=document.createElement('input');
        noRes.setAttribute('disabled','true');
        noRes.value='Not her, Try Google';
        
        searchRes.appendChild(noRes);
        
    }
})
