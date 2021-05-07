<template>
    <div>
        <!--Header使用方法
            有以下property
            showBackArrow:Boolean //若不給值,則不顯示
            showRecord:Boolean //若不給值,則不顯示
            showUser:Boolean //若不給值,則不顯示
            showText:Boolean //若不給值,則不顯示
            navText: String 

            例:
            //只有logo
            <Nav/>
            //有logo跟user_icon   
            <Nav showUser=true />  
            //把logo改成想要的字,有返回
            <Nav showBackArrow=ture showText=true navText="測試測試" />    

        -->
        <Nav showUser=true showRecord=true />  



        <!-- 
            Footer使用方法:如果想要首頁icon有顏色就把showMood改成showHome
            四個圖示分別是: showHome showSchedule showMood showResouce
        -->
        <Footer showMood=true />
    </div>
    
</template>
<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'Feeling',
    components:{
        Nav,
        Footer
    }
}
</script>
