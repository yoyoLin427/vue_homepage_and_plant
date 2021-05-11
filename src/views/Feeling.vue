<template>
    <div>
        <Nav showUser=true />
        <!--
            心情小樹區
        -->
        <div class="plant" >
            <b-container style="padding-top:15px;">
                <b-row align-v="center" >
                    <b-col @click="clickWatering">
                        <img   src="@/assets/btn_plant_water.svg">
                    </b-col>
                    <b-col class="text-center">
                        <div class="btn_stage">第1階段</div>
                    </b-col>
                    <b-col class="img_right">
                        <!--期中先不demo
                            <img  src="@/assets/btn_plant_arrow.svg">
                        -->
                    </b-col>
                </b-row>
            </b-container> 
            <div class="text" id="text_watering">距離下一階段還需澆水3次</div>
            <img  class="cloud" src="@/assets/plant_cloud.svg">
            <img  class="cloud" src="@/assets/plant_cloud.svg">
            <img  class="cloud" src="@/assets/plant_cloud.svg">

            
            <!--一開始的小樹-->
            <img  id="stalk" ref="stalk" src="@/assets/plant_stalk.svg">
            <img  ref="leaf_2"  id="leaf_2" src="@/assets/plant_leaf_deep.svg">
            <img  ref="leaf_1"  id="leaf_1" src="@/assets/plant_leaf_light.svg">
            
            <!--多長的-->
            <img  id="stalk1" ref="stalk1" src="@/assets/plant_another_stalk1.svg">
            <img  ref="leaf_3"  id="leaf_3" src="@/assets/plant_leaf_deep.svg">
            <img  ref="leaf_4"  id="leaf_4" src="@/assets/plant_leaf_light.svg">
            <img  ref="leaf_5"  id="leaf_5" src="@/assets/plant_leaf_deep.svg">

            <!--澆水-->
            <img  ref="watercan"  id="watercan" src="@/assets/plant_watercan.svg">
            <img  ref="drop1"  id="drop1" src="@/assets/plant_drop.svg">
            <img  ref="drop2"  id="drop2" src="@/assets/plant_drop.svg">
            <img  ref="drop3"  id="drop3" src="@/assets/plant_drop.svg">
            <img  ref="drop4"  id="drop4" src="@/assets/plant_drop.svg">


            <img  id="rock" src="@/assets/plant_rock.svg">

        </div>
        
        
        <div class="title">心情成長樹</div>
        <div class="text" id="text_diary">透過定期撰寫心情日記與測試壓力量表可以讓你更了解自己，也可以在諮商時讓心理師更清楚的你的狀態！</div>
        <b-container>
            <b-row>
                <b-col class="text-center">
                    <router-link to="/diary">
                        <img  src="@/assets/btn_plant_diary.svg">
                    </router-link>
                </b-col>
                <b-col class="text-center">
                        <img  src="@/assets/btn_plant_press.svg">
                </b-col>
                    
            </b-row>
        </b-container> 

        
        
        <Footer showMood=true />
    </div>
    
