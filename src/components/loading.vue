<template>
  <div class="loading">
    <img src="http://static.oschina.net/uploads/space/2015/0724/100832_XWND_2392582.gif" alt />
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
img {
  width: 0.4rem;
  height: 0.4rem;
}
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.5);
}
</style>