document.addEventListener( 'DOMContentLoaded', function () {
    var checkboxDays = document.querySelectorAll( '.checkboxDay' ),
        allDays = document.querySelector( '.allDays' ),
        noteText = document.querySelector( '.note-text' ),
        form = document.querySelector( 'form' ),
        btn = document.querySelector( '.button' ),
        dayBoxes = document.querySelectorAll( '.dayBox ul' );

    btn.addEventListener( 'click', function () {
        var dataItem = noteText.value;

        for ( var i = 0; i < checkboxDays.length; i++ ) {
            if ( checkboxDays[ i ].checked ) {
                var li = document.createElement( 'li' );

                li.innerText = dataItem;
                dayBoxes[ i ].appendChild( li );
            }
        }
    } )
    

    allDays.addEventListener( 'click', function () {
        for ( var i = 0; i < checkboxDays.length; i++ ) {
            checkboxDays[ i ].checked = allDays.checked ? true : false
        }
    } )
} )
