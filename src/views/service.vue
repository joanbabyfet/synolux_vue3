<template>
    <h1>{{ $t('service.title') }}</h1>
    <div id="subMenu">
        <div id="innerSubMenu">
            <div id="pagePath"><router-link to="/">{{ $t('backHome') }}</router-link><span class="side2">&nbsp;</span>{{ $t('service.title') }}</div>
        </div>
    </div>
    <div id="mainContents" v-html="$t('service.description')">
    </div>
</template>