</template>
<style scoped>
.plant{
    
    position: relative;
    height: 307px;
    width: 375px;
    background: url("../assets/plant_background.svg") no-repeat center;
    background-size:contain;
}
#stalk{
    position:absolute;
    left: 50%;
    top:80%;
}
#stalk1{
    transform: scale(0); /* 0.7 */
    position:absolute;
    left:51.3%;
    top:78%;
}
#rock{
    position:absolute;
    left: 41.5%;
    top:86%;
}
#leaf_1{
    position:absolute;
    left: 50%;
    top:69%;
}
#leaf_2{
    position:absolute;
    left: 45.5%;
    top:74%;
}
#leaf_3{
    position:absolute;
    left: 49%;
    top:73.4%;
    transform: scale(0) ; /* 0.4 */
}
#leaf_4{
    position:absolute;
    left: 53.5%;
    top:67.6%;
    transform: scale(0) ; /* 0.5 */
}
#leaf_5{
    position:absolute;
    left: 46.5%;
    top:77.4%;
    transform: scale(0) ; /* scale(0.7) rotate(-20deg) */
}
#watercan{
    position:absolute;
    left: 59.5%;
    top:25.4%;
    opacity: 0;
}
#drop1{
    position:absolute;
    left: 53.5%;
    top:52.4%;
    opacity: 0;
}
#drop2{
    position:absolute;
    left: 55.5%;
    top:58.4%;
    opacity: 0;
    transform: rotate(-35deg);
}
#drop3{
    position:absolute;
    left: 46.5%;
    top:59.4%;
    opacity: 0;
    transform: rotate(-15deg) scale(0.8);
}
#drop4{
    position:absolute;
    left: 50.5%;
    top:66.4%;
    opacity: 0;
    transform: rotate(-25deg) ;
}
.stalk1grow{
    /* animation 參數設定 */
    animation-name:stalk1growup;    /*動畫名稱，需與 keyframe 名稱對應*/
    animation-duration: 2s;    /*動畫持續時間，單位為秒*/
    animation-delay: 1.3s;    /*動畫延遲開始時間*/
    animation-iteration-count: 1;    /*動畫次數，infinite 為無限次*/ 
    animation-fill-mode :forwards;
    /*右下角*/
    transform-origin: center bottom;
}
.leaf3grow{
    /* animation 參數設定 */
    animation-name:leaf3growup;    /*動畫名稱，需與 keyframe 名稱對應*/
    animation-duration: 2s;    /*動畫持續時間，單位為秒*/
    animation-delay: 1.8s;    /*動畫延遲開始時間*/
    animation-iteration-count: 1;    /*動畫次數，infinite 為無限次*/ 
    animation-fill-mode :forwards;
    /*右下角*/
    transform-origin: right bottom;
}
.leaf4grow{
    /* animation 參數設定 */
    animation-name:leaf4growup;    /*動畫名稱，需與 keyframe 名稱對應*/
    animation-duration: 2s;    /*動畫持續時間，單位為秒*/
    animation-delay: 1.8s;    /*動畫延遲開始時間*/
    animation-iteration-count: 1;    /*動畫次數，infinite 為無限次*/ 
    animation-fill-mode :forwards;
    /*右下角*/
    transform-origin: left bottom;
}
.leaf5grow{
    /* animation 參數設定 */
    animation-name:leaf5growup;    /*動畫名稱，需與 keyframe 名稱對應*/
    animation-duration: 2s;    /*動畫持續時間，單位為秒*/
    animation-delay: 2s;    /*動畫延遲開始時間*/
    animation-iteration-count: 1;    /*動畫次數，infinite 為無限次*/ 
    animation-fill-mode :forwards;
    /*右下角*/
    transform-origin: right bottom;
}
.drop1{
    /* animation 參數設定 */
    animation-name:drop;    /*動畫名稱，需與 keyframe 名稱對應*/
    animation-duration: 1s;    /*動畫持續時間，單位為秒*/
    animation-delay: 0.4s;    /*動畫延遲開始時間*/
    animation-iteration-count: 1;    /*動畫次數，infinite 為無限次*/ 
    animation-fill-mode :forwards;
}
.drop2{
    /* animation 參數設定 */
    animation-name:drop;    /*動畫名稱，需與 keyframe 名稱對應*/
    animation-duration: 1s;    /*動畫持續時間，單位為秒*/
    animation-delay: 0.6s;    /*動畫延遲開始時間*/
    animation-iteration-count: 1;    /*動畫次數，infinite 為無限次*/ 
    animation-fill-mode :forwards;
}
.drop3{
    /* animation 參數設定 */
    animation-name:drop;    /*動畫名稱，需與 keyframe 名稱對應*/
    animation-duration: 1s;    /*動畫持續時間，單位為秒*/
    animation-delay: 0.8s;    /*動畫延遲開始時間*/
    animation-iteration-count: 1;    /*動畫次數，infinite 為無限次*/ 
    animation-fill-mode :forwards;
}
.drop4{
    /* animation 參數設定 */
    animation-name:drop;    /*動畫名稱，需與 keyframe 名稱對應*/
    animation-duration: 1s;    /*動畫持續時間，單位為秒*/
    animation-delay: 1s;    /*動畫延遲開始時間*/
    animation-iteration-count: 1;    /*動畫次數，infinite 為無限次*/ 
    animation-fill-mode :forwards;
}
.grow{
    /* animation 參數設定 */
    animation-name:growup;    /*動畫名稱，需與 keyframe 名稱對應*/
    animation-duration: 2s;    /*動畫持續時間，單位為秒*/
    animation-delay: 1s;    /*動畫延遲開始時間*/
    animation-iteration-count: 1;    /*動畫次數，infinite 為無限次*/ 
    animation-fill-mode :forwards;
    /*右下角*/
    transform-origin: center bottom;


}
.watercan{
    /* animation 參數設定 */
    animation-name:watercan;    /*動畫名稱，需與 keyframe 名稱對應*/
    animation-duration: 2s;    /*動畫持續時間，單位為秒*/
    animation-delay: 0s;    /*動畫延遲開始時間*/
    animation-iteration-count: 1;    /*動畫次數，infinite 為無限次*/ 
    animation-fill-mode :forwards;
    /*右下角*/
    transform-origin: right bottom;
}
@keyframes drop{
    0% { opacity: 0;}
    50% { opacity: 1;}
    100% { opacity: 0;}
}
@keyframes leaf3growup{
    0% { transform: scale(0)}
    50% { transform: scale(0.4) rotate(20deg)}
    100% { transform: scale(0.4) rotate(20deg)}
}

