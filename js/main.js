var $win = $(window);
var $first = $('.first');
var $firstSection = $('.first-section');
var $dipperSection = $('.dipper-section');
var $dipper = $('.dipper');
var $shuttleSection = $('.shuttle-section');
var $shuttle = $('.shuttle');
var $shipsSection = $('.ships-section');
var $ships = $('.ships');



$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();

	$first.css('transform', 'rotate(' + scrollPos / 5 + 'deg)');

	$firstSection.css('background-position', 'center ' + scrollPos / 2 + 'px');

});

$dipperSection.waypoint(function () {
	$dipper.addClass('js-dipper-fade');
}, { offset: '50%' });


$shuttleSection.waypoint(function () {
	$shuttle.addClass('js-shuttle-fade');
}, { offset: '50%' });

$shipsSection.waypoint(function () {
	$ships.addClass('js-shuttle-fade');
}, { offset: '50%' });

