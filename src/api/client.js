/**
 * Created by maiko on 27/12/2016.
 */
import 'whatwg-fetch';
import restful, { fetchBackend } from 'restful.js';

const api = restful('http://localhost:8080', fetchBackend(fetch));
export default api;
