<template>
    <div id="sidebar">
        <div id="innerSidebar">
            <div class="blockA">
                <div class="main menu">
                    <img src="@/assets/images/sideBarImg.jpg" width="168" height="70" class="visual" />
                    <ul>
                        <li>
                            <router-link to="/products">美國BTU太陽能燒結爐設備</router-link>
                            <ul>
                                <li><router-link to="/products">PV系列</router-link></li>
                                <li><router-link to="/products">PVD系列</router-link></li>
                                <li><router-link to="/products">Tritan HV90</router-link></li>
                            </ul>
                        </li>
                        <li>
                            <router-link to="/products/2">日本Cosmic自動點錫焊機</router-link>
                            <ul>
                            <li><router-link to="/products/2">PDSTC2030系列</router-link></li>
                            <li><router-link to="/products/2">PDSBC2030系列</router-link></li>
                            <li><router-link to="/products/2">PDS2BC2030系列</router-link></li>
                            </ul>
                        </li>
                        <li><router-link to="/products/4">Zeta 3D 光學表面輪廓階高膜厚量測儀</router-link></li>
                        <li><router-link to="/products/5">其它</router-link></li>
                    </ul>
                </div>
                <div class="footer"></div>
            </div>
        </div>
    </div>
</template>