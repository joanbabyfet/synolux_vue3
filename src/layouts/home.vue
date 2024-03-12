<template>
    <div id="containerIdx">
        <div id="HeaderIdx">
            <div id="innerHeaderIdx">
                <Header></Header>
            </div>
        </div>
        <div id="mainIdx">
            <router-view></router-view>
        </div>
        <Footer></Footer>
    </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>