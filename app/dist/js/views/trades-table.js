import { View } from "./view.js";
export class TradesTable extends View {
    template(model) {
        return `<table class="table table-hover table-bordered">
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
            .map((trade) => `<tr>
                <td>${this.formatDate(trade.date)}</td>
                <td>${trade.quantity}</td>
                <td>${trade.value}</td>
              </tr>
            `)
            .join("")}
      </tbody>
    </table>`;
    }
    formatDate(date) {
        return new Intl.DateTimeFormat().format(date);
    }
}
