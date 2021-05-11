<template>
    <div>
        
        <Nav showBackArrow=ture showText=true navText="心情日記" />    
        <div class="background">
            <div class="text">有什麼想法或煩惱就寫下來吧！</div>
            <router-link to="/diary/write">
                <img  src="@/assets/diary_main_btn_write.svg">
            </router-link>
            <img  src="@/assets/diary_main_btn_history.svg">
            <img  id="img" src="@/assets/diary_background.svg">
        </div>
        
    </div>
    
</template>
<style scoped>
#img{
    padding-top: 30px;
    
}
.text{
    font-family: Taipei Sans TC Beta;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: #5C5C5C;

    /*位置*/
    text-align: center;
    padding-top:10vh;
    padding-bottom: 2vh;

}
.background{    
    height: 637px;
    background: linear-gradient(180deg, #FFFFFF 42.2%, #9FFBDF 203.98%, #40E9D2 270.1%);
    text-align: center;
    overflow:hidden;
}
</style>
<script>
import Nav from '@/components/Nav.vue'

export default {
    name: 'Feeling',
    components:{
        Nav,
        
    }
}
</script>