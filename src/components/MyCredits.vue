<template>
  <div class="credits">
    <div class="credits-main">
      <div><h1>Credits</h1></div>

      <div class="btn-download">
        <span class="btn-download-name">Export</span>
        <img
          :src="require('@/assets/download.svg')"
          alt="icon"
          class="user-icon"
        />
      </div>
    </div>

    <div class="credits-cards">
      <Select
        v-model="selectedCity"
        :options="cities"
        optionLabel="name"
        placeholder="Select project"
        class="dropdown"
        appendTo="body"
        :virtualScrollerOptions="{ itemSize: 38 }"
      />

      <IconField>
        <InputIcon class="pi pi-search" />
        <InputText
          v-model="value1"
          placeholder="Search by customer name, plot, zone"
          class="text-filed"
        />
      </IconField>
    </div>

    <div class="credit-table-container">
      <div class="selection-bar">
        <div class="selection-count">
          <span class="selection-icon">
            <i class="pi pi-check-square" style="color: #ff6a33"></i>
          </span>
          <span>{{ selectedRows.length }} selected</span>
        </div>
        <Button
          label="Assign credits"
          icon="pi pi-plus"
          class="p-button-text p-button-plain assign-button"
          style="color: #ff6a33"
        />
      </div>

      <DataTable
        :value="filteredFarmData"
        v-model:selection="selectedRows"
        dataKey="id"
        :paginator="true"
        :rows="10"
        scrollable
        scrollHeight="flex"
        paginatorTemplate="PrevPageLink PageLinks NextPageLink"
        responsiveLayout="scroll"
        class="farm-table custom-orange-checkboxes"
      >
        <Column selectionMode="multiple" style="width: 3rem"></Column>
        <Column field="farmName" header="Farm name"></Column>
        <Column field="owner" header="Customer Name"></Column>
        <Column field="zone" header="Zone"></Column>
        <Column field="plot" header="Plot"></Column>
        <Column field="area" header="Area"></Column>
        <Column field="size" header="Size"></Column>
        <Column field="credits" header="Credits"></Column>
        <Column style="width: 2rem; cursor: pointer">
          <template #body>
            <img
              :src="require('@/assets/Icon.svg')"
              alt="icon"
              class="user-icon"
            />
          </template>
        </Column>
        <Column style="width: 2rem; cursor: pointer">
          <template #body>
            <img
              :src="require('@/assets/pen-write.svg')"
              alt="icon"
              class="user-icon"
            />
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Column from "primevue/column";
import Select from "primevue/select";
import DataTable from "primevue/datatable";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import InputText from "primevue/inputtext";
import Button from "primevue/button";

const value1 = ref("");
const selectedCity = ref();
const selectedRows = ref([]);

const cities = ref([
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
  { name: "Paris", code: "PRS" },
]);

const farmData = ref(
  Array(100)
    .fill()
    .map((_, index) => ({
      id: index + 1,
      farmName: `Farm ${index + 1}`,
      owner: `Customer ${index + 1}`,
      zone: `Zone ${index + 1}`,
      plot: `F-${(index % 20) + 1}`,
      area: "Quarter Acre",
      size: "32.8",
      credits: "20",
    }))
);

const filteredFarmData = computed(() => {
  if (!value1.value) return farmData.value;

  const searchText = value1.value.toLowerCase();

  return farmData.value.filter(
    (farm) =>
      farm.owner.toLowerCase().includes(searchText) ||
      farm.zone.toLowerCase().includes(searchText) ||
      farm.plot.toLowerCase().includes(searchText)
  );
});
</script>

<style scoped>
.dropdown-width {
  min-width: 250px;
}
.credits {
  height: 100%;
  font-family: sans-serif;
  padding: 10px;
  display: flex;
  flex-direction: column;
}
h1 {
  font-size: 24px;
}
.credits-main {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;
}
.credits-cards {
  display: flex;
  gap: 40px;
  margin-bottom: 20px;
}
.text-filed {
  min-width: 380px;
}
.btn-download {
  height: 3.1rem;
  display: flex;
  align-items: center;
  min-width: 110px;
  text-align: center;
  padding: 10px;
  background-color: #449834;
  color: #333;
  border-radius: 6px;
  border: 1.8px solid #e7e7e7;
  font-weight: bold;
  cursor: pointer;
}

.btn-download-name {
  display: inherit;
  font-weight: 500;
  font-size: 14px;
  padding-right: 10px;
  color: #fff;
}

.credit-table-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
}

.farm-table {
  flex: 1;
  overflow: auto;
}

.selection-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fce7de;
  border: 1px solid #ffe9e2;
  border-radius: 4px;
  padding: 0.5rem 1rem;
}

.selection-count {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.selection-icon {
  display: flex;
  align-items: center;
}

.assign-button:hover {
  background-color: #fff1ec !important;
}

:deep(.p-paginator) {
  justify-content: flex-end;
  background-color: transparent;
  border: none;
}

:deep(.p-datatable-scrollable-body) {
  overflow: auto;
}





:deep(.p-paginator .p-paginator-pages .p-paginator-page) {
  border-radius: 7px !important;
  min-width: 2.5rem;
  height: 2.5rem;
  color: black !important;
}
:deep(.p-paginator-page-selected) {
  background-color: #e7e7e7 !important;
}
:deep(.p-paginator-prev),
:deep(.p-paginator-next) {
  border-radius: 7px !important;
  border: 2px solid #ccc !important;
  min-width: 2.5rem;
  height: 2.5rem;
 
}
:deep(.p-checkbox-checked .p-checkbox-box) {
  background-color: #ed6c30 !important;
  border-color: #ed6c30 !important;
  background: #ed6c30 !important;
}


</style>
