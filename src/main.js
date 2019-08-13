import {renderMenu} from './components/menu.js';
import {renderSearch} from './components/search.js';
import {renderFilters} from './components/filters.js';
import {renderContent} from './components/content.js';


const menuContainer = document.querySelector('.main__control');
menuContainer.insertAdjacentHTML('beforeend', renderMenu());

const mainContainer = document.querySelector('.main');
mainContainer.insertAdjacentHTML('beforeend', renderSearch());
mainContainer.insertAdjacentHTML('beforeend', renderFilters());
mainContainer.insertAdjacentHTML('beforeend', renderContent());
