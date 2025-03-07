<template>
  <header class="header">
    <div class="header-content">
      <img :src="require('@/assets/bell.svg')" alt="Notification Icon" class="user-icon" />
      <span>Hi, Muruli</span>
      <img :src="require('@/assets/Avatar.svg')" alt="User Avatar" class="user-icon" />
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>

<style scoped>
.header {
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
  text-align: center;
  width: calc(100% - 250px); 
  margin-left: 250px;
  position: fixed;
  top: 0;
  left: 0; 
  height: 60px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 5px rgba(231, 231, 231, 1);
}
.header-content {
  display: flex;
  align-items: center;

  gap: 10px; /* Adds 5px gap between elements */
  padding-right: 5PX;
}

.user-icon {
  width: 30px;
  height: 30px;
}
</style>
