<template>
    <div>
        <div class="logobar">
            <b-container>
            <b-row>
                <b-col>
                    <img v-if="showBackArrow" @click="goOff()" class="arrowiconimg" src="@/assets/keyboard_arrow_left.svg">
                </b-col>
                <b-col class="text-center">
                    <div v-if="showText" class="text">{{navText}}</div>
                    <!--暫時link到空頁面-->
                    <router-link v-else to="/temp">
                        <img class="logoimg" src="@/assets/logo.svg">
                    </router-link> 
                </b-col>
                <b-col class="imgright">
                    <!--暫時link到空頁面-->
                    <router-link v-if="showRecord" to="/temp">
                        <img  class="usericonimg" src="@/assets/recored.svg">
                    </router-link> 
                    <!--暫時link到空頁面-->
                    <router-link v-if="showUser" to="/temp">
                        <img  class="usericonimg" src="@/assets/usericon.svg">
                    </router-link> 
                </b-col>
            </b-row>
            </b-container> 
        </div>
        <div class="emptybar"></div>
    </div>

  
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      
    };
  },
  methods:{
    goOff(){
        //回到上一頁
        this.$router.go(-1);
    }
  },
  props: { //props讀取外部傳入的屬性。
    showText:Boolean,
    showBackArrow:Boolean,
    showRecord:Boolean,
    showUser:Boolean,
    navText: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.logobar {
    z-index: 1;
    position:fixed;
    
    width:100%;
    top: 0px;
    margin:0px auto;
    background: #FFFFFF;
    box-shadow: 0px 2px 10px rgba(118, 156, 145, 0.25);

    /* 讓內容物垂直置中*/
    height:50px;
    line-height : 50px;
    
    
}
.logoimg {    
    height: 20px;
    width: auto; 
}
.usericonimg{
    height: 28px;
    width: auto;
    padding-right: 12.5%;

}
.arrowiconimg{
    height: 24px;
    width: auto;
    padding-left: 12.5%;

}
.imgright{
    text-align: right;
}
.emptybar{
    height: 50px;
    background-color: #FFFFFF;
}
.text{
    font-family: Taipei Sans TC Beta;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    text-align: center;
    color: #20E2D7;

    white-space: nowrap; /* 強制不換行 */


    /* 不知道為甚麼一直沒辦法很完美的垂直置中(視覺上感覺會差一點點)只好先用這樣的方法...*/
    margin-top: 2px;
}
</style>