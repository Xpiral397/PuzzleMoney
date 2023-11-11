export class Matrix {

    constructor (matrix) {
        this.matrix=matrix;
        if(matrix.length!=0) {
            this.length=matrix[0].length
        } else {
            this.length=0
        }
        this.height=matrix.length
        this.possibleMove=[];
    }

    getTop(curr_pos) {
        return this.matrix[curr_pos[0]-1][curr_pos[1]];
    }
    getButtom(curr_pos) {
        return this.matrix[curr_pos[0]+1][curr_pos[1]];
    }
    getLeft(curr_pos) {
        return this.matrix[curr_pos[0]][curr_pos[1]+1];
    }
    getRight(curr_pos) {
        return this.matrix[curr_pos[0]][curr_pos[1]-1];
    }

    isMoveable(x, y) {
        const bound=[x, y];
        const possibleMoves=[];
        const settle=[this.getTop([x, y]), this.getLeft(bound), this.getRight(bound), this.getButtom(bound)];
        for(const possibleMove of settle) {
            if(possibleMove) {
                possibleMoves.push(possibleMove);
            }
        }
        this.possibleMove=possibleMoves;
        return this.possibleMove.length>0;
    }

    moveCard(from, to, shuffling=false) {
        if(this.isMoveable(from[0], from[1])&&this.possibleMove.includes(to)) {
            let retrivePrev=this.matrix[from[0]][from[1]];
            let retriveFuture=this.matrix[to[0]][to[1]];

            this.matrix[to[0]][to[1]]=retrivePrev;
            this.matrix[from[0]][from[1]]=retriveFuture;

            return true;
        } else if(shuffling) {
            let retrivePrev=this.matrix[from[0]][from[1]];
            let retriveFuture=this.matrix[to[0]][to[1]];
            this.matrix[to[0]][to[1]]=retrivePrev;
            this.matrix[from[0]][from[1]]=retriveFuture;
            return true;
        } else {
            return false;
        }
    }
}

export class XPlayer {
    constructor (player, limR, limC, spc) {
        this.limC=limC;
        this.limR=limR;
        this.map=(limC*limR)-spc;
        // console.log(limC, limR, spc, 'porps')
        this.gridNumber=this.range(this.map);
        this.spc=spc;
        this.player=player;
        this.boolean=[];
        this.matrix=new Matrix([]);
        this.start=false;
        this.getBoolean(); // Call the getBoolean method
    }

    getBoolean() {
        for(let i=0; i<this.range(this.map); i++) {
            this.boolean.push(Math.floor(Math.random())===0);
        }
    }




    startGame() {
        this.shuffle()
        this.create();
        this.start=true
    }

    reCreate(props, shuffle=false) {
        const {player, nr, c, spc}=props



        console.log({player, nr, c, spc})

        this.limC=c??this.limC;
        this.limR=nr??this.limR;
        this.map=(this.limC*this.limR)-spc;
        this.gridNumber=this.range(this.map);
        this.spc=spc;
        this.player=player;
        this.boolean=[];
        this.matrix=new Matrix([]);
        this.start=false;
        this.getBoolean();
        this.create()
        if(shuffle) {
            this.shuffle()
        }

    }

    randomlyBoolean() {
        return this.boolean[Math.floor(Math.random()*this.boolean.length-1)];
    }
    setColumn() {

    }
    range(number) {
        let arr=[];
        for(let i=0; i<=number; i++) {
            arr.push(i);
        }
        return arr;
    }

    randomPick(arr) {
        return arr[Math.floor(Math.random()*arr.length)]
    }

    shuffle() {
        const row=this.range(this.matrix.height)
        const cols=this.range(this.matrix.length)

        let shuffle=Math.max(row, cols)

        while(shuffle) {
            shuffle--;
            const from=[this.randomPick(row), this.randomPick(cols)]
            const to=[this.randomPick(row), this.randomPick(cols)]
            console.log(from, to)
            this.matrix.moveCard(from, to, true)
        }

        // console.log(this.matrix.height, this.matrix.length, shuffle)
    }

    create(random=false) {
        const matrix=[];
        let space=this.spc;
        let prefixed=[];
        for(let num of this.gridNumber) {
            prefixed.push(num);

            if(prefixed.length===this.limC) {
                matrix.push(prefixed);
                prefixed=[];
                continue;
            }
            if(random&&!space) {
                if(this.randomlyBoolean()) {
                    prefixed.push(null);
                    space--;
                }
            }

            if(matrix.length===this.limR&&prefixed.length==this.limR-this.spc) {
                for(let num=0; num<this.range(this.limR-this.spc); num++) {
                    prefixed.push(null);
                }
            }
        }

        this.matrix=new Matrix(matrix);
    }
}