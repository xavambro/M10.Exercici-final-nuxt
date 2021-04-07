import {mapGetters, mapMutations} from 'vuex'
import GoBack from "../components/GoBack"

export default {
    head() {
        return {
          title: 'Users',
          meta: [
            // hid is used as unique identifier.
            {
              hid: 'description',
              name: 'description',
              content: 'Llistat de usuaris'
            }
          ]
        }
      },
    methods:{
        ...mapMutations(['INCREMENT'])
    },
    computed:{
        ...mapGetters(['users'])
    }, 
    filters:{
        UpperCase(value){
            return value.toUpperCase();

        }
    },
    components:{
        GoBack
    }
    
}