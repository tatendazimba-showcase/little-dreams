export default {
  name: 'ProductImage',
  props: {
    title: {
      required: true,
      type: String
    },
    description: {
      required: true,
      type: String
    },
    image_url: {
      required: false,
      type: String
    }
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {}
};
