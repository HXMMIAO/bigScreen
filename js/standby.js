
function carouse(){
    var arr=[
        {display:'inline-block',width:'420px',height:'380px',marginTop:'90px',transform:'rotateY(-10deg)',WebkitTransform:'rotateY(-11deg)',MozTransform:'rotateY(-10deg)'},
        {display:'inline-block',width:'985px',height:'600px',marginTop:'0',transform:'rotateY(0deg)',WebkitTransform:'rotateY(0deg)',MozTransform:'rotateY(0deg)'},
        {display:'inline-block',width:'420px',height:'380px',marginTop:'90px',transform:'rotateY(10deg)',WebkitTransform:'rotateY(11deg)',MozTransform:'rotateY(10deg)'},
        {display:'none'},
        {display:'none'},
       
    ];
    var arr1=[
        {left:'0',zIndex:'4'},
        {left:'520px',zIndex:'5'},
        {left:'1600px',zIndex:'3'},
        {left:'0',zIndex:'2'},
        {left:'0',zIndex:'2'},
        
    ];
    function move(){
        $('.standby-carousel').each(function (e,a) {
        	 //console.log($(a));
            $(a).finish().animate(arr1[e],1000).css(arr1[e]).find('div').animate(arr[e],1000).css(arr[e])
            
        })
    }
    move();
    var set;
    function setaa() {
        set=setInterval(function () {
            arr.unshift(arr.pop());
            arr1.unshift(arr1.pop());
            move();
        },10000)
    }
    setaa()
    // $('.standby-box').mouseover(function (event) {
    //     var event=event.target||window.target;
    //     if(event.className.indexOf('standby-car')>=0){
    //         clearInterval(set)
    //     }else{
    //         setaa()
    //     }
    // });
}
carouse();
