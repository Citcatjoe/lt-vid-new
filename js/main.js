jQuery(document).ready(function($) 
{
	var myPlayer = videojs('mainplayer');
	var $myPlayerControlBar = $('.vjs-control-bar');
	var $mainContentOverlay = $('.main-content-overlay');
	var $mainContentOverlay2 = $('.main-content-overlay2');
	//var $shareFacebook = $('.share-facebook');
	//var $shareTwitter = $('.share-twitter');
	//var $shareLinkedin = $('.share-linkedin');
	//var $shareEmail = $('.share-email');
	var $playlist = $('.main-content-playlist');
	var $playlistToggler = $('.main-content-playlist').find('.main-content-playlist-title');
	var $playlistTogglerIcon = $playlistToggler.find('i');

    $($mainContentOverlay).click(function(){ 
		myPlayer.play();
	});

	$($mainContentOverlay2).click(function(e) { 
		myPlayer.play().trigger('mousedown').trigger('mouseup');
	});

	myPlayer.on('pause', function(){ 
		$mainContentOverlay2.fadeIn();
		//$('.navbar-default').show();
	}); 

	myPlayer.on('play', function(){ 
		$mainContentOverlay.hide();
		$mainContentOverlay2.fadeOut();
		//$('.navbar-default').hide();
	});


	
	

	// $($shareFacebook).click(function(e) { 
	// 	alert('Pouet pouet facebook');
	// 	event.stopPropagation();
	// });

	// $($shareTwitter).click(function(e) { 
	// 	alert('Pouet pouet twitter');
	// 	event.stopPropagation();
	// });

	// $($shareLinkedin).click(function(e) { 
	// 	alert('Pouet pouet linkedin');
	// 	event.stopPropagation();
	// });

	// $($shareEmail).click(function(e) { 
	// 	alert('Pouet pouet email');
	// 	event.stopPropagation();
	// });


	/////////////////////////////////////////////////////////////////
	// PLAYLIST
	/////////////////////////////////////////////////////////////////
	$($playlistToggler).click(function(e) { 
		$($playlist).toggleClass('is-open');
		$($playlistTogglerIcon).toggleClass('fa-caret-up');
		$($playlistTogglerIcon).toggleClass('fa-caret-down');

		$($myPlayerControlBar).toggleClass('is-playlist-hidden');
		
	});

	$('.carousel').carousel({
	  interval: false
	})

	$('li.item-video').click(function(e) { 
		playlistItemClick($(this));
		
	});

	function playlistItemClick(el) {
		$elements = el.parent().find('.item-video');
		$elements.removeClass('is-highlighted');
		el.addClass('is-highlighted');
		//alert('yo');
	}

	/////////////////////////////////////////////////////////////////
	// MAKEYOUROWN WIDGET DESKTOP
	/////////////////////////////////////////////////////////////////
	var $makeYourOwnDesktop = $('.makeyourown-desktop');
	var $makeYourOwnDesktopChoice1 = $makeYourOwnDesktop.find('.makeyourown-desktop-choice1');
	var $makeYourOwnDesktopChoice1Buttons = $makeYourOwnDesktopChoice1.find('button');
	var $makeYourOwnDesktopChoice2 = $makeYourOwnDesktop.find('.makeyourown-desktop-choice2');
	var $makeYourOwnDesktopChoice2Buttons = $makeYourOwnDesktopChoice2.find('button');

	$makeYourOwnDesktopChoice2.hide();

	$($makeYourOwnDesktopChoice1Buttons).click(function(e) { 
		$makeYourOwnDesktopChoice1Buttons.removeClass('is-selected');
		$(this).addClass('is-selected');
		$makeYourOwnDesktopChoice2.fadeIn();
	});

	$($makeYourOwnDesktopChoice2Buttons).click(function(e) { 
		$makeYourOwnDesktopChoice2Buttons.removeClass('is-selected');
		$(this).addClass('is-selected');

		// setTimeout(function(){
		// 	$makeYourOwnDesktopChoice1Buttons.removeClass('is-selected');
		// 	$makeYourOwnDesktopChoice2Buttons.removeClass('is-selected');
		// 	$makeYourOwnDesktopChoice2.hide();
  		//     }, 1000);

	});

	/////////////////////////////////////////////////////////////////
	// MINI-PLAYERS
	/////////////////////////////////////////////////////////////////
	$('.last-contents-item-header').click(function(e) { 
		
		if ($(window).width() > 752 )
		{
			alert('Reaload page');
		} 
		else
		{
			$(this).find('.picture-wrapper').hide();
			$(this).find('.video-wrapper').show();
		}

	});

	
});
