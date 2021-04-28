<template>
<div class="footer">
<div class="quick-links">
<h3>Quick links</h3>
<ul class="quick-links">
    <a href="">
        <li class="item">Home</li>
    </a>
    <a href="">
        <li class="item">Projects</li>
    </a>
    <a href="">
        <li class="item">Anouncements</li>
    </a>
    <a href="">
        <li class="item">Blog</li>
    </a>
</ul>
</div>
<div class="ref"></div>
<div class="social">
    <h3>Social Media</h3>
<ul class="quick-links">
    <a href="">
        <li class="items">FaceBook</li>
    </a>
    <a href="">
        <li class="items">Instagram</li>
    </a>
    <a href="">
        <li class="items">Telegram</li>
    </a>
    <a href="">
        <li class="items"></li>
    </a>
</ul>
</div>
<h4 class="closing">copy right &copy; 2021 4K Labs</h4>
</div>
</template>
<script>
export default {
    name:'Footer',
    components:{}
}
</script>
<style lang="css">
    .footer{
    text-align:center;
    background:rgb(39, 38, 38);
    color:white;
    padding:70px;
    height:350px;
    display:grid;
    grid-template-columns:250px 50px 250px 50px 250px;
}
.quick-links h3{
    text-align:left;
    text-decoration:underline;

}
.quick-links a{
    text-decoration:none;
    color:rgb(255, 255, 255);
    text-align: left;
}
.quick-links li{
    list-style: none;
    margin:10px;
}
.social h3{
    text-align:left;
    text-decoration:underline;
}
.closing{
    grid-column:1/span all;   
}
@media screen and (max-width:700px){
    .footer{
    display: block;
    height:auto;
}
.links{
    margin-right:50px;
}
}
</style>