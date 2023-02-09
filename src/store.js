import { reactive } from "vue";

export const store = reactive({
   listFilm: [],
   listTv: [],
   title: '',
   fullList: [],
   active : false,
});