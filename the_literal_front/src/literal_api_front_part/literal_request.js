"use strict"; 
// self note - go read on the old_literal request first, see the learning progress

// so what the two functions shared in the old literal request, refactoring it into one function
// and for that function the links structure i'm breaking it into modular variables

const literal_prefix = "http://127.0.0.1:8000"; 
// this combined with the request_path parameter to make the full needed fetch url

/** 
 *  @param {string} request_path
 *  @param {RequestInit} [other_options] - The options object fetch accepts. It can be omitted for GET.
 */
export async function literalRequest(request_path, other_options = {}) {
    // If fetch rejects, execution stops here and the caller's catch receives the error.
    const literal_response = await fetch(literal_prefix + request_path, other_options);

    // An HTTP error like 404 still gives us a Response. Throw so the caller can handle it.
    if (!literal_response.ok) {
        throw new Error(`HTTP error! status: ${literal_response.status}`);
    }

    // Only successful responses reach this line. If JSON parsing fails, the caller catches that too.
    return literal_response.json();
}


