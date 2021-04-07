import GoBack from '../components/GoBack'
export default {
    
    name:'Album',
    components:{
        GoBack
    },
    head() {
        return {
          title: 'Picture',
          meta: [
            // hid is used as unique identifier.
            {
              hid: 'description',
              name: 'description',
              content: 'Pàgina imatge'
            }
          ]
        }
      }
    
}