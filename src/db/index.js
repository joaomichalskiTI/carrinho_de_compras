import img from "../assets/cartBlack.png";

const columns = [
    { title: "Produto", dataIndex: "produto", key: "produto" },
    { title: "Valor ", dataIndex: "Valor", key: "Valor" },
    { title: "Quantidade ", dataIndex: "quantidade", key: "quantidade" },
    { title: "", dataIndex: "actions", key: "actions" },
];

let initialCart = [];

let carts = [
    {
        id: "1",
        name: "Caixa",
        src: img,
    },
];

const itemsModalShop = [
    { title: "Produto", dataIndex: "produto", key: "produto" },
    { title: "Valor ", dataIndex: "Valor", key: "Valor" },
];

export { initialCart, columns, carts, itemsModalShop };
