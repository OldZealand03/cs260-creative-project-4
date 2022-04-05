<template>
    <div class="wrapper">
        <div class="definition-box">
            <div class="word">
                <h3>{{obj.word}} {{obj.phonetic}} : {{obj.meanings[0].partOfSpeech}}</h3>
                <p>Definition : {{obj.meanings[0].definitions[0].definition}}</p>
                <p>{{obj.meanings[0].definitions[0].example}}</p>
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

h3 {
    font-weight: bold;
    font-size: 30px;
}

p {
    font-size: 20px;
}

.definition-box {
    display: flex;
}

</style>
