<template>
    <div class="task" @click="complete">
        <h2 class="task__name">{{ taskData.taskName }}</h2>
        <p class="task__completed">{{ taskData.completed ? 'Completed' : 'Not completed' }}</p>
        <p class="task__id">{{ taskData.id }}</p>
        <input type="button" value="Delete">
    </div>
</template>

<script>
export default {
    props:{
        taskData: {},
    },
    methods: {
        complete(){
            this.taskData.completed = !(this.taskData.completed);
        }
    }
}
</script>

<style lang="scss">
.task{
    margin-bottom: 1rem;
}
</style>