// the first domain module, refactored from the getWaterSummary old literal function

"use strict";

import { literalRequest } from './literal_request.js';

//importing the type defintions necessary for this module
/** 
 * @typedef {import('./types.js').WaterSummary} WaterSummary
*/

/** @returns {Promise<import('./types.js').WaterSummary>} */
export function getWaterSummary() {
    let summary = literalRequest('/literal_data');

    return summary;
}