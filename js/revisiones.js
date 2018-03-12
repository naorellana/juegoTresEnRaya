function CheckRow(x, value){  //REVISA CUANTAS FICHAS HAY  

	count_value = 0;
	for (i=0; i<3; i++){
		if (board[i][x] == value) count_value++;
	}
	return count_value;
	
}

function CheckColumn(y, value){  //REVISA CUANTAS FICHAS HAY  

	count_value = 0;
	for (i=0; i<3; i++){
		if (board[y][i] == value) count_value++;
	}
	return count_value;
	
}

function CheckDiag(d, value){ //FORMULA INTERESANTE
	/*

	/	\
	00	20
	11	11
	22	02

	*/

	count_value = 0;

	if (board[(1+d)][0] == value) count_value++;
	if (board[1][1] == value) count_value++;
	if (board[(1-d)][2] == value) count_value++;

	return count_value;
}

function CheckLine(){
	if ( turn == "machine") value = 1;
	else value = 2;
	Line = false;

	if (CheckRow(0, value) == 3) Line = true;
	if (CheckRow(1, value) == 3) Line = true;
	if (CheckRow(2, value) == 3) Line = true;
	if (CheckColumn(0, value) == 3) Line = true;
	if (CheckColumn(1, value) == 3) Line = true;
	if (CheckColumn(2, value) == 3) Line = true;
	if (CheckDiag(1, value) == 3) Line = true;
	if (CheckDiag(-1, value) == 3) Line = true;

	if (Line == true) ShowMessage(value);
}


function CheckTurn_Count(turn_value){//cuenta las fichas del turno
	Turn_count = 0;
	for (i=0; i<3; i++){//*****REVISAR PARA CAMBIAR A 4 FICHAS******
		for (j=0; j<3; j++){
			if (board[i][j] == turn_value) Turn_count++;
		}
	}
	return Turn_count;
}

function DifMov(x, y){
	diferent = false;

	if (turn == "cross"){
		if ( x != Cross_Sellected_x ) diferent = true;
		if ( y != Cross_Sellected_y ) diferent = true;
	}
	else{
		if ( x != Machine_Sellected_x ) diferent = true;
		if ( y != Machine_Sellected_y ) diferent = true;
	}

	return diferent;
}

function CheckBlock(x,y){ //revisar que la ficha que se va a mover no bloque el tablero
	//si hay 2 fichas del jugador y una de la maquina
	if (CheckRow(y, 1) == 1 && CheckRow(y,2) == 2) return true;
	if (CheckColumn(x, 1) == 1 && CheckColumn(x,2) == 2) return true;
	if ( (x==0 && y==2) || (x==1 && y==1) || (x==2 && y==0)){ //si esta en alguna posicion de la diagonal
		if (CheckDiag(1,1) == 1 && CheckDiag(1, 2) == 2) return true //hace la revision de la diagonal
	}
	if ( (x==0 && y==0) || (x==1 && y==1) || (x==2 && y==2)){
		if (CheckDiag(-1,1) == 1 && CheckDiag(-1, 2) == 2) return true
	}

	return false;
}
