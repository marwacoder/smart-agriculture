import { ref } from '@vue/composition-api';

export const drawerToggle = () => {
    let drawer = ref(false);

    const openDrawer = () => {
      drawer.value = !drawer.value;
    };
    return { drawer, openDrawer };
}

export const formToggle = () => {
    let form = ref(false);

    const showForm = () => {
      form.value = !form.value;
    };
    return { form, showForm };
}