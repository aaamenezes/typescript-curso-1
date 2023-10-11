export class TradesView {
    constructor(selector) {
        this.container = document.querySelector(selector);
    }
    template(model) {
        return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>DATE</th>
            <th>QUANTITY</th>
            <th>VALUE</th>
          </tr>
        </thead>
        <tbody>
          ${model
            .getTradesList()
            .map((trade) => `
                <tr>
                  <td>${new Intl.DateTimeFormat().format(trade.date)}</td>
                  <td>${trade.quantity}</td>
                  <td>${trade.value}</td>
                </tr>
              `)
            .join("")}
        </tbody>
      </table>
    `;
    }
    update(model) {
        this.container.innerHTML = this.template(model);
    }
}
