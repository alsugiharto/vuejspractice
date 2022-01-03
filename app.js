new Vue({
    el: '#vue-app',
    data:{
        varname: 'Al',
        varjob: 'Programmer',
        varheight: 183,
        varhtmlelement: '<p>hair color: black</p>',
        varnumber: 100,
        varmousex: 0,
        varmousey: 0,
        varwarna_box_biru: false,
        varwarna_text_white: false,
        var_conditional_status_blue: true,
        var_conditional_status_red: true,
        var_conditional_status_yellow: true,
        var_numbers: ["satu","dua","tiga","emptat","lima"],
        var_hobbies: [
            {hobby:"football", tool:"big ball", player:11},
            {hobby:"tennis", tool:"small ball", player:2},
            {hobby:"diving", tool:"parasut", player:2}
        ]
    },
    methods:{
        greet: function(time){
            return "Good "+time+" "+this.varname;
        },
        add: function(inc){
            console.log('add')
            this.varnumber += inc;
        },
        minus: function(dec){
            console.log('minus')
            this.varnumber -= dec;
        },
        catchEvent: function(){
            this.varmousex = event.offsetX;
            this.varmousey = event.offsetY;
        },
        helloAlert: function(){
            console.log('halo');
            alert("hello");
        },
        funPress: function(jenis){
            console.log('you have entered your '+jenis);
        },


    }, computed:{
        dynamicCssClass: function(){
            return{
                warna_box_biru : this.varwarna_box_biru,
                warna_text_white: this.varwarna_text_white,
                default_box: true
            };
        }
    }
});

var vue_app_1 = new Vue({
    el: '#vue-app-1',
    data:{
        important_text: "nothing"
    }
});

var vue_app_2 = new Vue({
    el: '#vue-app-2',
    data:{
        important_text: "nothing"
    },
    methods:{
        changeText: function(){
            vue_app_1.important_text = "the text is changed";
        }
    }
});

// change the important text in both vue instances
vue_app_1.important_text = "This is the text for vue instance 1"
vue_app_2.important_text = "This is the text for vue instance 2"