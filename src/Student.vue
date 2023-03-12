<template>
    <div>
        <h1>Student Template</h1>
        <form>
            <label>Name:</label>
            <input type="text" v-model="name">
            <label>Age:</label>
            <input type="text" v-model="age">
            <label>Grade:</label>
            <input type="text" v-model="grade">
            <button type="submit" @click.prevent="submitForm">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            age: '',
            grade: ''
        }
    },
    methods: {
        submitForm() {
            // Here, you can send the form data to a server or do something else with it
            console.log('Name:', this.name)
            console.log('Age:', this.age)
            console.log('Grade:', this.grade)
        }
    }
}
</script>
