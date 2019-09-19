onload = function(){
    myDigiTimeArea.start();
}

var timePiece = [];

var myDigiTimeArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        //canvas라는 객체를 만들어냄
        this.context =this.canvas.getContext("2d");
        //2d사용을 가능하게함
    }
}

function component(w,h,c,x,y){
    // x, y는 그리드의 위치
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.update = function(){
        var ctx = myDigiTimeArea.context;
        ctx.fillStyle = c;
        ctx.fillRect(this.x, this.y, this.w, this.h);
        //사각형을 만드는 것
    }
}

function makeGrid(){
    var gap = 2, size =14, color = "e3e3e3", arrObj;
    // 그리드간의 간격, 그리드의 크기, 색상 위한 변수와 배열 1개 선언 배열 1개 선언
    var rect = null;    //배열에 넣어줄 사각형 객체
    for(i=0; i<7; i++){
        timePiece.push([]);
    }
}