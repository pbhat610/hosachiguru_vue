<template>
    <div class="credits-container">
      <h2>Credits</h2>
  
      <!-- Project Selection & Search Box -->
      <div class="header">
        <Dropdown v-model="selectedProject" :options="projects" placeholder="Select project" class="dropdown" />
        <InputText v-model="searchQuery" placeholder="Search by customer name, plot, zone" class="search" />
      </div>
  
      <!-- PrimeVue DataTable -->
      <DataTable v-model:selection="selectedRows" :value="filteredCredits" paginator :rows="10" selectionMode="multiple">
        <template #header>
          <div class="table-header">
            <span v-if="selectedRows.length > 0">{{ selectedRows.length }} selected</span>
            <Button label="Assign credits" class="assign-btn" />
          </div>
        </template>
  
        <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
        <Column field="farm" header="Farm Name"></Column>
        <Column field="customer" header="Customer"></Column>
        <Column field="zone" header="Zone"></Column>
        <Column field="plot" header="Plot"></Column>
        <Column field="size" header="Size"></Column>
        <Column field="weight" header="Weight"></Column>
        <Column field="credits" header="Credits"></Column>
        <Column header="Actions">
          <template #body="slotProps">
            <i class="pi pi-pencil edit-icon" @click="editRow(slotProps.data)"></i>
          </template>
        </Column>
      </DataTable>
    </div>
  </template>
  
  <script>
  import { computed, ref } from "vue";
  import DataTable from "primevue/datatable";
  import Column from "primevue/column";
  import Dropdown from "primevue/dropdown";
  import InputText from "primevue/inputtext";
  import Button from "primevue/button";
  
  export default {
    components: { DataTable, Column, Dropdown, InputText, Button },
    setup() {
      const selectedProject = ref(null);
      const projects = ref(["Project A", "Project B", "Project C"]);
      const searchQuery = ref("");
      const selectedRows = ref([]);
  
      // Dummy Data
      const credits = ref([
        { id: 1, farm: "Farm name", customer: "John Doe", zone: "Zone 1", plot: "F-20", size: "Quarter Acre", weight: 32.8, credits: 20 },
        { id: 2, farm: "Farm name", customer: "John Doe", zone: "Zone 1", plot: "F-20", size: "Quarter Acre", weight: 32.8, credits: 20 },
        { id: 3, farm: "Farm name", customer: "John Doe", zone: "Zone 1", plot: "F-20", size: "Quarter Acre", weight: 32.8, credits: 20 },
      ]);
  
      // Computed property for filtering
      const filteredCredits = computed(() => {
        if (!searchQuery.value) return credits.value;
        return credits.value.filter((item) =>
          Object.values(item).some((val) => val.toString().toLowerCase().includes(searchQuery.value.toLowerCase()))
        );
      });
  
      const editRow = (rowData) => {
        console.log("Editing:", rowData);
      };
  
      return {
        selectedProject,
        projects,
        searchQuery,
        selectedRows,
        credits,
        filteredCredits,
        editRow
      };
    },
  };
  </script>
  
  <style scoped>
  .credits-container {
    padding: 20px;
  }
  .header {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
  }
  .search {
    width: 300px;
  }
  .assign-btn {
    background-color: #ff9800;
    color: white;
    border: none;
    padding: 5px 15px;
  }
  .edit-icon {
    cursor: pointer;
    color: #007bff;
  }
  </style>
  