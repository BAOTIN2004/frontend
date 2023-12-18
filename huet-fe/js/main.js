function fibonacci(n){
    var a=0;
    var b=1;
    var fibo;
    for(var i=1;i<=n;i++){
        fibo=a+b;
        b=a;
        a=fibo;
        document.write(fibo+" " )
    }
}

function daonguoc(){
    var n=prompt('Nhap n')
    if(n>0){
        var sodaonguoc=0;
        var chusocuoi;

        while(n>0){
            chusocuoi=n%10;
            sodaonguoc=sodaonguoc*10+chusocuoi;
            n=Math.floor(n/10)
        }
        console.log(sodaonguoc)
    }   
    else {
        console.log('nhap so duong')
    }
}

