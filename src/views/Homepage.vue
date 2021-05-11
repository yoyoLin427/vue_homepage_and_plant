<template>
    <div>
        
        <Nav showUser=ture />
        <div class="banner"></div>
        <div class="title">關於AURA</div>
        <div class="text_nofade">
            Aura是一個為了增進學生心理健康的平台，讓使用者們除了能更快更好的預約到適合的服務，也能以更多元的方式抒發壓力。
        </div>
        

        <!--滑動區塊1-->
        <div style="height: 250px;width:375px;position:relative;overflow:hidden">
            <div class="circle" id="c1" ref="c1"></div>
            <div id="c1_img" ref="c1_img"><img   src="@/assets/home_c1_img.svg"></div>
        </div>
        <div class="title2" ref="c1_title">更人性化的預約體驗</div>
        <div class="text" ref="c1_text">
            Aura 解決目前學生在使用諮商預約系統的痛點，提供匹配機制為使用者媒合理想的心理師條件，同時也優化心理師與諮商時間的預約介面，並提供預約記錄讓使用者們更方便地掌握預約狀態。
        </div>

        <!--滑動區塊2-->
        <div style="height: 250px;width:375px;position:relative;overflow:hidden">
            <div class="circle" id="c2" ref="c2"></div>
            <div id="c2_img" ref="c2_img"><img   src="@/assets/home_c2_img.svg"></div>
        </div>
        <div class="title2" ref="c2_title">促進自我情緒與壓力的了解</div>
        <div class="text" ref="c2_text">
            Aura 提供心情記錄功能，讓使用者能透過日記的方式覺察日常情緒波動，而壓力量表則能讓使用者在不確定是否該諮商時，提供當前壓力評估與建議。此外，Aura 也建立了有趣的養成模式，以幫助使用者定期的使用與回顧。
        </div>

        <!--滑動區塊3-->
        <div style="height: 250px;width:375px;position:relative;overflow:hidden">
            <div class="circle" id="c3" ref="c3"></div>
            <div id="c3_img" ref="c3_img"><img   src="@/assets/home_c3_img.svg"></div>
        </div>
        <div class="title2" ref="c3_title">整合其他求助與舒壓資源</div>
        <div class="text" ref="c3_text">
            Aura也整合了其他心理輔導與舒壓資源，讓無法即時諮商或想自我調節情緒的使用者有其他方式可循，以紓緩校園諮商的需求量並增進使用者對於自我舒壓的知識。
        </div>

        <div class="bottom">
            地址：701台南市東區大學路1號光復校區雲平大樓東棟3樓<br>
            電話：(06)2757575分機50320。傳真：(06)2766421<br>
            2021 AURA | 版權所有 <br>
        </div>



        <Footer showHome=true />
    </div>
    
</template>
<style scoped>
.bottom{
    margin-top: 60px;
    padding-top: 16px;
    width: auto;
    height: 90px;
    /* 內文5 */

    font-family: Taipei Sans TC Beta;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;


    text-align: center;

    color: #FFFFFF;

    /* 黑 */

    background: #1E1E1E;
    box-shadow: 0px -0.5px 0px rgba(0, 0, 0, 0.3);
}
#c1{
    position:absolute;
    left: -168px;
    top:50px;
    

}
#c1_img{
    position:absolute;
    right: -188px;
    top:80px;
    
}
#c2{
    position:absolute;
    right: -168px;
    top:50px;
    

}
#c2_img{
    position:absolute;
    left: -188px;
    top:80px;
    
}
#c3{
    position:absolute;
    left: -168px;
    top:50px;
    

}
#c3_img{
    position:absolute;
    right: -188px;
    top:80px;
    
}
.circle{
    height: 168px;
    width: 168px;
    border-radius: 50%;
    background: linear-gradient(180deg, rgba(150, 251, 196, 0.7) 33.15%, rgba(32, 226, 215, 0.7) 127.81%);

}
.leftin{
    /* animation 參數設定 */
    animation-name:leftin;    /*動畫名稱，需與 keyframe 名稱對應*/
    animation-duration: 1.5s;    /*動畫持續時間，單位為秒*/
    animation-delay: 0s;    /*動畫延遲開始時間*/
    animation-iteration-count: 1;    /*動畫次數，infinite 為無限次*/ 
    animation-fill-mode :forwards;
}
@keyframes leftin{
    0% { opacity: 0;transform: translateX(0px);}
    50% { opacity: 1;transform: translateX(250px);}
    100% {opacity: 1;transform: translateX(250px); }
}
.rightin{
    /* animation 參數設定 */
    animation-name:rightin;    /*動畫名稱，需與 keyframe 名稱對應*/
    animation-duration: 1.5s;    /*動畫持續時間，單位為秒*/
    animation-delay: 0s;    /*動畫延遲開始時間*/
    animation-iteration-count: 1;    /*動畫次數，infinite 為無限次*/ 
    animation-fill-mode :forwards;
}
@keyframes rightin{
    0% { opacity: 0;transform: translateX(0px);}
    50% { opacity: 1;transform: translateX(-250px);}
    100% {opacity: 1;transform: translateX(-250px); }
}
.text_fadein{
    /* animation 參數設定 */
    animation-name:text_fadein;    /*動畫名稱，需與 keyframe 名稱對應*/
    animation-duration: 1s;    /*動畫持續時間，單位為秒*/
    animation-delay: 0.3s;    /*動畫延遲開始時間*/
    animation-iteration-count: 1;    /*動畫次數，infinite 為無限次*/ 
    animation-fill-mode :forwards;
}
@keyframes text_fadein{
    0% { opacity: 0;}
    100% {opacity: 1;}
}
.title2{
    font-family: Taipei Sans TC Beta;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;

    text-align: center;

    color: #4F4F4F;
    opacity: 0;
}
.text{
    font-family: Taipei Sans TC Beta;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    text-align: left;
    margin-top: 15px;
    padding-left: 8vw;
    padding-right: 8vw;

    /* 深灰 */

    color: #5C5C5C;
    opacity: 0;
}
.text_nofade{
    font-family: Taipei Sans TC Beta;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    text-align: left;
    margin-top: 15px;
    padding-left: 8vw;
    padding-right: 8vw;

    /* 深灰 */

    color: #5C5C5C;

}
.title{
    font-family: Taipei Sans TC Beta;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    margin-top: 45px;

    color: #4F4F4F;
}
.banner{
    
    width: 375px;
    height: 220px;


    background: #EFFFFD;
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
}
</style>
<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'Homepage',
    data(){
        return{

        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            console.log(scrollTop)
            if(scrollTop>=50){
                this.$refs.c1.classList.add("leftin");
                this.$refs.c1_img.classList.add("rightin");
                this.$refs.c1_text.classList.add("text_fadein");
                this.$refs.c1_title.classList.add("text_fadein");
            }
            if(scrollTop>=400){
                this.$refs.c2.classList.add("rightin");
                this.$refs.c2_img.classList.add("leftin");
                this.$refs.c2_text.classList.add("text_fadein");
                this.$refs.c2_title.classList.add("text_fadein");
            }
            if(scrollTop>700){
                this.$refs.c3.classList.add("leftin");
                this.$refs.c3_img.classList.add("rightin");
                this.$refs.c3_text.classList.add("text_fadein");
                this.$refs.c3_title.classList.add("text_fadein");
            }
            
        },
    },
    components:{
        Nav,
        Footer
    }
}
</script>