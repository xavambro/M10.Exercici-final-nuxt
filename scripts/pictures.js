import GoBack from '@/components/GoBack'
import {mapGetters,mapMutations} from 'vuex'
export default {
    head() {
        return {
          title: 'Pictures',
          meta: [
            // hid is used as unique identifier.
            {
              hid: 'description',
              name: 'description',
              content: 'Llistat de imatges'
            }
          ]
        }
      },
    methods:{
        ...mapMutations(['INCREMENT'])
    },
    computed:{
        ...mapGetters(['pictures'])
    },  
    components:{
        GoBack
    }
    
}