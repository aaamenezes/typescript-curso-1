import { View } from "./view.js";
export class Snackbar extends View {
    template(model) {
        return `
      <p class="alert alert-info">
        ${model}
      </p>
    `;
    }
}
//# sourceMappingURL=snackbar.js.map