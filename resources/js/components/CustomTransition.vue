<template>
    <TransitionGroup name="fade" tag="ul">
        <slot />
    </TransitionGroup>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>
