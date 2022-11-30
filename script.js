
let input=document.querySelector("input")
let clearbutton=document.querySelector("button")

let body = document.querySelector("body");

let table = document.createElement("table");
let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");
    let headRow = document.createElement("tr");
    let companyName = document.createElement("th");
    let contactName = document.createElement("th");
    let Country = document.createElement("th");
    
    companyName.innerText = "Company Name";
    contactName.innerText = "Contact Name";
    Country.innerText = "Country";
    headRow.appendChild(companyName);
    headRow.appendChild(contactName);
    headRow.appendChild(Country);
    
    table.appendChild(headRow);
    table.appendChild(tbody);
    body.appendChild(table);
    table.setAttribute("border", "1px")
    fetch("https://northwind.vercel.app/api/suppliers")
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            createRow(data[i]);
            
        }
    
    })
    
    function createRow(element) {
        let row = document.createElement("tr");
        let companyName = document.createElement("td");
        let contactName = document.createElement("td");
        let Country = document.createElement("td");
        
        companyName.innerText = element.companyName
        contactName.innerText = element.contactName
        Country.innerText = element.address.country
        
        row.appendChild(companyName);
        row.appendChild(contactName);
        row.appendChild(Country);
        
        
        tbody.appendChild(row);
    }

    
    input.addEventListener("input", (e) => {
   
        let value = e.target.value
        if (value && value.trim().length > 0){
         
             value = value.trim().toLowerCase()
            
        } else {
         
    
        }
    
    })
    










// let body=document.querySelector("body");
// let inputtext=document.createElement("input");
// let inputdate=document.createElement("input");
// let checkbox=document.createElement("input");
// let textarea=document.createElement("textarea");
// let btn=document.createElement("button")

// body.appendChild(inputtext)
// body.appendChild(inputdate)
// body.appendChild(checkbox)
// body.appendChild(textarea)
// body.appendChild(btn)

// inputtext.setAttribute("type", "text")
// inputtext.setAttribute("placeholder","text")

// inputdate.setAttribute("type", "date")
// inputdate.setAttribute("placeholder","date")

// checkbox.setAttribute("type", "checkbox")
// checkbox.setAttribute("checked","true")

// textarea.setAttribute("type", "text")
// textarea.setAttribute("placeholder","textarea")

// btn.setAttribute("type","button")
// btn.setAttribute("class","btn btn-primary")

// btn.innerText="Button";







