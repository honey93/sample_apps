<template>
    <div class="container-fluid footer">
        <div class="row">
            <div class="col-md-4 text-center">
                <p><a href="https://explorer.nebulas.io/#/address/n1z4NUK8aYzVKMzyhZYSf2G6gUbJ9eLCSiA" target="_blank"> <span v-if="$store.state.language.english">Contract </span> <span v-if="$store.state.language.chinese">合约 </span> </a></p>
                 </div>
            <div class="col-md-4 text-center">
    
                <p>  <nuxt-link to="/about" class="about"><span v-if="$store.state.language.english">About App </span>
            <span v-if="$store.state.language.chinese">关于App </span></nuxt-link></p>
                
    
            </div>
            <div class="col-md-4 text-center">
                
                <p><nuxt-link to="/contact" class="about"><span v-if="$store.state.language.english">SCF  </span>
            <span v-if="$store.state.language.chinese">联系我们</span></nuxt-link></p>
                
               
                
    
            </div>

           
        </div>
        <p class="text-center"> ©Social Craft Funding 2018 </p>
    </div>
</template>


<style>
    .footer {
        margin-top: 50px;
        padding: 50px;
        background-color: #212121;
        color: white;
    }

    .footer a{
        color: white!important;
    }
</style>
