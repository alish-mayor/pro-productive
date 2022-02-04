<template>
    <div class="tasks vidget vidget_large">
        <!-- <h1>Tasks</h1>
        <ul class="tasks__list">
            <task v-for="task in tasks" :key="task.id" :taskData="task"/>
        </ul> -->
        <div class="input">
            <input class="input__field"  type="text" placeholder="enter the task name...">
            <i class='bx bx-plus input__icon input__icon_green'></i>
        </div>
        <div class="circle circle_green"><i class='bx bx-notepad' ></i></div>
    </div>
</template>

<script>
// import task from '../components/Task.vue';

export default {
    data(){
        return{
            // tasks: [
            // {
            //     id: Math.trunc(Math.random() * 9999) + 1000,
            //     taskName: 'Buy bread',
            //     completed: false,
            // },
            // {
            //     id: Math.trunc(Math.random() * 9999) + 1000,
            //     taskName: 'Do homework',
            //     completed: false,
            // }, 
            // {
            //     id: Math.trunc(Math.random() * 9999) + 1000,
            //     taskName: 'Go outside',
            //     completed: false,
            // },
            // ],
        }
    },
    components: {
        // task
    }
}
</script>

<style scoped lang="sass">

</style>