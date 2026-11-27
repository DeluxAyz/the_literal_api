// wow a plain JS file, svelte traumitizing me with three of then often together
// I refactored this now inot a modular API-layer version, to really hit my learning goals
// to understand the API layer of automateX
// but i kept this document, as old for learning purposes

"use strict"; 

// (mostly notes to self) this is like a miniature client.js, check void extended v2 and v1 notes,
// v2 for concepts on client.js, domain modules and the likes

//export is put before functions so other paes can import it

/** @returns {Promise<import('./types.js').WaterSummary>} */
// basically saying this async function returns a promise that resolves to a WaterSummary
// notes on how i had to match with a function return below
export async function getWaterSummary() {
    // since fetch is gonna return a promise, gotta use async (see v1 notes)
    let literal_response = await fetch("http://127.0.0.1:8000/literal_data");
    // the returned response object, built in response class for when the fetch() promise succeeds
    // reaching out to my literal_main literal data function, 
    // which is a get request, so no need to specify method

    if (literal_response.ok) {
        // an additional method call to get the body if ok
        let fetched_water_data = await literal_response.json();
        // so the fetch object .json method to access the body of the response as a json,
        //  which is also a promise, so await it
        // all ts in my notes, 
        return fetched_water_data;
    }

    if (!literal_response.ok) {
        // if the response is not ok, throw an error, which will be caught in the catch block of the calling function
        // but idk if there's a separate object or method, like .catch or .reject that usually does this
        throw new Error(`HTTP error! status: ${literal_response.status}`);
    }

    // for the return type check above the function, i need to match and make sure outside -
    // of cases of failure and succes (the .ok) the function returns something as specified in the type
    return await literal_response.json();
}

/** @param {number} amount_ml 
 * -- just like return describes what to return, param describes the function parameter
 * @returns {Promise<import('./types.js').WaterSummary>} --even here we still returning a summary
 * -- the entry is sent not returned 
 * */
export async function logWaterEntry(amount_ml) {
    let another_response = await fetch('http://127.0.0.1:8000/water/literal_entries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }, // letting fastapi know it's JSON
        // inser son meme Json version
        body: JSON.stringify({ amount_ml })
    });

    if (another_response.ok) {
        let response_data = await another_response.json(); // parsing the json data again
        return response_data;
    }

    return await another_response.json();
}

