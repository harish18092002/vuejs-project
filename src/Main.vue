<template>
  <div>
    <h1>List of Students</h1>
    <ul>
      <li v-for="(student, index) in students" :key="index">
        {{ student.name }}
      </li>
    </ul>
    <button @click="goToStudentPage">Next</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      students: [
        { name: 'John Doe' },
        { name: 'Jane Doe' },
        { name: 'Bob Smith' },
        { name: 'Alice Johnson' },
        { name: 'Mike Davis' }
      ]
    }
  },
  methods: {
    goToStudentPage() {
      this.$router.push('/student')
    }
  }
}
</script>
