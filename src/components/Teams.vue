<template>
<div>
<SubHeader :Title="`@4kLabs`" />   
<div class="team-container">
<Team :name="'Team'" :Description="'This group is very nice'" :Background="'images/web.png'" /> 
<Team :name="'Team'" :Description="'This group is very nice'" :Background="'images/web.png'" /> 
<Team :name="'Team'" :Description="'This group is very nice'" :Background="'images/web.png'" /> 
<Team :name="'Team'" :Description="'This group is very nice'" :Background="'images/web.png'" /> 

</div>
</div>
</template>
<script>
import SubHeader from './SubHeader'
import Team from './Team'
export default {
    name:'Teams',
    components:{
        SubHeader,
        Team
    }
}
</script>
<style lang="css">
.team-container{
    overflow-x:hidden;
    margin-left:70px;
    margin-top:20px;
    display: grid;
    grid-template-columns:repeat(3,350px);
    grid-gap:20px;
}
@media screen and (max-width: 700px){
    .team-container{
        display: block;
        margin-top:20px;
        margin-left:20px;

    }
}
</style>