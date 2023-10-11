import { TradeController } from "./controllers/trade-controller.js";
const tradeController = new TradeController();
const form = document.querySelector(".form");
if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        tradeController.add();
    });
}
else {
    throw Error("form é null");
}
