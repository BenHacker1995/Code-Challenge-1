let divCount = 0;

$( document ).ready( readyNow );
function readyNow() {
    $( '#generateButton' ).on( 'click', appendDiv );
    $( '.swap' ).on( 'click', '.swap', colorSwap );

}

function appendDiv() {
    divCount ++;
    const div = `<div id="div${divCount}" class="div"><p>${divCount}</p></div>`
    $( '#mainSection' ).append( div );
    appendButtons();
}

function appendButtons() {
    let swapButton = `<button id="swap ${divCount}" class="swap">Swap</button>`;
    let deleteButton = `<button id="delete ${divCount}" class="button">Delete</button>`;
    $(`#div${divCount}`).append( swapButton );
    $(`#div${divCount}`).append( deleteButton );
    $( '.swap' ).on( 'click', colorSwap );

}

function colorSwap() {
    // if ( $('#swap' ) ) {
        if ( $( 'button' ).closest( 'div').css( 'background-color', 'red' ) ) {
            // $( this ).closest( 'div' ).css( 'background-color', 'yellow' );   
            console.log('red');
            
        }
        else {
            $( this ).closest( 'div' ).css( 'background-color', 'red' );
        }
    }
function colorSwapYR() {
    if ( $('.swap').closest( 'div' ).css( 'background-color', 'yellow' ) ) {
        $( this ).closest( 'div' ).css( 'background-color', 'red' );   
    }
}
// }