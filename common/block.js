//-------- 문서가 준비(html, 이미지, 스크립트, 스타일 등)되면 실행 -------
window.onload = function(){
    this.console.log(myGameArea.message.docIsReady)
    myGameArea.start();  // window.myGameArea.start(); ->  윈도우 생략해도 됨
    this.myGamePiece = new component(30,30,"red",10,120);
}

//------ 환경 경로를 가진 객체
var myGameArea = {
    canvas : document.createElement("canvas"),
    message : {
        docIsReady : "문서가 준비되었습니다."
    },
    start : function(){
        this.canvas.width = 480;
        this.canvas.height = 270;
        // document.body.insertBefore(무엇, 어디)
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);

        //2d사용을 위해 context 설정해주기
        // var ctx = myGameArea.canvas.getContext("2d");
        this.context = this.canvas.getContext("2d");
    }
}

//컴포넌트 생성자 함수
function component(w,h,c,x,y){
    this.x = x;
    this.y = y;
    this.c = c;
    this.w = w;
    this.h = h;
    ctx = myGameArea.context;
    ctx.fillStyle = c;
    ctx.fillRect(this.x, this.y , this.w, this.h);
}

