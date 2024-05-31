<script setup>
const props = defineProps({
  context: Object
})
const handleUpdate = (data) => {
  props.context.node.input(data)

}
const handleComplete = () => {
  props.context.node.parent.submit()
}
</script>

<template>
<MazInputCode
    v-model="props.context._value"
    :code-length="6"
    :required="true"
    @update:model-value="handleUpdate"
    @completed="handleComplete"
    placeholder="*"
    class="flex-wrap justify-center"
/>
</template>

<style scoped>

</style>
