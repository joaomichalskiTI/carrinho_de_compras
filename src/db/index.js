import img from "../assets/cartBlack.png"

const columns = [
    { title: "Produto", dataIndex: "produto", key: "produto" },
    { title: "Valor ", dataIndex: "Valor", key: "Valor" },
    { title: "Quantidade ", dataIndex: "quantidade", key: "quantidade" },
    { title: "", dataIndex: "actions", key: "actions" },
];

let cart = [
    {
        id: "1",
        name: "Caixa",
        value: "22,00",
        quantity: "10",
    },
];

let carts = [
    {
        id: "1",
        name: "Caixa",
        src: img,
    },

];

export { cart, columns, carts };
