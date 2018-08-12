<template>
  <div class="loader"></div>
</template>

<script>
export default {
  name: 'Loader'
}
</script>

<style lang="scss">
.loader {
  width: 50px;
  height: 50px;
  position: relative;
  background-color: #fff;
  border: 5px solid #ffbc13;
  border-radius: 5px;
  animation: roll 1.5s linear;
  animation-iteration-count: infinite;

  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 5px;
    background-color: #ffbc13;
    position: absolute;
    top: 18px;
    left: 0;
  }

  &:after {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    position: relative;
    background-color: #fff;
    border: 5px solid #ffbc13;
    border-radius: 5px;
    position: absolute;
    top: 11px;
    left: 10px;
  }
}

@keyframes roll {
  0% {
    transform: rotate(0deg);
  }
  10% {
    margin-bottom: 10px;
  }
  25% {
    transform: rotate(90deg);
    margin-bottom: 0;
  }
  50% {
    transform: rotate(90deg);
  }
  70% {
    margin-bottom: 10px;
  }
  80% {
    transform: rotate(180deg);
    margin-bottom: 0;
  }
  100% {
    transform: rotate(180deg);
  }
}
</style>
