<template>
  <aside :class="classes">
    <section>
      <ul>
			<SidebarCompactNavItem label="Home" icon="home" is-active/>
			<SidebarCompactNavItem label="Trending" icon="fire"/>
			<SidebarCompactNavItem label="Subscriptions" icon="collection"/>
			<SidebarCompactNavItem label="Library" icon="duplicate"/>
			<SidebarCompactNavItem label="History" icon="clock"/>
      </ul>
    </section>
  </aside>
</template>

<script lang="ts">
import SidebarCompactNavItem from './SidebarCompactNavItem.vue'
export default {
	components: {
		SidebarCompactNavItem
	},
  computed: {
    classes() {
      return [
        "min-h-screen",
        "overflow-auto",
        "fixed",
        "top-0",
        "pt-14",
        "bg-white",
        "z-20",
      ];
    },
  },
};
</script>
