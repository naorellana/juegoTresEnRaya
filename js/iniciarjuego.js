var board = new Array(3); //array de ***
var turn; //control del turno

var Player_Sellected_x;
var Player_Sellected_y;

var Machine_Sellected_x;
var Machine_Sellected_y;

function ClearCell (x, y){ //iniciar con celdas vacias
	board[x][y] = 0;
	cell = document.getElementById("c" + x + y); ///obtiene la celda
	cell.innerHTML = ""; //define el contenido de la celda
}


function ClearBoard(){   //recorre las posisiones y llama a limpiar celdas
	for (i=0; i<3; i++)
		for (j=0; j<3; j++){
			ClearCell(i, j)
		}
}

function PaintCell (x, y){ //
	cell = document.getElementById("c"+ x + y);
	cell.innerHTML = "<img src=" + turn + ".png></img>";//pintar la casilla con la imagen **tun es el nombre del jugador y tambien hace referencia al nombre de la imagen

	if (turn == "machine"){ //cambia los valores de las celdas segun los turnos
		board[x][y] = 1;
		Machine_Sellected_x = x;
		Machine_Sellected_y = y;
	}
	else{
		board[x][y] = 2;
		Player_Sellected_x = x;
		Player_Sellected_y = y;
	}

	CheckLine();

	if (turn == "machine") turn = "player";
	else turn = "machine";

}
function CheckCell(x, y){
	players = CheckTurn_Count(2);
	if (players == 3){
		if (board[x][y] == 2){
			Player_Sellected_x = x;
			Player_Sellected_y = y;
			ClearCell(x, y);
		}
	}
	else{
		if (board[x][y] == 0 && DifMov(x, y)) SelectCell(x, y); ///REVISAR QUE NO SE MUEVA LA  ULTIMA FICHA COLOCADA
	}
}

function SelectCell(x, y){ //al hacer clic en la celda
	PaintCell(x, y);
	SearchMove();//termina el turno del jugador y la maqina busca otro movimiento
}  

function autoplay(){  //funcion al cargar la pagina

	hide_message();

	for (i=0; i<3; i++) board[i] = new Array(3); //multiplica las filas por columnas

	turn = "machine"; //inicia la maquina el juego

	Player_Sellected_x = 4; //se asigna a una zona que no existe **no hay ninguna casilla marcada por los jugadores
	Player_Sellected_y = 4;

	Machine_Sellected_x = 4;
	Machine_Sellected_y = 4;

	ClearBoard();
	SearchMove();
}

autoplay();

/*
board
___________
vacia = 0
machine = 1
player = 2



turn
___________
maquina = machine
humano = player
*/

/************************************
*			*			*			*
*			*			*			*
*	 c02	*	 c12	*	 c22	*
*			*			*			*
*			*			*			*
*************************************
*			*			*			*
*			*			*			*
*	 c01	*	 c11	*	 c21	*
*			*			*			*
*			*			*			*
*************************************
*			*			*			*
*			*			*			*
*	 c00	*	 c10	*	 c20	*
*			*			*			*
*			*			*			*
************************************/