onload = function(){
    myDigital.start();
}
var myDigital = {
    canvas : document.createElement("canvas"),
    lineColor : "grey",
    timeColor : "yellow",
    lineWidth : 5,
    lineCap : "round",
    start : function(){
        this.canvas.width = 500;
        this.canvas.height = 240;
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        //
        this.ctx = this.canvas.getContext("2d");
        // 타이머
        this.setinterval = setInterval(clockBord,1000);
        this.setinterval = setInterval(timeHour1,1000);
        this.setinterval = setInterval(timeHour2,1000);
        this.setinterval = setInterval(timeMin1,1000);
        this.setinterval = setInterval(timeMin2,1000);
    },
    clear : function(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
function clockBord(){
    myDigital.clear();
    myDigital.ctx.translate(20,30);
    myDigital.ctx.strokeStyle = myDigital.lineColor;
    myDigital.ctx.lineWidth = myDigital.lineWidth;
    myDigital.ctx.lineCap = myDigital.lineCap;
    // 시간 좌측 직선
    myDigital.ctx.moveTo(0,0);
    myDigital.ctx.lineTo(0,180);
    myDigital.ctx.stroke();
    //시간 우측 사각형 2개
    myDigital.ctx.translate(40,0);
    myDigital.ctx.strokeRect(0,0,90,90);
    myDigital.ctx.translate(0,90);
    myDigital.ctx.strokeRect(0,0,90,90);
    // 시, 분 분리 위쪽 원
    myDigital.ctx.beginPath()
    myDigital.ctx.translate(140,-30);
    myDigital.ctx.fillStyle = myDigital.timeColor;
    myDigital.ctx.arc(0,0,5,0,2*Math.PI);
    myDigital.ctx.fill();
    // 시, 분 분리 아래쪽 원
    myDigital.ctx.beginPath()
    myDigital.ctx.translate(0,60);
    myDigital.ctx.fillStyle = myDigital.timeColor;
    myDigital.ctx.arc(0,0,5,0,2*Math.PI);
    myDigital.ctx.fill();
    //분 좌측 사각형 2개
    myDigital.ctx.beginPath();
    myDigital.ctx.translate(50,-120)
    myDigital.ctx.strokeRect(0,0,90,90);
    myDigital.ctx.translate(0,90);
    myDigital.ctx.strokeRect(0,0,90,90);
    //분 우측 사각형 2개;
    myDigital.ctx.beginPath();
    myDigital.ctx.translate(140,-90)
    myDigital.ctx.strokeRect(0,0,90,90);
    myDigital.ctx.translate(0,90);
    myDigital.ctx.strokeRect(0,0,90,90);
    //기준전 돌아가기
    myDigital.ctx.translate(-370,-90) // 좌측 맨 위에서 (20,30) 위치
    myDigital.ctx.translate(-20,-30);
}
function timeHour1(){
    myDigital.ctx.translate(20,30);
    var now = new Date();
    var hour = now.getHours();
    if(hour>12){
        hour -= 12;
    }
    if(hour>9){ //10~12시 일때 10의 자리 시간 표시
        time1();
    }
    if(hour == 0){
        time1();
    }
}
function timeHour2(){
    var now = new Date();
    var hour = now.getHours();
    if(hour>12){
        hour-=12;
    }
    if(hour==0){
        myDigital.ctx.translate(40,0)
        time2();
        myDigital.ctx.translate(-40,0)
    }
    if(hour==1){
        myDigital.ctx.translate(130,0)
        time1();
        myDigital.ctx.translate(-130,0)
    }
    if(hour==2){
        myDigital.ctx.translate(40,0)
        time2();
        myDigital.ctx.translate(-40,0)
    }
    if(hour==3){
        myDigital.ctx.translate(40,0)
        time3();
        myDigital.ctx.translate(-40,0)
    }
    if(hour==4){
        myDigital.ctx.translate(40,0)
        time4();
        myDigital.ctx.translate(-40,0)
    }
    if(hour==5){
        myDigital.ctx.translate(130,0)
        time5();
        myDigital.ctx.translate(-130,0)
    }
    if(hour==6){
        myDigital.ctx.translate(130,0)
        time6();
        myDigital.ctx.translate(-130,0)
    }
    if(hour==7){
        myDigital.ctx.translate(40,0)
        time7();
        myDigital.ctx.translate(-40,0)
    }
    if(hour==8){
        myDigital.ctx.translate(40,90)
        time8();
        myDigital.ctx.translate(-40,-90)
    }
    if(hour==9){
        myDigital.ctx.translate(130,180)
        mtime9();
        myDigital.ctx.translate(-130,-180)
    }
    if(hour==10){
        myDigital.ctx.translate(40,0)
        time0();
        myDigital.ctx.translate(-40,0)
    }
    if(hour==11){
        myDigital.ctx.translate(130,0)
        time1();
        myDigital.ctx.translate(-130,0)
    }
    if(hour==12){
        myDigital.ctx.translate(40,0)
        time2();
        myDigital.ctx.translate(-40,0)
    }
    myDigital.ctx.translate(-20,-30);
}
function timeMin1(){
    myDigital.ctx.translate(20,30);
    //기준선 이동
    myDigital.ctx.beginPath();
    myDigital.ctx.translate(190,0)
    var now = new Date();
    var min = now.getMinutes();
    if(min<10){
        myDigital.ctx.translate(40,0)
        time0();
        myDigital.ctx.translate(-40,0)
    }
    if(min>9){
        min = Math.floor(min/10);
        if(min==1){
            myDigital.ctx.translate(130,0)
            time1();
            myDigital.ctx.translate(-130,0)
        }
        if(min==2){
            myDigital.ctx.translate(40,0)
            time2();
            myDigital.ctx.translate(-40,0)
        }
        if(min==3){
            myDigital.ctx.translate(40,0)
            time3();
            myDigital.ctx.translate(-40,0)
        }
        if(min==4){
            myDigital.ctx.translate(40,0)
            time4();
            myDigital.ctx.translate(-40,0)
        }
        if(min==5){
            myDigital.ctx.translate(130,0)
            time5();
            myDigital.ctx.translate(-130,0)
        }
    }
    myDigital.ctx.translate(-190,0)
}
function timeMin2(){
    //기준선 이동
    myDigital.ctx.beginPath();
    myDigital.ctx.translate(330,0)
    var now = new Date();
    var min = now.getMinutes();
    if(min>9){
        min = min%10;
    }
    if(min==0){
        myDigital.ctx.translate(40,0)
        time0();
        myDigital.ctx.translate(-40,0)
    }
    if(min==1){
        myDigital.ctx.translate(130,0)
        time1();
        myDigital.ctx.translate(-130,0)
    }
    if(min==2){
        myDigital.ctx.translate(40,0)
        time2();
        myDigital.ctx.translate(-40,0)
    }
    if(min==3){
        myDigital.ctx.translate(40,0)
        time3();
        myDigital.ctx.translate(-40,0)
    }
    if(min==4){
        myDigital.ctx.translate(40,0)
        time4();
        myDigital.ctx.translate(-40,0)
    }
    if(min==5){
        myDigital.ctx.translate(130,0)
        time5();
        myDigital.ctx.translate(-130,0)
    }
    if(min==6){
        myDigital.ctx.translate(130,0)
        time6();
        myDigital.ctx.translate(-130,0)
    }
    if(min==7){
        myDigital.ctx.translate(40,0)
        time7();
        myDigital.ctx.translate(-40,0)
    }
    if(min==8){
        myDigital.ctx.translate(40,90)
        time8();
        myDigital.ctx.translate(-40,-90)
    }
    if(min==9){
        myDigital.ctx.translate(130,180)
        time9();
        myDigital.ctx.translate(-130,-180)
    }
    myDigital.ctx.translate(-330,0)
    myDigital.ctx.translate(-20,-30);
}
// 숫자 출력 함수
function time0(){
    myDigital.ctx.beginPath();
    myDigital.ctx.strokeStyle = myDigital.timeColor;
    myDigital.ctx.moveTo(0,0);
    myDigital.ctx.lineTo(90,0);
    myDigital.ctx.lineTo(90,180);
    myDigital.ctx.lineTo(0,180);
    myDigital.ctx.lineTo(0,0);
    myDigital.ctx.stroke();
}
function time1(){
    myDigital.ctx.beginPath();
    myDigital.ctx.strokeStyle = myDigital.timeColor;
    myDigital.ctx.moveTo(0,0);
    myDigital.ctx.lineTo(0,180);
    myDigital.ctx.stroke();
}
function time2(){
    myDigital.ctx.beginPath();
    myDigital.ctx.strokeStyle = myDigital.timeColor;
    myDigital.ctx.moveTo(0,0);
    myDigital.ctx.lineTo(90,0);
    myDigital.ctx.lineTo(90,90);
    myDigital.ctx.lineTo(0,90);
    myDigital.ctx.lineTo(0,180);
    myDigital.ctx.lineTo(90,180);
    myDigital.ctx.stroke();
}
function time3(){
    myDigital.ctx.beginPath();
    myDigital.ctx.strokeStyle = myDigital.timeColor;
    myDigital.ctx.moveTo(0,0);
    myDigital.ctx.lineTo(90,0);
    myDigital.ctx.lineTo(90,90);
    myDigital.ctx.lineTo(0,90);
    myDigital.ctx.lineTo(90,90);
    myDigital.ctx.lineTo(90,180);
    myDigital.ctx.lineTo(0,180);
    myDigital.ctx.stroke();
}
function time4(){
    myDigital.ctx.beginPath();
    myDigital.ctx.strokeStyle = myDigital.timeColor;
    myDigital.ctx.moveTo(0,0);
    myDigital.ctx.lineTo(0,90);
    myDigital.ctx.lineTo(90,90);
    myDigital.ctx.lineTo(90,0);
    myDigital.ctx.lineTo(90,180);
    myDigital.ctx.stroke();
}
function time5(){
    myDigital.ctx.beginPath();
    myDigital.ctx.strokeStyle = myDigital.timeColor;
    myDigital.ctx.moveTo(0,0);
    myDigital.ctx.lineTo(-90,0);
    myDigital.ctx.lineTo(-90,90);
    myDigital.ctx.lineTo(0,90);
    myDigital.ctx.lineTo(0,180);
    myDigital.ctx.lineTo(-90,180);
    myDigital.ctx.stroke();
}
function time6(){
    myDigital.ctx.beginPath();
    myDigital.ctx.strokeStyle = myDigital.timeColor;
    myDigital.ctx.moveTo(0,0);
    myDigital.ctx.lineTo(-90,0);
    myDigital.ctx.lineTo(-90,180);
    myDigital.ctx.lineTo(0,180);
    myDigital.ctx.lineTo(0,90);
    myDigital.ctx.lineTo(-90,90);
    myDigital.ctx.stroke();
}
function time7(){
    myDigital.ctx.beginPath();
    myDigital.ctx.strokeStyle = myDigital.timeColor;
    myDigital.ctx.moveTo(0,0);
    myDigital.ctx.lineTo(0,90);
    myDigital.ctx.lineTo(0,0);
    myDigital.ctx.lineTo(90,0);
    myDigital.ctx.lineTo(90,180);
    myDigital.ctx.stroke();
}
function time8(){
    myDigital.ctx.beginPath();
    myDigital.ctx.strokeStyle = myDigital.timeColor;
    myDigital.ctx.moveTo(0,0);
    myDigital.ctx.lineTo(90,0);
    myDigital.ctx.lineTo(90,-90);
    myDigital.ctx.lineTo(0,-90);
    myDigital.ctx.lineTo(0,90);
    myDigital.ctx.lineTo(90,90);
    myDigital.ctx.lineTo(90,0);
    myDigital.ctx.stroke();
}
function time9(){
    myDigital.ctx.beginPath();
    myDigital.ctx.strokeStyle = myDigital.timeColor;
    myDigital.ctx.moveTo(0,0);
    myDigital.ctx.lineTo(0,-180);
    myDigital.ctx.lineTo(-90,-180);
    myDigital.ctx.lineTo(-90,-90);
    myDigital.ctx.lineTo(0,-90);
    myDigital.ctx.stroke();
}