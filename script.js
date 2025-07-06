
const menu = {
  "Promo": [
    { name: "爆醬麻糬窩夫", price: 7.99 },
    { name: "招牌梳乎厘班戟", price: 8.49 }
  ],
  "All-Day Lunch": [
    { name: "照燒雞扒飯", price: 11.99 },
    { name: "吉列豬扒意粉", price: 10.99 }
  ],
  "Snacks": [
    { name: "炸雞翼", price: 6.50 },
    { name: "薯條", price: 4.50 }
  ],
  "Pillows & Mochi": [
    { name: "宇治金時麻糬", price: 6.99 },
    { name: "芒果糯米糍", price: 6.99 }
  ],
  "Cha Chaan Teng": [
    { name: "香滑奶茶", price: 3.99 },
    { name: "西多士", price: 5.50 }
  ],
  "Classics": [
    { name: "楓糖班戟", price: 7.99 },
    { name: "港式炒麵", price: 9.50 }
  ],
  "Mango": [
    { name: "芒果布甸", price: 5.99 },
    { name: "楊枝甘露", price: 6.99 }
  ]
};

let order = [];

function filterCategory(category) {
  const list = document.getElementById("item-list");
  list.innerHTML = "";
  menu[category].forEach(item => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerText = `${item.name}\n$${item.price.toFixed(2)}`;
    div.onclick = () => addToOrder(item);
    list.appendChild(div);
  });
}

function addToOrder(item) {
  order.push(item);
  updateOrder();
}

function updateOrder() {
  const list = document.getElementById("order-list");
  const total = document.getElementById("total");
  list.innerHTML = "";
  let sum = 0;
  order.forEach(item => {
    const li = document.createElement("li");
    li.innerText = `${item.name} - $${item.price.toFixed(2)}`;
    list.appendChild(li);
    sum += item.price;
  });
  total.innerText = sum.toFixed(2);
}

function clearOrder() {
  order = [];
  updateOrder();
}

// Default view
filterCategory("Promo");
