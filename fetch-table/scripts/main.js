import {getAll,remove} from "./db.js";

const table = document.getElementById("tables");

const generateTable =(tableRows =[])=>{
    
    const keys = Object.keys(tableRows[0]);


    const thead = document.createElement('thead');
    table.appendChild(thead);

    const tr = document.createElement("tr");
    thead.appendChild(tr);
    keys.forEach(k=>{
        const th = document.createElement("th");
        tr.appendChild(th);
        th.innerText = k;
    });

    const tbody = document.createElement("tbody");
    table.appendChild(tbody);
    tableRows.forEach(row =>{
        const tr = document.createElement("tr");
        tbody.appendChild(tr);

        keys.forEach(k=>{
            const td = document.createElement("td");
            tr.appendChild(td);
            td.innerText = row[k];
        });
        const td = document.createElement("td");
        tr.appendChild(td);
        const btnGroup = document.createElement("div");
        btnGroup.classList.add("btn-group");

        td.appendChild(btnGroup);
        const edit = document.createElement("button");
        btnGroup.appendChild(edit);
        edit.innerHTML = '<i class="fa fa-pencil"></i>';
        edit.classList.add("btn", "btn-info");
        edit.addEventListener("click", ()=>{
            alert(JSON.stringify(row));
        });

        
        td.appendChild(btnGroup);
        const deleteBtn = document.createElement("button");
        btnGroup.appendChild(deleteBtn);
        deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';
        deleteBtn.classList.add("btn", "btn-danger");
        deleteBtn.addEventListener("click",async ()=>{
            //alert(JSON.stringify(row));
            if(confirm("Biztos hogy törli a sort?")){
                await remove(row.id);
                tr.parentElement.removeChild(tr);
                alert("Törlés sikeres!");
                
            }
        });
    });

    const th = document.createElement("th");
    tr.appendChild(th);
    th.innerText = "actions";

};

getAll().then(data=> generateTable(data));