class View extends HTMLElement {

  render() {
    this.innerHTML = this.createHTML();
  }
/**
 * @abstract
 * @returns {string}
 */
createHTML() {
  return '';
  }
}

export default View;
