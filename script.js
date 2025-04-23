function showSidebar() {
    const sidebar = document.querySelector('.hamburgur_list')
    if (sidebar.style.display === "none") {
        sidebar.style.display = "flex"
    }
    else {
        sidebar.style.display = "none"
    }
}

const card = document.getElementById("api_fetch")
        async function fetchData() {
            try {
                let rawData = await fetch("https://fakestoreapi.com/products")

                if (!rawData.ok) {
                    throw new Error("Fetch failed")
                }
                let data = await rawData.json()

                const dataForDiv = data.map((item) => {
                    return `<div class=" card_container">
                    <div class=" img_card">
                        <img src="${item.image}" alt="dog_wearing_cloth">
                    </div>
                    <div class="text_section">
                        <div class="product_id">ID: ${item.id}</div>
                        <div class="hoodie_txt txt">${item.title}</div>
                        <div class="price">$:${item.price}</div>
                        <span class="category">${item.category}</span>
                        <p class="description">${item.description}</p>
                    </div>
                    <div class="card_love_btn_wrapper">
                        <div class="cart_btn">ADD TO CART</div>
                        <div class="love_react_btn">
                            <i class="fa-regular fa-heart"></i>
                        </div>
                    </div>
                </div>`
                     

                })
                card.innerHTML = dataForDiv.join("")
            } catch (error) {
                console.log(error)
            }

        }
        fetchData()