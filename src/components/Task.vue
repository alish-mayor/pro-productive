<template>
    <div class="task">
        <div class="task__content">
            <div class="task__text">
                <h2 class="task__name">{{ taskData.taskName }}</h2>
                <p class="task__time" :class="completed ? 'completed' : ''">
                    <span v-if="completed">Completed in </span>
                    <span class="hours">{{ parseTime(hours) }}</span>:<span class="minutes">{{parseTime(minutes)}}</span>:<span class="seconds">{{parseTime(seconds)}}</span>
                </p>
            </div>
            <div class="task__buttons">
                <div style="display: inline-block" v-if="!completed">
                    <button class="task__btn" @click="startTimer" :disabled="disabled" :class="disabled ? 'disabled' : ''"><i class='bx bx-play'></i></button>
                    <button class="task__btn" @click="pauseTimer"><i class='bx bx-pause' ></i></button>
                    <button class="task__btn" @click="stopTimer"><i class='bx bx-stop' ></i></button>
                </div>
                <button class="task__btn" @click="deleteTask(index)"><i class='bx bx-trash' ></i></button>
            </div>
        </div>
        <hr class="task__line">
    </div>
</template>

<script>
export default {
    data(){
        return {
            hours: 0,
            minutes: 0,
            seconds: 0,
            interval: 0,
            disabled: false,
            completed: false,
        }
    },
    props:{
        taskData: {},
        index: Number,
    
    },
    methods: {
        deleteTask(index){
            this.$store.commit('deleteTask', index);
        },
        startTimer(){
        this.interval = setInterval(() => {
            this.seconds++;

            if(this.seconds === 60){
            this.seconds = 0;
            this.minutes++;
            }

            if(this.minutes === 60){
            this.minutes = 0;
            this.hours++;
            }
        }, 1000);
        this.disabled = true;
        },
        stopTimer(){
            clearInterval(this.interval);
            this.completed = true;
            this.$store.commit('completeTask', this.index);
        },
        pauseTimer(){
            clearInterval(this.interval);
            this.disabled = false;
        },
        parseTime(time){
            return time.toString().padStart(2, 0);
        },
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
    }

    &__name{
        font-size: 2rem;
        font-weight: 500;
    }

    &__time{
        font-size: 1.6rem;
        font-weight: 300;
        color: #8b8b8b;

        &.completed{
            color: #000000;
        }
    }

    &__buttons i{
        font-size: 2.8rem;
        margin: 0 1rem;
        cursor: pointer;

        
    }

    &__btn{
        background: transparent;
        border: none;

        &:hover
        {
            color: #B2E990;
        }

        &.disabled{
            color: #a5a5a5;
            cursor: initial;
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


@media (min-width: 320px) and (max-width: 767px) {
    .task{
        &__text{
            width: 50%;
        }


        &__name{
        font-size: 1.6rem;
        }

        &__time{
            font-size: 1.4rem;
        }

        &__buttons i{
            font-size: 2.2rem;
            margin: 0 0.5rem;
        }
    }

    
}
</style>