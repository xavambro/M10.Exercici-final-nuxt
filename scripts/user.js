import GoBack from '@/components/GoBack'
export default {
    
    name:'User',
    components:{
        GoBack
    },
    head() {
        return {
          title: 'User',
          meta: [
            // hid is used as unique identifier.
            {
              hid: 'description',
              name: 'description',
              content: 'Pàgina de usuari'
            }
          ]
        }
      }

}