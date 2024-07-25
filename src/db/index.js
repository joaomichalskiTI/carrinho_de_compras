const columns = [
    { title: "Produto", dataIndex: "produto", key: "produto" },
    { title: "Valor ", dataIndex: "Valor", key: "Valor" },
    // { title: "Quantidade ", dataIndex: "quantidade", key: "quantidade" },
    { title: "", dataIndex: "actions", key: "actions" },
];

const columnsModal = [
    { title: "Carrinho", dataIndex: "carrinho", key: "carrinho" },
    { title: "Data ", dataIndex: "data", key: "data" },
    { title: "Itens ", dataIndex: "itens", key: "itens" },
    { title: "Valor total", dataIndex: "valorTotal", key: "valorTotal" },
];

let initialCart = [];
let carts = [];

const itemsModalShop = [
    { title: "Produto", dataIndex: "produto", key: "produto" },
    { title: "Valor ", dataIndex: "Valor", key: "Valor" },
];

export { columns, columnsModal, initialCart, carts, itemsModalShop };
