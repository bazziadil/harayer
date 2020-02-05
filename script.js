$(function(){
		
	$('#counter').countdown({
		timestamp	: (new Date()).getTime() + 20*24*60*60*1000
	});
	
});
