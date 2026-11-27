"use strict";

import { literalRequest } from './literal_request.js';

//importing the type defintions necessary for this module
/** 
 * @typedef {import('./types.js').WaterEntry} WaterEntry
*/

/** @returns {Promise<import('./types.js').WaterSummary>} --even here we still returning a summary
 * @param {number} amount_ml
 */
export function logWaterEntry(amount_ml) {
    let options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }, // letting fastapi know it's JSON
        // inser son meme Json version
        body: JSON.stringify({ amount_ml })
    }
    let summary = literalRequest('/water/literal_entries', options);

    return summary;
}
