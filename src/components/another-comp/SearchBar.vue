<script>
import { store } from '../../store';
export default {
    name: 'SearchBar',
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div>
        <form action="" @submit.prevent="$emit('filter')">
            <input type="text" v-model="store.title" placeholder="&#xf002; Search" style="font-family:Arial">
            <div>
                <button @click="store.active = true"> Cerca</button>
            </div>
        </form>
    </div>
</template>


<style lang="scss" scoped>
form {
    display: flex;

    input {
        padding: 5px;
        background-color: black;
        border-radius: 10px;
        border: none;
        color: white;
        border: 1px solid white;
    }

    div {
        padding: 0px 5px;

        button {
            padding: 5px;
            background-color: black;
            color: white;
            border: 1px solid red;
            border-radius: 10px;
            cursor: pointer;
        }
    }

}
</style>