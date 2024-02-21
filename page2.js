async function getProduct(id){
    const response=await fetch('https://fakestoreapi.com/products/' + id)
    // .then(res=>res.json())
    const product=await response.json()
    return product
}

async function main(){
    let productId=localStorage.getItem("selectedProductId")
    let product =await getProduct(productId)
    console.log(product)

    let categoryDiv=document.createElement("div")
    categoryDiv.classList.add("categoryDiv")
    let category=document.createElement("p")
    category.classList.add("category")
    category.innerHTML=product.category
    let productImg=document.createElement("img")
    productImg.classList.add("productImg")
    productImg.setAttribute("src",product.image)
    let div=document.createElement("div")
    div.classList.add("div")
    let div1 =document.createElement("div")
    div1.classList.add("div1")
    let productName=document.createElement("p")
    productName.classList.add("productName")
    productName.innerHTML=product.title
    let stars=document.createElement("img")
    stars.classList.add("stars")
    stars.setAttribute("src","https://res.cloudinary.com/dtrvdcebd/image/upload/v1708266043/Clothy/uhlym2mrhob6aoklzd0h.png")
    let productPrix=document.createElement("p")
    productPrix.classList.add("productPrix")
    productPrix.innerHTML="$"+product.price
    let productDescription=document.createElement("p")
    productDescription.classList.add("description")
    productDescription.innerHTML=product.description
    let form=document.createElement("form")
    form.classList.add("form")
    let quantity=document.createElement("label")
    quantity.classList.add("quantity")
    quantity.innerHTML="Quantity: "
    let inputNum=document.createElement("input")
    inputNum.classList.add("num")
    inputNum.setAttribute("type","number")
    inputNum.setAttribute("value",1)
    let inputButton1=document.createElement("input")
    inputButton1.classList.add("button1")
    inputButton1.setAttribute("type","button")
    inputButton1.setAttribute("value","Add To Cart +")
    let div2=document.createElement("div")
    div2.classList.add("div2")
    let div3=document.createElement("div")
    div3.classList.add("div3")
    let inputButton2=document.createElement("input")
    inputButton2.classList.add("button2")
    inputButton2.setAttribute("type","button")
    inputButton2.setAttribute("value","Product Description")
    let inputButton3=document.createElement("input")
    inputButton3.classList.add("button3")
    inputButton3.setAttribute("type","button")
    inputButton3.setAttribute("value","Additional Info")
    let parDes=document.createElement("p")
    parDes.classList.add("paragraph")
    parDes.innerHTML=product.description


    const section=document.getElementById("section")
    
    section.appendChild(div)
    section.appendChild(div3)
    div.appendChild(categoryDiv)
    div.appendChild(div1)
    categoryDiv.appendChild(category)
    categoryDiv.appendChild(productImg)
    div1.appendChild(productName)
    div1.appendChild(stars)
    div1.appendChild(productPrix)
    div1.appendChild(productDescription)
    div1.appendChild(div2)
    div2.appendChild(quantity)
    div2.appendChild(inputNum)
    div2.appendChild(inputButton1)
    div3.appendChild(inputButton2)
    div3.appendChild(inputButton3)
    div3.appendChild(parDes)






}


main()