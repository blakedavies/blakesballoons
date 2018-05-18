$('#gform').submit(function(e) {
	e.preventDefault();
	$.ajax({
		url: "https://docs.google.com/a/blakedavies.net/forms/d/e/1FAIpQLSeK7eFStd7ciynbQUWrMPBYuK5tJ1oPPqBs8f0jDpQMaqyjmA/formResponse",
		data: $(this).serialize(),
		type: "POST",
		dataType: "xml",
		success: function(data) {
			console.log('Submission successful');
		},
		error: function(xhr, status, error) {
			console.log('Submission failed: ' + error);
		}
	});
});

$('#gform').on('submit', function(e) {
	$('#gform *').fadeOut(0);
	$('#contact-box *').fadeOut(0);
	$('#gform').prepend(
		'<div class="thank-you-box"><div><p class="thank-you">Thank-you!!</p><p class="thank-you">Your booking request has been submitted successfully.</p><p class="thank-you">You will be contacted within the next 48 hours to confirm your booking details.</p></div></div>'
	);
});