<template>
    <div class="tasks-view vidget vidget_large">
        <div class="input">
            <input class="input__field"  type="text" placeholder="enter the task name..." v-model="taskInput" @keydown.enter="addTask(taskInput)">
            <i class='bx bx-plus input__icon input__icon_green' @click="addTask(taskInput)"></i>
        </div>
        <ul class="tasks__list">
            <task v-for="(task, index) in tasks" :key="task.id" :taskData="task" :index="index"/>
        </ul>
        <div class="circle circle_green"><i class='bx bx-notepad' ></i></div>
    </div>
</template>

<script>
import task from '../components/Task.vue';
import {mapGetters} from 'vuex';


export default {
    data(){
        return{
            taskInput: '',
        }
    },
    methods:{
        addTask(task){
            if(this.taskInput.length === 0) return;
            this.$store.commit('addTask', {
                id: Math.trunc(Math.random() * 1000),
                taskName: task,
                completed: false,
            });
            this.taskInput = '';
        }
    },
    components: {
        task
    },
    computed: {
        ...mapGetters({
            tasks: 'getTasks'
        })
    },
    

    
}
</script>

<style scoped lang="scss">
.tasks-view{
    height: 100%;
}

.tasks__list{
    padding: 2rem 3rem 0 3rem;
}

@media (min-width: 320px) and (max-width: 767px) {
    .tasks__list{
        padding: 1rem 0;
    }
}

</style>