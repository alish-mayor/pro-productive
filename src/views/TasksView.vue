<template>
    <div class="tasks-view vidget vidget_large">
        <div class="input">
            <input class="input__field"  type="text" placeholder="enter the task name..." v-model="taskInput" @keydown.enter="addTask(taskInput)">
            <i class='bx bx-plus input__icon input__icon_green' @click="addTask(taskInput)"></i>
        </div>
        <ul class="tasks__list">
            <task v-for="task in tasks" :key="task.id" :taskData="task"/>
        </ul>
        <div class="circle circle_green"><i class='bx bx-notepad' ></i></div>
    </div>
</template>

<script>
import task from '../components/Task.vue';

export default {
    data(){
        return{
            taskInput: '',
            tasks: [
                {
                    id: Math.trunc(Math.random() * 1000),
                    taskName: 'Do homework',
                    completed: false,
                }
            ],
        }
    },
    methods:{
        addTask(task){
            if(this.taskInput.length === 0) return;
            this.tasks.push(
            {
                id: Math.trunc(Math.random() * 1000),
                taskName: task,
                completed: false,
            }
            )
            this.taskInput = '';
        }
    },
    components: {
        task
    }
}
</script>

<style scoped lang="scss">
.tasks-view{
    height: 100%;
}

.tasks__list{
    padding: 2rem 3rem 0 3rem;
}

</style>