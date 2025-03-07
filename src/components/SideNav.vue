<template>
  <div class="sidebar">
    <div class="logo-container">
      <img
        :src="require('@/assets/mainLogo.svg')"
        alt="Main Logo"
        class="logo"
      />
    </div>

    <ul>
      <li
        v-for="(item, index) in menuItems"
        :key="index"
        :class="{ selected: item.component === selectedComponent }"
        @click="selectComponent(item.component)"
      >
        <!-- Dynamically Load SVG Icon -->
        <img :src="getIconPath(item.icon)" alt="icon" class="menu-icon" />
        <span>{{ item.label }}</span>
      </li>
    </ul>
    <div class="org-box">
      <img  :src="require('@/assets/user-circle.svg')" alt="icon" class="user-icon" />
      <span class="org-name">Org name</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menuItems: Array,
    selectedComponent: String,
  },
  methods: {
    selectComponent(component) {
      this.$emit("update:currentComponent", component);
    },
    getIconPath(iconName) {
      try {
        console.log("`@/assets/${iconName}.svg` ", `@/assets/${iconName}.svg`);
        return require(`@/assets/${iconName}.svg`);
      } catch (error) {
        console.error(`Icon ${iconName}.svg not found in assets.`);
      }
    },
  },
};
</script>
<style scoped>
.sidebar {
  width: 250px;
  background-color: #ffffff;
  box-shadow: 2px 0 5px rgba(231, 231, 231, 1);
  padding: 15px;
  height: 100vh; 
  position: fixed; 
  top: 0;
  left: 0;
   
}
.logo-container {
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
}

.logo {
  height: auto;
}

ul {
  list-style: none;
  padding: 0;
  width: 100%;
}

li {
  display: flex;
  align-items: center;
  margin: 20px;
  padding: 10px;
  cursor: pointer;
  gap: 10px;
  font-size: 16px;
  transition: background 0.3s;
}

.selected {
  background-color: #ecf4ea;
  border-radius: 10px;
  color: #449834;
}
li:hover {
  background-color: #f0f0f0;
}
span {
  color: #888888;
  font-family: sans-serif;
  font-size: 14px;
}
.menu-icon {
  font-size: 18px;
}
.org-box {
display: flex;
align-items: center;
  width: 80%;
  text-align: center;
  padding: 10px;
  background-color: #ffffff;
  color: #333; 
  border-radius: 12px; 
  border: 1.8px solid  #E7E7E7; 
  position: absolute;
  bottom: 20px; 
  left: 50%;
  transform: translateX(-50%); 
  font-weight: bold;
 
}

.org-name {
  font-size: 16px;
  padding-left: 10px;
  color: #161616;
}
</style>
