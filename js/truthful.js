Reveal.addEventListener( 'slidechanged', function( event ) {

	if ( event.currentSlide.classList.contains( 'no-controls' ) ) {
		document.body.classList.add( 'no-controls' );
	} else {
		document.body.classList.remove( 'no-controls' );
	}

} );
