async function getProduct(id){
    const response=fetch('https://fakestoreapi.com/products/'+id)
    .then(res=>res.json())
    return response
}
async function main(){
  for(let i=1;i<=12;i++){
    let product =await getProduct(i)
    console.log(product)
    let productDiv=document.createElement("div")
    productDiv.classList.add("productDiv")
    let div1=document.createElement("div") 
    div1.classList.add("div1")
    let category=document.createElement("p")
    category.classList.add("category")
    category.innerHTML=product.category
    let CartImage=document.createElement("img")
    CartImage.classList.add("cartImg")
    CartImage.setAttribute("src","https://res.cloudinary.com/dtrvdcebd/image/upload/v1708266043/Clothy/q1pbhfwzuy1u8xqq6cbd.png")
    let productImg=document.createElement("img")
    productImg.classList.add("productImg")
    productImg.setAttribute("src",product.image)
    let productName=document.createElement("p")
    productName.classList.add("productName")
    productName.innerHTML=product.title.split(' ').slice(0, 4).join(' ')
    let ligne=document.createElement("hr")
    let div2=document.createElement("div") 
    div2.classList.add("div2")
    let productPrix=document.createElement("p")
    productPrix.classList.add("productPrix")
    productPrix.innerHTML="$"+product.price
    let stars=document.createElement("img")
    stars.classList.add("stars")
    stars.setAttribute("src","https://res.cloudinary.com/dtrvdcebd/image/upload/v1708266043/Clothy/uhlym2mrhob6aoklzd0h.png")


    const section=document.getElementById("section")
    section.appendChild(productDiv)
    productDiv.appendChild(div1)
    productDiv.appendChild(productImg)
    productDiv.appendChild(productName)
    productDiv.appendChild(ligne)
    productDiv.appendChild(div2)
    div1.appendChild(category)
    div1.appendChild(CartImage)
    div2.appendChild(productPrix)
    div2.appendChild(stars)

    productDiv.addEventListener('click', function() {
        window.location.href = (`page2.html`);
  })
  
}}

main()