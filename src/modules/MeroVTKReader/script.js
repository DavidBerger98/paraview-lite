import { mapGetters } from 'vuex';
import module from './module';

export default {
  name: 'MeroVTKReader',
  data() {
    return {
      objectURI: '',
      objectSize: 0,
      module,
      color: 'grey darken-2',
    };
  },
  computed: {
    ...mapGetters({
      client: 'PVL_NETWORK_CLIENT',
    }),
    activeSourceId() {
      return this.$store.getters.PVL_PROXY_SELECTED_IDS[0];
    },
  },
  methods: {
    removeActiveModule() {
      this.$store.dispatch('PVL_MODULES_ACTIVE_CLEAR');
    },
    open() {
      this.$store.dispatch('PVL_PROXY_CREATE', {
        name: 'MeroVTKReader',
        parentId: this.activeSourceId,
        initialValues: {
          ObjectURI: this.objectURI,
          ObjectSize: Number(this.objectSize),
        },
        subProxyValues: {},
      });
    },
  },
};

export const MeroVTKReaderDisplay = {
  name: 'MeroVTKReader',

}
