<template>
    <div class="container-chat">
        <h1>MMMMMMMMMMMMMMMMMSDGGGGGGGGGGGGG</h1>
        <div v-if="error" class="error">{{error}}</div>
        <Suspense v-else>
            <template #default>
                
                
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
    name : 'MainChatView',


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
.container-chat {
    width: 100vh;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #aa2222;
    color: #000;
}
</style>