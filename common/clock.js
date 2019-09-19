window.onload = function() {
    this.digiTimeArea.start();
    // timePiece = new TimeNumber(9,20,2);
    this.makeGrid();
}

var timePiece = [];

var digiTimeArea = {
    canvas : document.createElement("canvas"),
    // timePiece : [],
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateDigiArea, 1000/5);
    },
    diginums : {
        0:[1,1,1,1,0,1,1,0,1,1,0,1,1,1,1],
        1:[0,0,1,0,0,1,0,0,1,0,0,1,0,0,1],
        2:[1,1,1,0,0,1,1,1,1,1,0,0,1,1,1],
        3:[1,1,1,0,0,1,1,1,1,0,0,1,1,1,1],
        4:[1,0,1,1,0,1,1,1,1,0,0,1,0,0,1],
        5:[1,1,1,1,0,0,1,1,1,0,0,1,1,1,1],
        6:[1,1,1,1,0,0,1,1,1,1,0,1,1,1,1],
        7:[1,1,1,0,0,1,0,0,1,0,0,1,0,0,1],
        8:[1,1,1,1,0,1,1,1,1,1,0,1,1,1,1],
        9:[1,1,1,1,0,1,1,1,1,0,0,1,0,0,1]
    },
    clear : function() {j
        var arrObj;
    }
}

function Component(x,y,c,w,h) {
    // x,y는 그리드의 위치
    this.x = x;
    this.y = y;
    this.c = c;
    this.w = w;
    this.h = h;
    this.update = function() {
        ctx = digiTimeArea.context;
        ctx.fillStyle = this.c;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}

function makeGrid() {
    // 간격, 컴포넌트의 크기, 색상
    var gap=2,size=14, color = "#e3e3e3", arrObj;
    var rect = null;    //배열에 넣는 사각형 객체
    for(i=0;i<7;i++) {
        timePiece.push([]);
        for(j=0;j<29;j++) {
            gw = j * gap;
            gh = i * gap;
            rect = new Component(j*size+gw,i*size+gh,color,size,size);
            timePiece[i].push(rect);
        }
    }
    // 화면에 그리드 표시
    // 시분구분 컬럼
    timePiece[2][9].c = timePiece[4][9].c = "red";
    timePiece[2][19].c = timePiece[4][19].c = "red";
    for(var i=0;i<7;i++) {
        for(var j=0;j<29;j++) {
            arrObj = timePiece[i][j];
            arrObj.update();
        }
    }
}
function updateDigiArea() {
    var now=new Date(), hhmmss="", num=null, gap=0;
    hh = ("0" + now.getHours()).slice(-2);
    mm = ("0" + now.getMinutes()).slice(-2);
    ss = ("0" + now.getSeconds()).slice(-2);
    hhmmss = hh+mm+ss;

    for(var i=0; i<hhmmss.length; i++) {
        // console.log(hhmmss.charAt(i),i,i*4+1);
        num = digiTimeArea.diginums[hhmmss.charAt(i)];
        switch(i) {
            case 2:
            case 3:
                gap = 3;
                break;
            case 4:
            case 5:
                gap = 5;
                break;
            default:
                gap = 1;
        }
        updateTimePiece(num, i*4+gap);
    }
}

function updateTimePiece(num, pos) {
    var arrObj, arrIdxX, arrIdxY, numIdx;
    console.log(num, pos);


    // 시간 업데이트
    for(var i=0;i<5;i++) {
        for(var j=0;j<3;j++) {
            arrIdxX = i + 1;
            arrIdxY = j + pos;
            arrObj = timePiece[arrIdxX][arrIdxY];
            numIdx = i*3+j;
            if(num[numIdx] === 1) {
                arrObj.c = "red";
            } else {
                arrObj.c = "#e3e3e3";
            }
            arrObj.update();
        }
    }
}