<template>
    <div>
        
        <Nav showText=true navText="新增心情日記" />
        <div class="background">
            <div style="padding-left: 6.4vw;padding-right: 6.4vw;">
                <!--事件名稱-->
                <div>
                    <div class="icon"><img  src="@/assets/icon_diary_pen.svg"></div>
                    <input id="intput_event_name" type="text" placeholder="事件名稱" >
                </div>
                <!--日期-->
                <div class="datebox" style="margin-top:15px;">
                    <div class="icon"><img  src="@/assets/icon_diary_schedule.svg"></div>
                    <input class="form-date__input" type="date" id="input-date" name="input-date-start" value="2021-05-13" />
                </div>
                <!--心情評分-->
                <form id="rating">
                    <div class="icon"><img  src="@/assets/icon_diary_rating_mood.svg"></div>
                    <input type="radio" id="very-happy" name="emoji_rating">
                    <label for="very-happy"></label>
            
                    <input type="radio" id="happy" name="emoji_rating">
                    <label for="happy"></label>
            
                    <input type="radio" id="neutral" name="emoji_rating">
                    <label for="neutral"></label>

                    <input type="radio" id="sad" name="emoji_rating">
                    <label for="sad"></label>

                    <input type="radio" id="very-sad" name="emoji_rating">
                    <label for="very-sad"></label>
                </form>
                <!--事情的經過-->
                <div class="datebox" style="margin-top:25px;">
                    <div class="icon"><img  src="@/assets/icon_diary_schedule.svg"></div>
                    <span class="text">事情的經過/想法</span>   
                </div>
                <textarea  placeholder="請輸入內容"></textarea>

                <!--事情的結果-->
                <div class="datebox" style="margin-top:15px;">
                    <div class="icon"><img  src="@/assets/icon_diary_schedule.svg"></div>
                    <span class="text">事情的經過/想法</span>   
                </div>
                <textarea  placeholder="請輸入內容"></textarea>
            </div>


            <!--送出按鈕/取消按鈕-->
            <b-container style="margin-top:25px;">
                <b-row class="text-center">
                    <b-col>
                        <router-link to="/feeling">
                            <div class="btn_submit">送出</div>
                        </router-link>
                    </b-col>
                    <b-col>
                        <router-link to="/feeling">
                            <div class="btn_cancel">取消</div>
                        </router-link>
                    </b-col>
                        
                </b-row>
            </b-container> 
            
        </div>    
        
        
    </div>
    