@keyframes watercan{
    0% { opacity: 0}
    15% { opacity: 1; transform: rotate(-10deg);}
    75% { opacity: 1; transform: rotate(-15deg);}
    100% { opacity: 0; }
}

@keyframes leaf4growup{
    0% { transform: scale(0)}
    50% { transform: scale(0.5) rotate(50deg)}
    100% { transform: scale(0.5) rotate(50deg)}
}
@keyframes leaf5growup{
    0% { transform: scale(0)}
    50% { transform: scale(0.7) rotate(-20deg)}
    100% { transform: scale(0.7) rotate(-20deg)}
}
@keyframes stalk1growup{
    0% { transform: scale(0)}
    50% { transform: scale(0.7) }
    100% { transform: scale(0.7) }
}
@keyframes growup{
    0% { transform: translateY(0px)}
    50% { transform: translateY(-10px) }
    100% { transform: translateY(-10px) }
}
@keyframes open-right {
  0% { transform: rotate(0) }
  50% { transform: rotate(5deg) }
  100% { transform: rotate(0) }
}
.leaf_left_animation{
    /* animation 參數設定 */
    animation-name:open-left;    /*動畫名稱，需與 keyframe 名稱對應*/
    animation-duration: 2s;    /*動畫持續時間，單位為秒*/
    animation-delay: 0s;    /*動畫延遲開始時間*/
    animation-iteration-count: infinite;    /*動畫次數，infinite 為無限次*/ 
    /*右下角*/
    transform-origin: 100% 100%;

}
@keyframes open-left {
  0% { transform: rotate(0) }
  50% { transform: rotate(-5deg) }
  100% { transform: rotate(0) }
}
@keyframes bloom-left {
    /* 長出來 */
  0% {
    -webkit-transform: rotate(15deg) scale(0);
    transform: rotate(15deg) scale(0);
  }
  10% {
    -webkit-transform: rotate(15deg) scale(1.2);
    transform: rotate(15deg) scale(1.2);
  }
  25% {
    -webkit-transform: rotate(15deg) scale(1);
    transform: rotate(15deg) scale(1);
  }
  45% {
    -webkit-transform: rotate(15deg) scale(1);
    transform: rotate(15deg) scale(1);
  }
  55% {
    -webkit-transform: rotate(15deg) scale(1.2);
    transform: rotate(15deg) scale(1.2);
  }
  70% {
    -webkit-transform: rotate(15deg) scale(0);
    transform: rotate(15deg) scale(0);
  }
  100% {
    -webkit-transform: rotate(15deg) scale(0);
    transform: rotate(15deg) scale(0);
  }
}



