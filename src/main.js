import { createApp } from "vue";
import "./flags.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Noir from './presets/Noir.js';
import ConfirmationService from 'primevue/confirmationservice'
import DialogService from 'primevue/dialogservice'
import ToastService from 'primevue/toastservice';
import 'primeicons/primeicons.css';  
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
import "primeicons/primeicons.css";

const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Noir,
        options: {
            prefix: 'p',
            darkModeSelector: '.p-dark',
            cssLayer: false,
        }
    }
});


app.use(ConfirmationService);
app.use(ToastService);
app.use(DialogService);
app.component('DataTable', DataTable);
app.component('TableColumn', Column);
app.component('PrimeButton', Button);
app.component('PrimeDropdown', Dropdown);
app.component('InputText', InputText);
app.mount("#app");
