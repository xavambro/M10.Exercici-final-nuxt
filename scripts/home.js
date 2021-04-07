// @ is an alias to /src
import {mapGetters} from 'vuex'

export default {
  name: 'Home',
  computed:{
    ...mapGetters(['usersConsulted','albumsConsulted'])
  },
  head() {
    return {
      title: 'Home',
      meta: [
        // hid is used as unique identifier.
        {
          hid: 'description',
          name: 'description',
          content: 'Pàgina inicial'
        }
      ]
    }
  }
}