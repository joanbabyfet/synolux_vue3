<template>
    <h1>{{ $t('products.title') }}</h1>
    <div id="subMenu">
        <div id="innerSubMenu">
            <div id="pagePath"><router-link to="/">{{ $t('backHome') }}</router-link><span class="side2">&nbsp;</span>{{ $t('products.title') }}</div>
        </div>
    </div>
    <div id="mainContents">
        <p><img src="@/assets/images/products/logo-Cosmic.gif" width="270" height="53" alt="logo"/></p>
        <h2>Cosmic自動點錫焊機</h2>
        <p>
            Cosmic專業及優異獨特的自動點錫焊技術，利用獨一無二的V型雙焊頭陶瓷加熱器，達到極快的升溫及補溫能力。百分之百定量切錫設計與注錫機構，精確控制每焊點錫量，360度包圍式焊點加熱方式，達到了超越對手的高品質、高穩定、高產出的焊接工藝。</p>
        <div class="productBox">
            <img src="@/assets/images/products/PDSTC1020.jpg" alt="PDSTC2030" width="250" height="317"/>
            <a name="p1" id="p1"></a>
            <h4>PDSTC2030系列：</h4>
            <p>
                全自動型自動化焊接設備，下方配合輸送帶傳輸系統，可準確對位並做焊接，特殊複合式陶瓷焊頭擁有高穩定及高溫控能力，針對目前人工焊接做取代，尤其如DIP、Through-Hole、高散熱等零件均適用。</p>
        </div>
        <div class="productBox"><img src="@/assets/images/products/PDSBC2030.jpg" alt="PDSBC2030" width="250"
                                        height="269"/><a name="p2" id="p2"></a>
            <h4>PDSBC2030系列：</h4>
            <p>
                全自動型自動化焊接設備，下方單載台直接使用治具做焊接樣品固定，即可作業。特殊複合式陶瓷焊頭擁有高穩定及高溫控能力，針對目前人工焊接做取代，尤其如DIP、Through-Hole、高散熱等零件均適用。</p>
        </div>
        <div class="productBox"><img src="@/assets/images/products/PDS2BC2030.jpg" alt="PDS2BC2030" width="250"
                                        height="339"/><a name="p3" id="p3"></a>
            <h4>PDS2BC2030系列：</h4>
            <p>
                全自動型自動化焊接設備，下方擁有雙載台，一進一出的作業模式，更增快了效率卻不降低品質。特殊複合式陶瓷焊頭擁有高穩定及高溫控能力，針對目前人工焊接做取代，尤其如DIP、Through-Hole、高散熱等零件均適用。<br/>
            </p>
        </div>
        <h3>相關影片</h3>
        <div class="productBox productBoxEnd"><a name="vedio" id="p4"></a>
            <h4>焊接過程中助焊劑(FLUX)應用</h4>
            <div>
                <iframe width="420" height="315" src="https://www.youtube.com/embed/E87-I0d-5Gk"
                        frameborder="0" allowfullscreen></iframe>
            </div>
            <h4>Through-Hole焊接影片</h4>
            <div>
                <iframe width="420" height="315" src="https://www.youtube.com/embed/GgEeYKjCxJE"
                        frameborder="0" allowfullscreen></iframe>
            </div>
            <h4>相關線材焊接影片</h4>
            <div>
                <iframe width="420" height="315" src="https://www.youtube.com/embed/yPvZLZru6V0"
                        frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
        <p>&nbsp;</p>
    </div>
</template>