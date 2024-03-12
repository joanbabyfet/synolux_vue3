<template>
    <h1>{{ $t('about.title') }}</h1>
    <div id="subMenu">
        <div id="innerSubMenu">
            <div id="pagePath"><router-link to="/">{{ $t('backHome') }}</router-link><span class="side2">&nbsp;</span>{{ $t('about.title') }}</div>
        </div>
    </div>
    <div id="mainContents" v-html="$t('about.description')">
    </div>
</template>


<style scoped>

</style>