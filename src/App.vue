<template>
  <div class="container">
    <AppHeader />
    <div class="layout">
      <SideNav 
        :menuItems="menuItems" 
        :selectedComponent="currentComponent"
        @update:currentComponent="changeComponent"
      />
      <div class="main-content">
        <component :is="currentComponent"></component>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import SideNav from "./components/SideNav.vue";
import MyDashboard from "./components/MyDashboard.vue";
import MyProjects from "./components/MyProjects.vue";
import UserManagment from "./components/UserManagment.vue";
import MyPlantation from "./components/MyPlantation.vue";
import MyAnnouncement from "./components/MyAnnouncement.vue";
import MyWorkOrders from "./components/MyWorkOrders.vue";
import MyCredits from "./components/MyCredits.vue";

export default {
  components: {
    AppHeader,
    SideNav,
    MyDashboard,
    MyProjects,
    UserManagment,
    MyPlantation,
    MyAnnouncement,
    MyWorkOrders,
    MyCredits
  },
  data() {
    return {
      menuItems: [
        { label: "Dashboard", icon: "MyDashboard", component: "MyDashboard" },
        { label: "Projects", icon: "MyProjects", component: "MyProjects" },
        { label: "User Management", icon: "UserManagment", component: "UserManagment" },
        { label: "Plantation", icon: "MyPlantation", component: "MyPlantation" },
        { label: "Announcement", icon: "MyAnnouncement", component: "MyAnnouncement" },
        { label: "Work Orders", icon: "MyWorkOrders", component: "MyWorkOrders" },
        { label: "Credits", icon: "MyCredits", component: "MyCredits", selected: true }
      ],
      currentComponent: "MyCredits" 
    };
  },
  methods: {
    changeComponent(component) {
      this.currentComponent = component;
    }
  }
};
</script>
<style scoped>

.container {
  display: flex;
  flex-direction: column;
  
  overflow: hidden; 
}

.layout {
  display: flex;
  flex: 1;
  overflow: hidden; 
}


.main-content {
  flex: 1;

  background-color: #f8f9fa;
  margin-left: 250px; 
  margin-top: 60px; 
  height: calc(100vh - 80px);

}
</style>
