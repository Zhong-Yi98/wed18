<template>
    <div>
        <div>
            <div>
                <Sy></Sy>
            </div>
                <div>
                    <router-view></router-view>
                </div>
        </div>
    </div>
</template>
<script>
import Sy from '../views/Sy';
export default {
    components:{
        Sy
    }
}
</script>
<style  scoped>
</style>