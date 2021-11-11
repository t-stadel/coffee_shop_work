/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
    production: false,
    apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
    auth0: {
        url: 't-stadel.us', // the auth0 domain prefix
        audience: 'coffeeshop', // the audience set for the auth0 app
        clientId: 'yCwKeSamDeTOofUSjqjTC5lrJszcfxIK', // the client id generated for the auth0 app
        callbackURL: 'http://localhost:8100', // the base url of the running ionic application.
    },
    m2m: {
        url: 't-stadel.us',
        // header: 'application/json',
        header: 'application/x-www-form-urlencoded',
        clientId: 'XHw3DUCZbwTiQhViz5ygzAkrMlz38Fh9',
        audience: 'https://t-stadel.us.auth0.com/api/v2/',
        grantType: 'client_credentials',
        bearerToken: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlNlWnM2Vl9rM1IyNV9MWHVfcllYVCJ9.eyJpc3MiOiJodHRwczovL3Qtc3RhZGVsLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJYSHczRFVDWmJ3VGlRaFZpejV5Z3pBa3JNbHozOEZoOUBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly90LXN0YWRlbC51cy5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTYzNTc5MzI2NCwiZXhwIjoxNjM1ODc5NjY0LCJhenAiOiJYSHczRFVDWmJ3VGlRaFZpejV5Z3pBa3JNbHozOEZoOSIsInNjb3BlIjoicmVhZDp1c2VycyB1cGRhdGU6dXNlcnMgZGVsZXRlOnVzZXJzIGNyZWF0ZTp1c2VycyByZWFkOnVzZXJzX2FwcF9tZXRhZGF0YSB1cGRhdGU6dXNlcnNfYXBwX21ldGFkYXRhIGRlbGV0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgY3JlYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSByZWFkOmNvbm5lY3Rpb25zIHJlYWQ6dXNlcl9pZHBfdG9rZW5zIHJlYWQ6cm9sZXMgY3JlYXRlOnJvbGVfbWVtYmVycyByZWFkOnJvbGVfbWVtYmVycyBkZWxldGU6cm9sZV9tZW1iZXJzIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.NNV6Ro5KaYc3JMRi2htNWmbgNqXC9EREifAAJEZE2T01Xq0IAan1WS2BIXw9X7bIL-f5PLdLhvK3LHXs0hKYroneKjj-BcBQvRUIRwKoTBZRw4mSgvhbFUAFJE6c6sr404A3J0mXttv7JO2Lt9NZNvTA6aWfjWBxPsbLCMeWgg4v8h2w3yhfv31afABG_-ye4CWeCLJqG1sA55HQd-eWZBh6axxZ-0zAgHIg1L9NpxwCYKKxPXe6wCo0P3TWdmVOKk_Pwh0_Co3szuc_RhKcYHcOYsitMsjafUU8L-MItQpWRUlk7DSvGzOvQbrpMbWC3knU2wdQOAyOXOtZ6APcUQ',
    },
};
