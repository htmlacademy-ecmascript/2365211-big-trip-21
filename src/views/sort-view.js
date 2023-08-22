import View from './view.js';
import {html} from '../utilities.js';

/**
  * @typedef {{
*   value: SortType
*   isSelected: boolean
*   isDisabled: boolean
* }} ItemState
*
* @typedef {{
*  items: Array<ItemState>
* }} State
*
* @extends {View<State>}
*/

class SortView extends View {
  constructor() {
    super();

    this.classList.add('trip-sort');
  }

  /**
    * @override
    */
  createHtml() {
    return html`
       <div class="trip-sort__item  trip-sort__item--${item.value}">
         <input
         id="sort-${item.value}"
         class="trip-sort__input  visually-hidden"
        type="radio"
        name="trip-sort"
        value="${item.value}"
        ${item.isSelected ? 'checked' : ''}
        ${item.isSelected ? 'checked' : ''}>
         <label
        class="trip-sort__btn"
        for="sort-${item.value}">
        Day
        </label>
       </div>

     `;
  }
}

customElements.define('sort-view', SortView);

export default SortView;
