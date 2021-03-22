import './fetch.js';
import { getData } from './fetch.js';
import  './inputEdit.js';
import './form.js';
import{baseMarkerToMap} from './map-marker.js';
import {setFilterForm} from './filter.js';
import { showAlert } from './utils.js';


getData((posters) => {
  baseMarkerToMap(posters);

  setFilterForm(posters);
}, () => {showAlert('Не удалось получить данные. Попробуйте ещё раз')});
