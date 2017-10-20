var data_y;

var dialogLib = {
start:{
  _CB:function(){},
  _bClicked:function(){
    _CB();
    $(".wrapper1").remove();
  },
  show: function(msg,label,callback){
 _CB=callback=callback || function(){};
 label=label || "OK";
    var outS = "";
    outS += "<div class='wrapper1'>" +
        "<div class='frame1'>" +
          "<h1>" + msg + "</h1>"+
          "<button class=but onclick='dialogLib.start._bClicked()'>"+label+"</button>"+   
        "</div>"+
      "</div>";
    $("body").append(outS);
  }
},
  login:{
    _yCB: function(){},
    _nCB: function(){},
    _yesClicked: function(){
      var val1 = $(".wrapper .frame .userInput").val();
      var val2 = $(".wrapper .frame .pwdInput").val();
      _yCB(val1,val2);
      $(".wrapper").remove();
    },
    _noClicked: function(){
      var val1 = $(".wrapper .frame .userInput").val();
      var val2 = $(".wrapper .frame .pwdInput").val();
      _nCB(val1,val2);
      $(".wrapper").remove();
    },
    _handleKD: function(e){
	var key = e.key.toLowerCase();
	if(key == "escape"){
	   dialogLib.login._noClicked();
	}
	else if(key == "enter"){
	   dialogLib.login._yesClicked();
	}
    },

    show: function(msg1, msg2, yesLabel, noLabel, yesCB, noCB){
      yesLabel = yesLabel || "OK";
      noLabel = noLabel || "Cancel";
      _yCB = yesCB = yesCB || function(){};
      _nCB = noCB = noCB || function(){};
      var outS = "";
      outS += "<div class='wrapper'>" +
          "<div class='frame'>" +
            "<h1>" + msg1 + "</h1>"+
            "<input onkeydown='dialogLib.login._handleKD(event)' type='text' class='userInput'/>"+
            "<h1>" + msg2 + "</h1>"+
            "<input onkeydown='dialogLib.login._handleKD(event)' type='password' class='pwdInput'/>"+"<br/>"+"<br/>"+
            "<button onclick='dialogLib.login._noClicked()'>" + noLabel + "</button>"+"&nbsp;&nbsp;&nbsp;"+
            "<button onclick='dialogLib.login._yesClicked()'>" + yesLabel + "</button>"+
          "</div>"+
        "</div>";
      $("body").append(outS);
      $(".wrapper .frame .userInput").focus();
    }
  },

  signup:{
    _yCB: function(){},
    _nCB: function(){},
    _yesClicked: function(){
      var val1 = $(".wrapper .frame .userInput").val();
      var val2 = $(".wrapper .frame .pwdInput").val();
      _yCB(val1,val2);
      $(".wrapper").remove();
    },
    _noClicked: function(){
      var val1 = $(".wrapper .frame .userInput").val();
      var val2 = $(".wrapper .frame .pwdInput").val();
      _nCB(val1,val2);
      $(".wrapper").remove();
    },
    _handleKD: function(e){
  var key = e.key.toLowerCase();
  if(key == "escape"){
     dialogLib.signup._noClicked();
  }
  else if(key == "enter"){
     dialogLib.signup._yesClicked();
  }
    },

    show: function(msg1,msg2, yesLabel, noLabel, yesCB, noCB){
      yesLabel = yesLabel || "OK";
      noLabel = noLabel || "Cancel";
      _yCB = yesCB = yesCB || function(){};
      _nCB = noCB = noCB || function(){};
      var outS = "";
      outS += "<div class='wrapper'>" +
          "<div class='frame'>" +
            "<h1>" + msg1 + "</h1>"+
            "<input onkeydown='dialogLib.signup._handleKD(event)' type='text' class='userInput'/>"+
            "<h1>" + msg2 + "</h1>"+
            "<input onkeydown='dialogLib.signup._handleKD(event)' type='password' class='pwdInput'/>"+"<br/>"+"<br/>"+
            "<button onclick='dialogLib.signup._noClicked()'>" + noLabel + "</button>"+"&nbsp;&nbsp;&nbsp;"+
            "<button onclick='dialogLib.signup._yesClicked()'>" + yesLabel + "</button>"+
          "</div>"+
        "</div>";
      $("body").append(outS);
      $(".wrapper .frame .userInput").focus();
    }
}

}
