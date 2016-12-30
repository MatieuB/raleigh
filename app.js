document.addEventListener("DOMContentLoaded", function(event) {
   console.log("DOM fully loaded and parsed");

var board1 = new ChessBoard('board1', 'start');
var board2 = new ChessBoard('board2', {
    draggable: true,
    dropOffBoard: 'trash',
    sparePieces: true,
    onChange: function(oldPos, newPos) {
        $("#FEN").text(ChessBoard3.objToFen(newPos));
      }
    });
$('#startBtn').on('click', board2.start);
$('#clearBtn').on('click', board2.clear);
$('#flipBtn').on('click', board2.flip);

var sampleConfig = {
  position: 'start',
  draggable : true,
  dropOffBoard: 'snapback'
};
var board;
function setUpBoard(dimensions) {
  var currentPosition = 'start';
  if (board !== undefined) {
    currentPosition = board.position();
    board.destroy();
  }
  if (dimensions >= 3) {
    $('#inner').css('width', '600px');
    $('#inner').css('height', '450px');
    $('#outer').css('padding', '');
    board = new ChessBoard('inner', sampleConfig);
  } else {
    $('#inner').css('width', '450px');
    $('#outer').css('height', '450px');
    $('#outer').css('padding', '0px 75px 0px 75px');
    board = new ChessBoard('inner', sampleConfig);
  }
  board.position(currentPosition, false);
}
$('#2D').on('click', function() {setUpBoard(2);});
$('#3D').on('click', function() {setUpBoard(3);});
setUpBoard(2); // start with a 2D board
});
