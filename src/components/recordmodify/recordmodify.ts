import { dispatch } from "../../store";
import { navigate } from "../../store/actions";

export enum AttributeRecord {
    'uid' = 'uid',
    'image' = 'image',
    'name' = 'name',
    'artist' = 'artist',
    'price' = 'price',
    'stock' = 'stock',
  }
  
  export default class RecordModify extends HTMLElement {
    uid?: string;
    image?:string;
    name?: string;
    artist?:string;
    price?: number;
    stock?:number;
  
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    static get observedAttributes() {
      const attrs = {
        uid: null,
        image: null,
        name: null,
        artist: null,
        price: null,
        stock: null,
      };
      return Object.keys(attrs);
    }
    attributeChangedCallback(propname: AttributeRecord, oldValue: string | undefined, newValue: string | undefined) {
      switch (propname) {
        case AttributeRecord.price:
				this.price = newValue ? Number(newValue) : undefined;
				break;
                case AttributeRecord.stock:
				this.stock = newValue ? Number(newValue) : undefined;
				break;
        default:
          this[propname] = newValue;
          break;
      }
    }
    //propname:AttributeFigure, oldValue: string|undefined, newValue: string|undefined
    connectedCallback() {
      this.render();

      const button = this.shadowRoot?.querySelector('#edit');
		button?.addEventListener('click', () => {
			dispatch(navigate('EDIT'));
		});
    }
  
    render() {
        if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
      <section data-uid="${this.uid}">
      <img src='${this.image}'>
      <h1>${this.name}</h1>
      <h2>${this.artist}</h2>
      <h3${this.price}></h3$>
      <h3${this.stock}></h3$>
      <button id='edit'>EDIT</button>
      <button>DELETE</button>
      </section>
      `;
		}
    }
  }
  
  customElements.define('my-recordmodify', RecordModify);