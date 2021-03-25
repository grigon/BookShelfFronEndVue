<template>
    <div class="container">
        <h1>MMMMMMMMMMMMMMMMMSDGGGGGGGGGGGGG</h1>
        <div v-if="error" class="error">{{error}}</div>
        <Suspense v-else>
            <template #default>
                <AllUserChats></AllUserChats>

            </template>
            <template #fallback>
                <AppLoader />
            </template>
        </Suspense>
    </div>
</template>





<script>
import { onErrorCaptured, ref } from 'vue';
export default {
    components: {},

    setup() {
        const error = ref(null);

        onErrorCaptured(e => {
            error.value = e
            return true;
        });

        return {error}
    }
}
</script>

<style lang="scss">
.contaier {
    width: 80vh;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #aa2222;
    color: #000;
}
</style>