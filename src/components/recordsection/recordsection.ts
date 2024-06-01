import { appState } from "../../store";
import { DataShapeRecord } from "../../types/record";
import css from './recordsection.css';
import '../export';

class RECORDSECTION extends HTMLElement {
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
			console.log('list', appState.recordlist)
			const styles = document.createElement('style');
			styles.textContent = css;
			this.shadowRoot.innerHTML = `
				<section id="favoriteMovies">
					${favoriteMovies
						.map(
							(movie) => 
							
							`
								<my-record
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
						.join('')
					}
				</section>
			`;
			this.shadowRoot.appendChild(styles);
		}
	}
}

customElements.define('my-recordsection',RECORDSECTION);
export default RECORDSECTION;