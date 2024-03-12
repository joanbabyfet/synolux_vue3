<template>
    <div id="footerIdx">
        <div id="innerFooter">
            <div class="infos">興溢股份有限公司  版權所有 <br />30272 新竹縣竹北市嘉豐南路二段76號4F-5 TEL:03-5508340 FAX:03-5507443</div>
            <div class="infosRight">
                <div class="nav">
                    <router-link to="/about" active-class="current">{{ $t('nav.about') }}</router-link><span class="side">&nbsp;</span>
                    <router-link to="/news" active-class="current">{{ $t('nav.news') }}</router-link><span class="side">&nbsp;</span>
                    <router-link to="/products" active-class="current">{{ $t('nav.products') }}</router-link><span class="side">&nbsp;</span>
                    <router-link to="/service" active-class="current">{{ $t('nav.service') }}</router-link><span class="side">&nbsp;</span>
                    <router-link to="/contact" active-class="current">{{ $t('nav.contact') }}</router-link>
                </div>
                <div class="copyright">Copyright © 2011   Synolux Corp. All Rights Reserved.</div>
            </div>
        </div>
    </div>
</template>