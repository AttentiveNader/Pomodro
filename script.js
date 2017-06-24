new Vue({
    el: '#app',
    data:{
        status:"",
    howFill:6.2,
     form:{
      breakLength: 5,
      workLength: 25,
     },
     mins:00,
     seconds: 00,
     pauser: false,
     counter:0,
     status: ""
    },
    methods:{
     pause:function(){
         let self = this
     self.pauser = !self.pauser
 },
 time:function(mins){
     let self = this
     window.clearInterval(self.workTimer)
     window.clearInterval(self.breakTimer)
     self.seconds = 59
 },
 start: function(){
   
   let self = this
   window.clearInterval(self.workTimer)
   window.clearInterval(self.breakTimer)
   self.status = "Work..."
   self.seconds = 59
   self.mins = self.form.workLength -1 
   self.workTimer =  setInterval(function(){
       if(!self.pauser){
       if(self.seconds>0){
       self.seconds = self.seconds -1
    } else if(self.mins=== 0){
        self.status = "Break!!!"
        self.counter += 1
        window.clearInterval(self.workTimer)
        self.seconds = 59
        self.mins  = self.form.breakLength -1
        self.breakTimer = setInterval(()=>{ 
            if(!self.pauser){
                if(self.seconds>0){
                    self.seconds = self.seconds - 1
                } else if(self.mins ===0){
                        if(self.counter<4){
                       self.start()   
                    }
                }else{
                    self.seconds = 59
                    self.mins = self.mins-1
                }
             self.howFill =  (self.mins * 60 + self.seconds) * 6.2 / (self.form.breakLength * 60 )
            }
        },1000)
    }
     else{
        self.seconds = 59
           self.mins = self.mins -1
       }

       self.howFill =  (self.mins * 60 + self.seconds) * 6.2 / (self.form.workLength * 60 )

       }
  },1000)
  if(self.counter<4){
  //    self.start()
  }
 }
    },
    computed :{
    filler:function(){
        var self = this
        var canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');

ctx.clearRect(0,0,canvas.width,canvas.height)
ctx.beginPath();
ctx.fillStyle="red";
ctx.ellipse(125, 70, 65, 65,135 * Math.PI/180, self.howFill, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.fillStyle="blue";
ctx.ellipse(125, 70, 65, 65,135 * Math.PI/180, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.fillStyle="gray";
ctx.ellipse(125, 70, 55, 55,200 * Math.PI/180, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();


    }
},
mounted :function(){
           var self = this
        var canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');


ctx.beginPath();
ctx.fillStyle="red";
ctx.ellipse(125, 70, 65, 65,135 * Math.PI/180, self.howFill, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.beginPath();
ctx.fillStyle="blue";
ctx.ellipse(125, 70, 65, 65,135 * Math.PI/180, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.fillStyle="gray";
ctx.ellipse(125, 70, 55, 55,200 * Math.PI/180, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

 }
})



      


