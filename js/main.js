"use strict";

$(document).ready(function() {
    $("#youtubeUrlForm").submit(enqueueURL);
});

function enqueueURL(e) {
	e.preventDefault();

	let videoURL = $(e.target).find("#youtubeUrl").val();
	if (videoURL) {
		$.ajax
		({
			type: "POST",
			contentType : 'application/json',
			url: "https://nexdns1ak6.execute-api.us-east-1.amazonaws.com/test/enqueue-url",
			data: JSON.stringify({"URL": videoURL}),
			error: function(request, status, error) {
				console.log(request, status, error);
			},
			success: function(data, status, request) {
				console.log(data, status, request);
			}
		});
	} else {
		alert("Just paste video address!");
	}
}