<template>
    <h1>{{ $t('products.title') }}</h1>
    <div id="subMenu">
        <div id="innerSubMenu">
            <div id="pagePath"><router-link to="/">{{ $t('backHome') }}</router-link><span class="side2">&nbsp;</span>{{ $t('products.title') }}</div>
        </div>
    </div>
    <div id="mainContents">
        <p><img src="@/assets/images/products/logo-Bruker.gif" width="130" height="72" alt="logo"/></p>
        <h2>Bruker 表面輪廓階高量測儀</h2>
        <div class="productBox productBoxEnd">
            <img src="@/assets/images/products/dektakXT.jpg" width="250" height="167"/>
            <a name="p1" id="p1"></a>
            <p><strong>Dektak XT:</strong> 為承襲優異前代Dektak 150
                所進階升級產品，針對量測雜訊與穩定性等所提升的堅固橋式結構感測器固定架構，達到在0.1um階高標準片下，仍有5A
                的極佳重複性，開放式載台操作與全新介面，讓使用者除方便快速操作與準確量測下，免螺絲簡易快速換針設計避免人為疏失及低保養率也是一大優點! </p>
        </div>
        <p>&nbsp;</p>
    </div>
</template>