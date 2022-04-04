<template>
    <div class="wrapper">
        <div class="definition-box">
            <div class="word">

            </div>
            <div class="definition"> 

            </div>
            <div class="button">
                <button @click="addToSaved(def)">Save to Personal</button>
            </div>
        </div>
    </div>
</template>

<script>

// This component displays the definition box. We need a way to pass the data into the vue

export default {
    name: "Definition",
    data() {

    },
    methods: {
        addToSaved(def) {
            console.log(def);
        }
    }

}
</script>

<style scoped>

.definition-box {
    display: flex;
}

</style>
