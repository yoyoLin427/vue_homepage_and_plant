<template>
    <div>
        <div class="emptybar"></div>
        <div class="footerbar">
            <b-container>
            <b-row>
                <b-col class="text-center">
                    <!--暫時link到空頁面-->
                    <router-link to="/temp">
                        <img  v-if="showHome" class="iconimg" src="@/assets/homeA.svg">
                        <img  v-else class="iconimg" src="@/assets/home.svg">
                        <div v-if="showHome" class="icontext iconActivetext">首頁</div>
                        <div v-else class="icontext iconGraytext">首頁</div>
                    </router-link> 
                </b-col>
                <b-col class="text-center">
                    <!--暫時link到空頁面-->
                    <router-link to="/temp">
                        <img  v-if="showSchedule" class="iconimg" src="@/assets/scheduleA.svg">
                        <img  v-else class="iconimg" src="@/assets/schedule.svg">
                        <div v-if="showSchedule" class="icontext iconActivetext">諮商預約</div>
                        <div v-else class="icontext iconGraytext">諮商預約</div>
                    </router-link> 
                </b-col>
                <b-col class="text-center">
                    <router-link to="/feeling">
                        <img  v-if="showMood" class="iconimg" src="@/assets/moodA.svg">
                        <img  v-else class="iconimg" src="@/assets/mood.svg">
                        <div v-if="showMood" class="icontext iconActivetext">心情紀錄</div>
                        <div v-else class="icontext iconGraytext">心情紀錄</div>
                    </router-link> 
                </b-col>
                <b-col class="text-center">
                    <!--暫時link到空頁面-->
                    <router-link to="/temp">
                        <img  v-if="showResouce" class="iconimg" src="@/assets/resouceA.svg">
                        <img  v-else class="iconimg" src="@/assets/resouce.svg">
                        <div v-if="showResouce" class="icontext iconActivetext">其他資源</div>
                        <div v-else class="icontext iconGraytext">其他資源</div>
                    </router-link> 
                </b-col>
            </b-row>
            </b-container>
             
        </div>
        
    </div>

  
</template>


<script>
export default {
  name: 'Footer',
  data() {
    return {
      
    };
  },
  props: { //props讀取外部傳入的屬性。
    showHome:Boolean,
    showMood:Boolean,
    showResouce:Boolean,
    showSchedule:Boolean
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.footerbar {
    position:fixed;
    height:49px;
    width:100%;
    bottom: 0px;
    margin:0px auto;
    background: #FFFFFF;
    box-shadow: 0px -0.5px 0px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(20px);
   
}

.iconimg{
    height: 22px;
    width: auto;

    /* icon圖片位置 */
    margin-top: 6.8%;
    margin-bottom: 2.33%;
}
.icontext{
    font-family: PingFang TC;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 14px;
    color: #C7C7C7;
}
.iconGraytext{
    
    color: #C7C7C7;
}
.iconActivetext{

    /* 漸層 */
    background: linear-gradient(180deg, #F9FEA5 -214.29%, #96FBC4 -47.3%, #20E2D7 126.79%);
    
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.emptybar{
    height: 49px;
    background-color: #FFFFFF;
}

a{
    text-decoration:none;
}
</style>