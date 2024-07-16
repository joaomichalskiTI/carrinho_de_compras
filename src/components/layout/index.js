import "./styles.css";

import Header from "../header";
import Table from "../table";
import Form from "../form";

function Layout() {
    return (
        <div class="layout">
            <Header />
            <main>
                <Table />
                <Form />
            </main>
        </div>
    );
}

export default Layout;
