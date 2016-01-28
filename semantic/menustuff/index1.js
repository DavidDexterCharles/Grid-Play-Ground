/**
 * Created by davcharles on 22/01/2016.
 */

$('.top.menu .item').tab();

$('.tabular.menu .item').tab();


// $('.ui.sticky')
//         .sticky({
//             context: '#example2',
//             pushing: true
//         })
// ;

var menu;
var height;
var thing;
var scroll = 0;
var offset = 65;
$(window).ready(function(){
    menu = $('#top-menu');
    thing = $('#cust-sticky');
    thing.css('position','absolute');
    height = menu.height();
    //offset = $('#search-bar').position().top;
    thing.css('top',(height - offset)+'px');
    var fun = function(){
        height = menu.height();
        if($(window).scrollTop < height - offset){
            thing.css('top',(height - offset)+'px');
        }
    };

    $(window).resize(fun);

    $(window).scroll(function(event){
        var scrolltop = $(window).scrollTop();
        if(scrolltop > height - offset){
            thing.css('top',(scrolltop - offset + 40)+'px');
        }else{
            thing.css('top',(height - offset)+'px');
        }
    });
});

