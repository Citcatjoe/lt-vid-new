jQuery(document).ready(function($){function e(e){$elements=e.parent().find(".item-video"),$elements.removeClass("is-highlighted"),e.addClass("is-highlighted")}var i=videojs("mainplayer"),t=$(".vjs-control-bar"),a=$(".bg-mine-shaft-main-player-overlay"),n=$(".bg-mine-shaft-main-player-overlay2"),o=$(".share-facebook"),s=$(".share-twitter"),l=$(".share-linkedin"),r=$(".share-email"),c=$(".bg-mine-shaft-main-player-playlist"),d=$(".bg-mine-shaft-main-player-playlist").find(".bg-mine-shaft-main-player-playlist-title"),u=d.find("i");$(a).click(function(){i.play()}),$(n).click(function(e){i.play().trigger("mousedown").trigger("mouseup")}),i.on("pause",function(){n.fadeIn()}),i.on("play",function(){a.hide(),n.fadeOut()}),$(o).click(function(e){alert("Pouet pouet facebook"),event.stopPropagation()}),$(s).click(function(e){alert("Pouet pouet twitter"),event.stopPropagation()}),$(l).click(function(e){alert("Pouet pouet linkedin"),event.stopPropagation()}),$(r).click(function(e){alert("Pouet pouet email"),event.stopPropagation()}),$(d).click(function(e){$(c).toggleClass("is-open"),$(u).toggleClass("fa-caret-up"),$(u).toggleClass("fa-caret-down"),$(t).toggleClass("is-playlist-hidden")}),$(".carousel").carousel({interval:!1}),$("li.item-video").click(function(i){e($(this))});var p=$(".makeyourown-desktop"),f=p.find(".makeyourown-desktop-rubrique"),m=f.find("button"),h=p.find(".makeyourown-desktop-time"),g=h.find("button");h.hide(),$(m).click(function(e){m.removeClass("is-selected"),$(this).addClass("is-selected"),h.fadeIn()}),$(g).click(function(e){g.removeClass("is-selected"),$(this).addClass("is-selected")}),$(".last-videos-item-header").click(function(e){$(this).find(".picture-wrapper").hide(),$(this).find(".video-wrapper").show()})});