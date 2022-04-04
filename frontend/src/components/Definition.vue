<template>
    <div class="wrapper">
        <div class="definition">
            <div class="button">
                <button @click="addToSaved(def)">Save to Personal</button>
            </div>
        </div>
    </div>
</template>

<script>

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

.definition {
    display: flex;
}


</style>
