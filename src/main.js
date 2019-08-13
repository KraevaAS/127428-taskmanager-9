import {renderMenu} from './menu.js';
import {renderSearch} from './search.js';
import {renderFilters} from './filters.js';
import {renderContent} from './content.js';


const menuContainer = document.querySelector('.main__control');
menuContainer.insertAdjacentHTML('beforeend', renderMenu());

const mainContainer = document.querySelector('.main');
mainContainer.insertAdjacentHTML('beforeend', renderSearch());
mainContainer.insertAdjacentHTML('beforeend', renderFilters());
mainContainer.insertAdjacentHTML('beforeend', renderContent());
