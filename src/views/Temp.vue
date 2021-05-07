<template>
    <div>
        
        <Nav showBackArrow=ture showText=true navText="這是暫時的頁面" />
        
        <h1>暫時頁面 記得改Footer.vue還有Nav.vue中的router-link!</h1>

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