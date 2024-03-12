<template>
    <h1>{{ $t('products.title') }}</h1>
    <div id="subMenu">
        <div id="innerSubMenu">
            <div id="pagePath"><router-link to="/">{{ $t('backHome') }}</router-link><span class="side2">&nbsp;</span>{{ $t('products.title') }}</div>
        </div>
    </div>
    <div id="mainContents">
        <p><img src="@/assets/images/products/logo-Zeta.gif" width="48" height="100" alt="logo"/></p>
        <h2>Zeta 3D 光學表面輪廓階高膜厚量測儀</h2>
        <div class="productBox productBoxEnd">
            <img src="@/assets/images/products/Zeta3D.jpg" width="250" height="261"/>
            <img src="@/assets/images/products/Zeta3D2.jpg" width="250" height="261" style="clear:both;"/>
            <a name="p1" id="p1"></a>
            <p>Zeta
                Instruments研製開發的精密光學測量儀擅長於對各類高粗糙度、低反射率的樣品表面進行形貌分析。我們的產品已廣泛應用於生物技術、太陽能電池、LED發光二極體和微電子機械系統MEMS等產業。我們的大視場光學廓線儀可以測量高深寬比樣品，透明性基板上之表面形貌，分析小至nm、大到mm的形貌、高度、粗度等，以及測量厚度30nm以上的薄膜厚度。與其他顯微鏡系統軟體比較，Zeta
                3D軟體可在更短時間內產生樣品原色3D三維圖像並自動分析各項統計資料。加上Nomarski成像及薄膜厚度測量等選項，使得Zeta
                Instruments成為業內功能最齊全、靈活性最高、及性價比最優的精密測量設備。針對不同產業需求已開發出手動、全自動及包含晶舟自動傳送系統。</p>
        </div>
        <p>&nbsp;</p>
    </div>
</template>