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
    keys : [],
    start : function(){
        this.canvas.width = 480;
        this.canvas.height = 270;
        // document.body.insertBefore(무엇, 어디)
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        //2d사용을 위해 context 설정해주기
        // var ctx = myGameArea.canvas.getContext("2d");
        this.context = this.canvas.getContext("2d");
        //타이머 적용
        this.interval = setInterval(updateGameArea,20); //초당 50번 updateGameArea 함수를 호출)
        //버튼을 이용한 객체 제어
        this.btns = document.querySelectorAll(".controll > button");
        this.btns[0].addEventListener('mousedown',moveUp);
        this.btns[0].addEventListener('mouseup',moveStop);
        this.btns[1].addEventListener('mousedown',moveLeft);
        this.btns[1].addEventListener('mouseup',moveStop)
        this.btns[2].addEventListener('mousedown',moveRight);
        this.btns[2].addEventListener('mouseup',moveStop)
        this.btns[3].addEventListener('mousedown',moveDown);
        this.btns[3].addEventListener('mouseup',moveStop)
        // 키보드 키다운을 이용한 객체 제어
        window.addEventListener('keydown', function(e){
            // myGameArea에 keys 배열이 없으면 새로 만들고
            myGameArea.keys = (myGameArea.keys || []);
            // myGameArea.keys = [,,,,,,,,,,,,,,,,,,.....,true]
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        });
        window.addEventListener('keyup', function(e){
            // myGameArea.keys = [,,,,,,,,,,,,,,,,,,.....,false]
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
            moveStop();
        });
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
}

//컴포넌트 생성자 함수
function component(w,h,c,x,y){
    this.x = x;
    this.y = y;
    this.c = c;
    this.w = w;
    this.h = h;
    this.speedX = 0;
    this.speedY = 0;
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = c;
        ctx.fillRect(this.x, this.y , this.w, this.h);
    }
    this.newPos = function(){
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

function moveRight(){
    myGamePiece.speedX += 1;
}
function moveLeft(){
    myGamePiece.speedX -= 1;
}
function moveUp(){
    myGamePiece.speedY -= 1;
}
function moveDown(){
    myGamePiece.speedY += 1;
}
function moveStop(){
    myGamePiece.speedX = myGamePiece.speedY =0;
}

//화면 제어함수
function updateGameArea() {
    var mGAkeys = myGameArea.keys;
    myGameArea.clear();
    // myGamePiece.x += 1
    if(mGAkeys && mGAkeys[37]) { myGamePiece.speedX = -1; }
    if(mGAkeys && mGAkeys[39]) myGamePiece.speedX = 1;
    if(mGAkeys && mGAkeys[38]) myGamePiece.speedY = -1;
    if(mGAkeys && mGAkeys[40]) myGamePiece.speedY = 1;
    // if(!mGAkeys) moveStop();
    myGamePiece.newPos();
    myGamePiece.update();
}