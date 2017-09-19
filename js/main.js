jQuery(document).ready(function($) 
{
	var myPlayer = videojs('mainplayer');
	var $myPlayerControlBar = $('.vjs-control-bar');
	var $bgMineShaftMainPlayerOverlay = $('.bg-mine-shaft-main-player-overlay');
	var $bgMineShaftMainPlayerOverlay2 = $('.bg-mine-shaft-main-player-overlay2');
	var $shareFacebook = $('.share-facebook');
	var $shareTwitter = $('.share-twitter');
	var $shareLinkedin = $('.share-linkedin');
	var $shareEmail = $('.share-email');
	var $playlist = $('.bg-mine-shaft-main-player-playlist');
	var $playlistToggler = $('.bg-mine-shaft-main-player-playlist').find('.bg-mine-shaft-main-player-playlist-title');
	var $playlistTogglerIcon = $playlistToggler.find('i');

    $($bgMineShaftMainPlayerOverlay).click(function(){ 
		myPlayer.play();
	});

	$($bgMineShaftMainPlayerOverlay2).click(function(e) { 
		myPlayer.play().trigger('mousedown').trigger('mouseup');
	});

	myPlayer.on('pause', function(){ 
		$bgMineShaftMainPlayerOverlay2.fadeIn();
	}); 

	myPlayer.on('play', function(){ 
		$bgMineShaftMainPlayerOverlay.hide();
		$bgMineShaftMainPlayerOverlay2.fadeOut();
	});

	// myPlayer.on('useractive', function(){
	// 	console.log('useractive: Called !!!');
	// });

	// myPlayer.on('userinactive', function(){
	// 	console.log('userinactive: Called !!!');
	// });

	$($shareFacebook).click(function(e) { 
		alert('Pouet pouet facebook');
		event.stopPropagation();
	});

	$($shareTwitter).click(function(e) { 
		alert('Pouet pouet twitter');
		event.stopPropagation();
	});

	$($shareLinkedin).click(function(e) { 
		alert('Pouet pouet linkedin');
		event.stopPropagation();
	});

	$($shareEmail).click(function(e) { 
		alert('Pouet pouet email');
		event.stopPropagation();
	});


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
	var $makeYourOwnDesktopRubrique = $makeYourOwnDesktop.find('.makeyourown-desktop-rubrique');
	var $makeYourOwnDesktopRubriqueButtons = $makeYourOwnDesktopRubrique.find('button');
	var $makeYourOwnDesktopTime = $makeYourOwnDesktop.find('.makeyourown-desktop-time');
	var $makeYourOwnDesktopTimeButtons = $makeYourOwnDesktopTime.find('button');

	$makeYourOwnDesktopTime.hide();

	$($makeYourOwnDesktopRubriqueButtons).click(function(e) { 
		$makeYourOwnDesktopRubriqueButtons.removeClass('is-selected');
		$(this).addClass('is-selected');
		$makeYourOwnDesktopTime.fadeIn();
	});

	$($makeYourOwnDesktopTimeButtons).click(function(e) { 
		$makeYourOwnDesktopTimeButtons.removeClass('is-selected');
		$(this).addClass('is-selected');

		// setTimeout(function(){
		// 	$makeYourOwnDesktopRubriqueButtons.removeClass('is-selected');
		// 	$makeYourOwnDesktopTimeButtons.removeClass('is-selected');
		// 	$makeYourOwnDesktopTime.hide();
  //      	}, 1000);

	});

	/////////////////////////////////////////////////////////////////
	// MINI-PLAYERS
	/////////////////////////////////////////////////////////////////
	$('.last-videos-item-header').click(function(e) { 
		$(this).find('.picture-wrapper').hide();
		$(this).find('.video-wrapper').show();
	});
});
