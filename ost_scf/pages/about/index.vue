<template>

  <div class="container">

    <span v-if="$store.state.language.english"><h2> About the Platform <img src="~/assets/nebulas.png" width="50px"> </h2>
    <li>This is a Dapp created on
      <b>
                                <a href="https://nebulas.io/" target="_blank">Nebulas Platform</a>
                            </b>
    </li>
  
    <li>To use this App, you need to have
      <b>
                                <a href="https://github.com/nebulasio/web-wallet" target="_blank"> Nebulas Wallet </a>
                            </b>,
      <b>Nebulas Token</b> and
      <b>
                                <a href="https://github.com/ChengOrangeJu/WebExtensionWallet" target="_blank">Nebulas Web Extension</a>
                            </b>
    </li>
    <li>You need to have
      <b>Mainnet</b> enabled in your Chrome Extension, cost involved to play is very less, lesser than you have ever spent.</li>
    
    <li>About me:
      <a target="_blank" href="https://www.linkedin.com/in/honey-thakuria-b30a3a85/">Linkedin</a>
    </li>

    <h2> About the Nebulas Craft Funding </h2>
    <li> 
        This is platform to support Craft Makers over the world. Craft Makers who need some initial
        funding to get their raw materials, supply chain cost, etc can shown their samples to the world
        on this platform and if people are impressed by their work then they can donate them some NAS in return
        they will get some rewards in the form of few samples of their work, percentage profit from their sell,etc.
        

    </li>
       
        

        </span> <span v-if="$store.state.language.chinese">
          
          <h2> 关于平台 <img src="~/assets/nebulas.png" width="50px"> </h2>
    <li>这是一个Dapp创建的
      <b>
                                <a href="https://nebulas.io/" target="_blank">星云平台</a>
                            </b>
    </li>
  
    <li>要使用这个应用程序，你需要有
      <b>
                                <a href="https://github.com/nebulasio/web-wallet" target="_blank"> 星云钱包 </a>
                            </b>,
      <b>星云令牌</b> 和
      <b>
                                <a href="https://github.com/ChengOrangeJu/WebExtensionWallet" target="_blank">星云Web扩展</a>
                            </b>
    </li>
    <li>你需要拥有
      <b>你需要拥有</b> 在您的Chrome扩展程序中启用后，涉及的游戏费用会非常少，比您花费的时间少。</li>
    
    <li>关于我：
      <a target="_blank" href="https://www.linkedin.com/in/honey-thakuria-b30a3a85/">LinkedIn</a>
    </li>

    <h2> 关于分布式故事应用程序 </h2>
    <li> 


      作者，谁需要钱获得他们的书出版可以使用这个平台来获取钱的形式
        NAS。为了获得NAS，他们需要提供他们认为适合的奖励
        那么多的NAS。作者也需要提供他们的故事的细节，这可以影响
        用户购买奖励并捐赠NAS。
    </li>
    
        
          
           </span>
    
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Create from "~/components/Create.vue";

export default {
  components: {
    Logo,
    Create
  },
  mounted() {
    this.$store.dispatch("call");
  }
};
</script>

<style>
h2 {
  color: green;
  margin-top: 50px;
}

@media (max-width: 400px) {
  h2 {
    color: green;
    margin-top: 40px;
  }
}
</style>
