var giocatore = 1;
var grid = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

alert("È IL TURNO DEL GIOCATORE " + giocatore);


function premi(indice_cella)
{  
    var celle = document.getElementsByClassName('cambia');
    var cella = celle[indice_cella];
    console.log(celle);
    console.log(grid);
    var i =0;
    if(grid[indice_cella] == 0){
        
        
        for( i=36; i < 0  ; i-7)
        {
            if(grid[i] != 0 )
            {
                cella = celle[indice_cella  - 7]
                cella.classList.add("giocatore1")
            }
        }
        for( i=37; i < 0  ; i-7)
        {
            if(grid[i] != 0 )
            {
                cella = celle[indice_cella  - 7]
            }
        }
        for( i=38; i < 0  ; i-7)
        {
            if(grid[i] != 0 )
            {
                cella = celle[indice_cella  - 7]
            }
        }
        for( i=39; i < 0  ; i-7)
        {
            if(grid[i] != 0 )
            {
                cella = celle[indice_cella  - 7]
            }
        }
        for( i=40; i < 0  ; i-7)
        {
            if(grid[i] != 0 )
            {
                cella = celle[indice_cella  - 7]
            }
        }
        for( i=41; i < 0  ; i-7)
        {
            if(grid[i] != 0 )
            {
                cella = celle[indice_cella  - 7]
            }
        }
        for( i=42; i < 0  ; i-7)
        {
            if(grid[i] != 0 )
            {
                cella = celle[indice_cella  - 7]
            }
        }
        for( i=43 ; i < 0  ; i-7)
        {
            if(grid[i] != 0 )
            {
                cella = celle[indice_cella  - 7]
            }
        }

        if(giocatore == 1)
        {
            cella.classList.add("giocatore1");
            giocatore =2;
            grid[indice_cella] = 1;
        }else{
            cella.classList.add("giocatore2");
            giocatore = 1;
            grid[indice_cella]=2;
        }
        
        //funziona che controlla chi ha vinto
        controlla(indice_cella);
        
        alert("È IL TURNO DEL GIOCATORE " + giocatore);
    }

    
}


function controlla(i)
{
    
    if (grid[0] == grid[1] && grid[0] == grid[2]) { //Verifica prima riga orizzontale
        verificaVincitore(0);
    } else if (grid[3] == grid[4] && grid[3] == grid[5]) { //Verifica seconda riga orizzontale
        verificaVincitore(3);
    } else if (grid[6] == grid[7] && grid[6] == grid[8]) { //Verifica terza riga orizzontale
        verificaVincitore(6);
    } else if (grid[0] == grid[3] && grid[0] == grid[6]) { //Verifica prima colonna verticale 
        verificaVincitore(0);
    } else if (grid[1] == grid[4] && grid[1] == grid[7]) { //Verifica seconda colonna verticale 
        verificaVincitore(1);
    } else if (grid[2] == grid[5] && grid[2] == grid[8]) { //Verifica terza colonna verticale 
        verificaVincitore(2);
    } else if (grid[0] == grid[4] && grid[4] == grid[8]) { //Verifica prima diagonale da sx 
        verificaVincitore(0);
    } else if (grid[2] == grid[4] && grid[2] == grid[6]) { //Verifica seconda diagonale da dx
        verificaVincitore(2);
    }

}

function verificaVincitore(posizione) {

    if (grid[posizione] == "1") {
        document.getElementById("vincita").innerHTML = "Complimenti " + "x" + " hai vinto!!!";
       
    } else if (grid[posizione] == "2") {
        document.getElementById("vincita").innerHTML = "Complimenti " + "O" + " hai vinto!!!";
        
    }
}
// inserire la pedina
function insertPedina(numCells) {
	var table = document.getElementById("table");
	createCircle = document.createElement("img");
	
	//inserisce tutte le altre pedine    
	for(var i= tab.length - 1; i>0; i--) {  
	    
	    if (tab[i][numCells] == 0) { // posto libero
				
		if(x==0) {
		    x=1;
		    tab[i][numCells] = 1;
		    createCircle.setAttribute("src", "cerchio_red.jpg");
			
		}
		else {
		    x=0;
		    tab[i][numCells] = -1;
		    createCircle.setAttribute("src", "cerchio_black.jpg");
			
		}
		var contCells = table.rows[i].cells[numCells];
		contCells.appendChild(createCircle);
	        break;
	    }
	}
}
