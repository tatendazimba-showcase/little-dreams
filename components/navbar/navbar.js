import Logo from '~/components/logo/';
import Avatar from '~/components/avatar/';

export default {
  name: 'NavBar',
  components: { Logo, Avatar },
  props: {},
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {
    user() {
      return {
        username: 'tatenda',
        avatarUrl: null
      };
    }
  }
};
