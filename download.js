$(function(){

	$("form#downloads-form").submit(function(){
		
		$("#success, #error").fadeOut();
		if($("#code").val().indexOf("hope") == -1) // Yes, we know that you can see this.  We are giving it away.  Tell the world.
		{
			codeFailed();
		}
		else
		{
			redeemDownload();
		}
		
		return false;
	});
	
});

function redeemDownload()
{
	$("#success").fadeIn();
	setTimeout(function(){
		window.location.href = "http://jesusculture.com/downloads/hope-for-a-generation-banning-liebscher.mp3"; // We also know that you can see this.  We are giving it away.  Tell the world.
	}, 5000);
}

function codeFailed()
{
	$("#error").fadeIn();
}