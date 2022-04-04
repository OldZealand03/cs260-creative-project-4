<template>
    <div class="wrapper">
        <div class="definition-box">
            <div class="word">
                {{obj.word}}
            </div>
            <div class="definition"> 

            </div>

        </div>
    </div>
</template>

<script>

// This component displays the definition box. We need a way to pass the data into the vue

export default {
    name: "Definition",
    props: {
        obj: Object,
    },
    data() {

    },
}
</script>

<style scoped>

.definition-box {
    display: flex;
}

</style>
