<template>
  <span :class="'badge ' + getClass">{{ getStatus }}</span>
</template>

<script>
export default {
  props: {
    status: {
      type: String,
    },
  },
  className: "",
  name: "StatusBadge",
  computed: {
    getStatus() {
      if (this.status === "ACTIVE") {
        return "Активный";
      } else if (this.status === "DRAFT") {
        return "Черновик";
      } else if (this.status === "IN_PROCESS") {
        return "В работе";
      } else if (this.status === "COMPLETED") {
        return "Выполнена";
      } else if (this.status === "TESTING") {
        return "Тестирование";
      } else if (this.status === "TESTING_DONE") {
        return "Завершена";
      } else if (this.status === "CLOSED") {
        return "Закрыта";
      } else if (this.status === "DELETED") {
        return "Удалена";
      } else if (this.status === "BLOCKED") {
        return "Не активен";
      } else return null;
    },
    getClass() {
      if (this.status === "ACTIVE") {
        return "badge-primary";
      } else if (this.status === "DRAFT") {
        return "badge-bronze";
      } else if (this.status === "IN_PROCESS") {
        return "badge-bronze";
      } else if (this.status === "COMPLETED") {
        return "badge-primary";
      } else if (this.status === "TESTING") {
        return "badge-bronze";
      } else if (this.status === "TESTING_DONE") {
        return "badge-primary";
      } else if (this.status === "CLOSED") {
        return "badge-primary";
      } else if (this.status === "DELETED") {
        return "badge-deleted";
      } else if (this.status === "BLOCKED") {
        return "badge-disabled";
      } else return null;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
