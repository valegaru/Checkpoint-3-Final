import { appState } from "../../store";
import { DataShapeRecord } from "../../types/record";
import '../export';

class RECORDMODIFYSECTION extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	async render() {
		if (this.shadowRoot) {
			const favoriteMovies: DataShapeRecord[] = appState.recordlist;
			const styles = document.createElement('style');
			this.shadowRoot.innerHTML = `
				<section id="favoriteMovies">
					${favoriteMovies
						.map(
							(movie) => `
								<my-recordmodify
								uid="${movie.id}"
									image="${movie.image}"
									uid="${movie.id}"
									artist="${movie.artist}"
									name="${movie.name}"
									price="${movie.price}"
									stock="${movie.stock}"
								</my-record>
							`
						)
						.join('')}
				</section>
			`;
			this.shadowRoot.appendChild(styles);
		}
	}
}

customElements.define('my-recordmodifysection',RECORDMODIFYSECTION);
export default RECORDMODIFYSECTION;