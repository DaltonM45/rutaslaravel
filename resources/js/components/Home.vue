<template>
    <div>
        <ul class="menu">
            <li><router-link :to="{name: '/'}">Inicio</router-link></li>
            <li> <router-link :to="{name: 'about'}">acerca de</router-link></li>
            <li><router-link to="/contacts">contactos</router-link></li>
            <li><router-link to="/games">games</router-link></li>
            <li> <p @click="$router.push('/sesion')">iniciar sesion</p></li>
        </ul>

        <!-- <router-view></router-view>  -->
    </div>
</template>

<script>
    export default {
      methods : {
          ruta(){
            //   this.$router.push('/sesion')
          }
      }
    }
</script>


<style>
.menu{
    list-style: none;
    padding: 0;
    background: #09232738;
    width: 100%;
}

.menu li  {
    cursor: pointer;
    color: #fff;
    text-decoration: none;
    display: block;
    padding: 20px;
}

.menu li:hover{
    background: #ef8354;
}

.menu li{
 display: inline-block;
 text-align: center;
}

</style>
