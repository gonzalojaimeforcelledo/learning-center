import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Materials from '@primeuix/themes/materials'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import {
    Button,
    Checkbox,
    ConfirmationService,
    ConfirmDialog,
    DataTable,
    Dialog, Drawer,
    FileUpload, FloatLabel, IconField, InputText, Menu, Rating,
    Select,
    SelectButton, Tabs, Textarea, Toast, Toolbar, Tooltip
} from "primevue";

createApp(App)
    .use(PrimeVue, {theme:{preset:Materials}, ripple:true})
    .use(ConfirmationService)
    .use(DialogService)
    .use(ToastService)
    .component('pv-button', Button)
    .component('pv-card',Card)
    .component('pv-column', Column)
    .component('pv-confirm-dialog', ConfirmDialog)
    .component('pv-checkbox', Checkbox)
    .component('pv-data-table', DataTable)
    .component('pv-dialog', Dialog)
    .component('pv-select', Select)
    .component('pv-select-button', SelectButton)
    .component('pv-file-upload', FileUpload)
    .component('pv-float-label', FloatLabel)
    .component('pv-icon-field', IconField)
    .component('pv--input-icon', IconIcon)
    .component('pv-input-text', InputText)
    .component('pv-input-munber', InputNumber)
    .component('pv-menu', Menu)
    .component('pv-rating', Rating)
    .component('pv-row', Row)
    .component('pv-drawer', Drawer )
    .component('pv-tag', Tag)
    .component('pv-textarea', Textarea)
    .component('pv-toolbar', Toolbar)
    .component('pv-toast', Toast)
    .directive('tooltip', Tooltip)
    .mount('#app')
