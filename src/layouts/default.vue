<template>
    <div id="container">
        <div id="Header" class="bannerA">
            <div id="innerHeader">
                <Header></Header>
            </div>
        </div>
        <div id="main">
            <div id="mainRegion">
                <Sidebar></Sidebar>
                <div id="bodyMain">
                    <div id="bodyMainTop"></div>
                    <div id="innerBodyMain">
                        <router-view></router-view>
                    </div>
                    <div id="bodyMainFooter"></div>
                </div>
                <div id="mainFooterSide"></div>
            </div>
            <Footer></Footer>
        </div>  
    </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Sidebar from "@/components/Sidebar.vue";
</script>
