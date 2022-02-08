<template>
    <div class="task">
        <div class="task__content">
            <div class="task__text">
                <h2 class="task__name">{{ taskData.taskName }}</h2>
                <p class="task__time">00:00:00</p>
            </div>
            <div class="task__buttons">
                <i class='bx bx-play'></i>
                <i class='bx bx-pause'></i>
                <i class='bx bx-stop'></i>
                <i class='bx bx-trash' @click="deleteTask(index)"></i>
            </div>
        </div>
        <hr class="task__line">
    </div>
</template>

<script>
export default {
    props:{
        taskData: {},
        index: Number,
    },
    methods: {
        deleteTask(index){
            this.$store.commit('deleteTask', index);
        }
    }
}
</script>

<style lang="scss">
.task{
    margin-bottom: 2rem;

    &__content{
        padding: 1rem 1rem 1.5rem 1rem;
        
        display: flex;
        align-items: center;
        justify-content: space-between;
        // border-bottom: 1px solid #B4B4B4;
    }

    &__name{
        font-size: 2rem;
        font-weight: 500;
    }

    &__time{
        font-size: 1.6rem;
        font-weight: 300;
        color: #8b8b8b;
    }

    &__buttons i{
        font-size: 2.8rem;
        margin: 0 1rem;
        cursor: pointer;

        &:hover, 
        &:focus{
            color: #B2E990;
        }
    }

    &__line{
        width: 88%;
        margin: 0 auto;
        background: #B4B4B4;
        border: none;
        height: 1px;
    }
}
</style>