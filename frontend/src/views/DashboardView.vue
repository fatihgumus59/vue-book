<template>
    <h1>Ad: {{ user.name }}</h1>
    <h1>Mail : {{ user.email }}</h1>

</template>

<script>
import { useUserStore } from '@/stores/userStore';
import { mapState } from 'pinia';

export default {
    name: "DashboardView",
    computed:{
        ...mapState(useUserStore,['user']),

    }
}
</script>

<style scoped></style>