@keyframes PlantAni{
    0%{
        transform: scale(1);
    }
    33%{
        transform: scale(0.95);
    }
    66%{
        transform: scale(1.05);
    }
    100%{
        transform: scale(1);
    }
}
.cloud{
    position:absolute;
    animation: clouds 8s linear infinite;
}
.cloud:nth-of-type(1){
    left: 45px;
    top: 30px;   
}
.cloud:nth-of-type(2){
    right: 25px;
    top: 5px;   
}
.cloud:nth-of-type(3){
    left: 100px;
    top: 80px;   
}
@keyframes clouds {
    50% {
    transform: translateX(20px);
    }
    100% {
    transform: translateX(0);
    }
}
.btn_stage{
    /* 按鈕圖案 */

    background: linear-gradient(180deg, #F9FEA5 -214.29%, #96FBC4 -47.3%, #20E2D7 126.79%);
    border-radius: 33px;
    height: 32px;
    width: 155px;
        
    line-height: 32px;    

    /* 字 */ 
    font-family: Taipei Sans TC Beta;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: #FFFFFF;


}
.btn_circle{
    height: auto;
    width: 132px;


}
#text_diary{
    text-align: left;
    padding-left: 6%;
    padding-right: 6%;
    margin-top:10px;
    margin-bottom: 15px;
}


.title{
    

    font-family: Taipei Sans TC Beta;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 34px;

    text-align: center;
    
    color: #4F4F4F;
    padding-top: 3%;
}
#text_watering{
    margin-top: -5px;
    text-align: center;
}
.text{
    font-family: Taipei Sans TC Beta;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 18px;
    /* identical to box height, or 138% */
    
    /* 深灰 */

    color: #5C5C5C;
}

.img_right{
    text-align: right;
}




</style>
<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'Feeling',
    data(){
        return{

        }
    },
    methods: {
        clickWatering: function() {
            
            //重啟動畫            
            this.$refs.stalk.classList.remove("grow"); 
            this.$refs.leaf_1.classList.remove("grow"); 
            this.$refs.leaf_2.classList.remove("grow");  
            this.$refs.stalk1.classList.remove("stalk1grow"); 
            this.$refs.leaf_3.classList.remove("leaf3grow");
            this.$refs.leaf_4.classList.remove("leaf4grow");
            this.$refs.leaf_5.classList.remove("leaf5grow"); 
            this.$refs.watercan.classList.remove("watercan");
            this.$refs.drop1.classList.remove("drop1"); 
            this.$refs.drop2.classList.remove("drop2"); 
            this.$refs.drop3.classList.remove("drop3"); 
            this.$refs.drop4.classList.remove("drop4");           
            this.timeout = setTimeout(() => {
               
                this.$refs.stalk.classList.add("grow");
                this.$refs.leaf_1.classList.add("grow");
                this.$refs.leaf_2.classList.add("grow");
                this.$refs.stalk1.classList.add("stalk1grow");
                this.$refs.leaf_3.classList.add("leaf3grow");
                this.$refs.leaf_4.classList.add("leaf4grow");
                this.$refs.leaf_5.classList.add("leaf5grow");
                this.$refs.watercan.classList.add("watercan");
                this.$refs.drop1.classList.add("drop1");
                this.$refs.drop2.classList.add("drop2");
                this.$refs.drop3.classList.add("drop3");
                this.$refs.drop4.classList.add("drop4");

                

            }, 100);


            
        }
    },
    components:{
        Nav,
        Footer
    }
}
</script>
