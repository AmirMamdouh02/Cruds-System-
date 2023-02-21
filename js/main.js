// Group of variables
var productName =document.getElementById("productName")
var productPrice =document.getElementById("productPrice")
var productCateg =document.getElementById("productCateg")
var productDescription =document.getElementById("productDescription")
var productCount =document.getElementById("productCount")
// line  8 , 9 to check the edit  
var mood = true
var temp =-1

var productContainer= [] //the global array
function addproduct(){
    document.getElementById("submit").innerHTML="Add Product"
    var product ={
        name:productName.value,
        price:productPrice.value,
        categ:productCateg.value,
        desc:productDescription.value,
        count:productCount.value
    }

    if (temp >-1) {
        productContainer[temp] =product
        temp=-1
    }
    else if(product.count >1){
        //for no# of count
        for (let i = 0; i < product.count; i++) {
            productContainer.push(product)
            
        }   
        
    }
    else{
        
        productContainer.push(product)
        
    }
    
    displayproduct()
    clearvalue()
    
}

function displayproduct(){
    
    var productdata=""
    for (let i = 0; i < productContainer.length; i++) {
        productdata+=`
        <tr>
            <td>${i+1}</td>
            <td>${productContainer[i].name}</td>
            <td>${productContainer[i].price}</td>
            <td>${productContainer[i].categ}</td>
            <td>${productContainer[i].desc}</td>
            <td><button onclick="edit_btn(${i})" class="btn btn-warning">Edit</button></td>
            <td><button onclick="clear_btn(${i})" class="btn btn-danger">Delete</button></td>
        </tr>`
        }
    document.getElementById("t_body").innerHTML=productdata
    total_price()
}

function clear_btn(i){

    productContainer.splice(i,1)
    displayproduct()
    
}
function total_price(){
    var total = 0;
    var dataContainer1=""
    for (let i = 0; i < productContainer.length; i++) {
        total += Number(productContainer[i].price)
    }
    dataContainer1+=`
    <th colspan="2">total</th>
    <td colspan="5">${total}</td>
    `    
    document.getElementById("t_foot").innerHTML=dataContainer1
}
function edit_btn(i){
    productName.value=productContainer[i].name
    productPrice.value=productContainer[i].price
    productCateg.value=productContainer[i].categ
    productDescription.value=productContainer[i].desc
    temp = i 
    mood =false
    submit.innerHTML="Update"
    
}

function deleteall(){
    productContainer.splice(0)
    document.getElementById("t_foot").style.display = "none"
    displayproduct()
}

function clearvalue(){
        // to clear inputs after add product
    productName.value=""
    productPrice.value=""
    productCateg.value=""
    productDescription.value=""
    productCount.value=""
}
function search (term){
    var productdata2=""
    for (let i = 0; i < productContainer.length; i++) {
        if(productContainer[i].name.toLowerCase().includes(term.toLowerCase().trim())){
            productdata2+=`
            <tr>
                <td>${i+1}</td>
                <td>${productContainer[i].name}</td>
                <td>${productContainer[i].price}</td>
                <td>${productContainer[i].categ}</td>
                <td>${productContainer[i].desc}</td>
                <td><button onclick="edit_btn(${i})" class="btn btn-warning">Edit</button></td>
                <td><button onclick="clear_btn(${i})" class="btn btn-danger">Delete</button></td>
            </tr>`
        }
       
       
    }
    document.getElementById("t_body").innerHTML=productdata2
}




