</template>
<style scoped>
a{
    text-decoration:none;
}
.btn_cancel{
    height: 43px;
    width: 152px;
    background: #FFFFFF;
    border: 1px solid #20E2D7;
    box-sizing: border-box;
    box-shadow: 0px 4px 17px -1px rgba(107, 182, 177, 0.51);
    border-radius: 33px;

    font-family: Taipei Sans TC Beta;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 43px;
    color: #8E8E8E;
    margin: 0 auto;
}
.btn_submit{
    height: 43px;
    width: 152px;
    background: #20E2D7;
    box-shadow: 0px 4px 17px -1px rgba(107, 182, 177, 0.51);
    border-radius: 33px;

    font-family: Taipei Sans TC Beta;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 43px;
    color: #FFFFFF;
    margin: 0 auto;
    

}
textarea {
    margin-top: 8px;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 10px;

    resize : none;
    width: 100%;
    height: 121px;
    background: linear-gradient(136.56deg, #FFFFFF -16.84%, #FFFFFF 102.5%);
    box-shadow: inset -3px -4px 8px rgba(255, 255, 255, 0.2), inset 3px 4px 10px rgba(54, 116, 101, 0.1);
        


    /*使用 border-image 最大的問題在於，設置的 border-radius 會失效。 */
    background: 
    linear-gradient(136.56deg, #FFFFFF -16.84%, #FFFFFF 102.5%) padding-box, /*this is your grey background*/
    linear-gradient(127.69deg, #C3DAD2 -23.43%, rgba(227, 227, 227, 0.22) 105.04%) border-box;

    border: 1px solid transparent;
    border-radius:10px;
    display:inline-block;
}
.text{
    font-family: Taipei Sans TC Beta;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    vertical-align: bottom;
    /* 深灰 */

    color: #5C5C5C;

    

}

.datebox{
    position: relative;
}
#input-date{
    height: 38px;
    width: 118px;
    text-align: center;
    font-family: Taipei Sans TC Beta;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;


    color: #5C5C5C;

}
/* 隱藏原本的icon */
.form-date__input[type="date"]::-webkit-calendar-picker-indicator {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		color: transparent;
		background: 0 0;
		margin: 0;
		opacity: 0;
		padding: 0;
		pointer-events: auto;
}
/*webkit瀏覽器專用*/
::-webkit-input-placeholder { 
    font-family: Taipei Sans TC Beta;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    color: #C7C7C7; }
/*Firefox 4-18瀏覽器專用*/
input::-moz-placeholder { 
    font-family: Taipei Sans TC Beta;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    color: #C7C7C7; }
/*Firefox 19+瀏覽器專用*/
input::-moz-placeholder{
    font-family: Taipei Sans TC Beta;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    color: #C7C7C7;}
/*IE10瀏覽器專用*/
:-ms-input-placeholder{
    font-family: Taipei Sans TC Beta;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    color: #C7C7C7;}
#intput_event_name{
    height: 38px;
    width: 290px;
    padding-left: 15px;
}
input{
    background: linear-gradient(136.56deg, #FFFFFF -16.84%, #FFFFFF 102.5%);
    box-shadow: inset -3px -4px 8px rgba(255, 255, 255, 0.2), inset 3px 4px 10px rgba(54, 116, 101, 0.1);
    


    /*使用 border-image 最大的問題在於，設置的 border-radius 會失效。 */
    background: 
     linear-gradient(136.56deg, #FFFFFF -16.84%, #FFFFFF 102.5%) padding-box, /*this is your grey background*/
     linear-gradient(127.69deg, #C3DAD2 -23.43%, rgba(227, 227, 227, 0.22) 105.04%) border-box;

    border: 1px solid transparent;
    border-radius:10px;
    display:inline-block;

}
.icon{
    display: inline-block;
    margin-right: 15px;
    width: 17px;
    height: auto;
    margin-left: 5px;
}
.background{    
    height: 637px;
    background: linear-gradient(180deg, #FFFFFF 42.2%, #9FFBDF 203.98%, #40E9D2 270.1%);
    overflow:hidden;
    
    padding-top: 35px;
}
#rating{
    margin-top: 15px;
}
#rating label{
    width: 28px;
    height: 28px;
    vertical-align: middle;
    margin-right: 5px;
    
}
#very-happy+label{
    background: url("../assets/icons_face-very-happy.svg") no-repeat center;
    background-size:contain;
    
}
#very-happy+label:hover{
    background: url("../assets/Aicons_face-very-happy.svg") no-repeat center;
    background-size:contain;
    
}
#very-happy:checked +label{
    background: url("../assets/Aicons_face-very-happy.svg") no-repeat center;
    background-size:contain;
    
}
#happy+label{
    background: url("../assets/icons_face-happy.svg") no-repeat center;
    background-size:contain;
    
}
#happy+label:hover{
    background: url("../assets/Aicons_face-happy.svg") no-repeat center;
    background-size:contain;
    
}
#happy:checked +label{
    background: url("../assets/Aicons_face-happy.svg") no-repeat center;
    background-size:contain;
    
}

#neutral+label{
    background: url("../assets/icons_face-neutral.svg") no-repeat center;
    background-size:contain;
    
}
#neutral+label:hover{
    background: url("../assets/Aicons_face-neutral.svg") no-repeat center;
    background-size:contain;
    
}
#neutral:checked +label{
    background: url("../assets/Aicons_face-neutral.svg") no-repeat center;
    background-size:contain;
    
}

#sad+label{
    background: url("../assets/icons_face-sad.svg") no-repeat center;
    background-size:contain;
    
}
#sad+label:hover{
    background: url("../assets/Aicons_face-sad.svg") no-repeat center;
    background-size:contain;
    
}
#sad:checked +label{
    background: url("../assets/Aicons_face-sad.svg") no-repeat center;
    background-size:contain;
    
}

#very-sad+label{
    background: url("../assets/icons_face-very-sad.svg") no-repeat center;
    background-size:contain;
    
}
#very-sad+label:hover{
    background: url("../assets/Aicons_face-very-sad.svg") no-repeat center;
    background-size:contain;
    
}
#very-sad:checked +label{
    background: url("../assets/Aicons_face-very-sad.svg") no-repeat center;
    background-size:contain;
    
}
input[type="text"]:focus{
    outline: none;
}
textarea:focus{
    outline: none;
}

input[type="radio"] {
	display: none;
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