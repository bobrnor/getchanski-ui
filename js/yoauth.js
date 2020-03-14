"use strict";

$(document).ready(function() {
    var token = /access_token=([^&]+)/.exec(document.location.hash);
    var expiresIn = /expires_in=([^&]+)/.exec(document.location.hash);
    var tokenType = /token_type=([^&]+)/.exec(document.location.hash);
    var error = /error=([^&]+)/.exec(document.location.hash);
    var errorDescription = /error_description=([^&]+)/.exec(document.location.hash);

    var json = {}
    if (token) {
    	json["AccessToken"] = token[1]
    }
    if (expiresIn) {
    	json["ExpiresIn"] = parseInt(expiresIn[1], 10)
    }
    if (tokenType) {
    	json["TokenType"] = tokenType[1]
    }
    if (error) {
    	json["Error"] = error[1]
    }
    if (errorDescription) {
    	json["ErrorDescription"] = errorDescription[1]
    }

    $.ajax
		({
			type: "POST",
			contentType : 'application/json',
			url: "https://nexdns1ak6.execute-api.us-east-1.amazonaws.com/test/yandex-oauth-token",
			data: JSON.stringify(json),
			error: function(request, status, error) {
				console.log(request, status, error);
			},
			success: function(data, status, request) {
				console.log(data, status, request);
			}
		});
});